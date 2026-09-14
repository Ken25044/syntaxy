import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { UserProfile } from '../types';

const USERS_COL = 'users';

/** ユーザードキュメントを取得。存在しなければ null */
export async function fetchUserProfile(uid: string): Promise<UserProfile | null> {
  const ref = doc(db, USERS_COL, uid);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as UserProfile) : null;
}

/** 初回ログイン時にユーザードキュメントを作成 */
export async function createUserProfile(uid: string, displayName: string): Promise<UserProfile> {
  const ref = doc(db, USERS_COL, uid);
  const profile: UserProfile = {
    uid,
    purpose: '',
    interests: [],
    streak_days: 0,
    last_study_date: null,
  };
  await setDoc(ref, {
    ...profile,
    display_name: displayName,
    created_at: serverTimestamp(),
  });
  return profile;
}

/** ユーザープロファイルを部分更新 */
export async function updateUserProfile(
  uid: string,
  data: Partial<Omit<UserProfile, 'uid'>>,
): Promise<void> {
  const ref = doc(db, USERS_COL, uid);
  await updateDoc(ref, { ...data, updated_at: serverTimestamp() });
}

/**
 * 学習後にストリーク日数を更新する。
 * - 今日すでに学習済み → 何もしない
 * - 昨日学習 → streak_days + 1
 * - それ以外 → streak_days = 1
 */
export async function updateStreak(uid: string, currentStreak: number, lastStudyDate: Timestamp | null): Promise<number> {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let newStreak = currentStreak;

  if (lastStudyDate) {
    const last = lastStudyDate.toDate();
    const lastDay = new Date(last.getFullYear(), last.getMonth(), last.getDate());
    const diffDays = Math.round((today.getTime() - lastDay.getTime()) / 86400000);

    if (diffDays === 0) return currentStreak; // 今日すでに記録済み
    if (diffDays === 1) {
      newStreak = currentStreak + 1;
    } else {
      newStreak = 1;
    }
  } else {
    newStreak = 1;
  }

  await updateDoc(doc(db, USERS_COL, uid), {
    streak_days: newStreak,
    last_study_date: Timestamp.fromDate(today),
  });

  return newStreak;
}
