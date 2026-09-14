import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { StudyLog } from '../types';

const LOGS_COL = 'study_logs';

/** 学習ログを保存 */
export async function saveStudyLog(
  log: Omit<StudyLog, 'id' | 'answered_at'>,
): Promise<void> {
  await addDoc(collection(db, LOGS_COL), {
    ...log,
    answered_at: serverTimestamp(),
  });
}

/** ユーザーの全学習ログを取得（最新100件） */
export async function fetchStudyLogs(uid: string): Promise<StudyLog[]> {
  const q = query(
    collection(db, LOGS_COL),
    where('uid', '==', uid),
    orderBy('answered_at', 'desc'),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as StudyLog));
}

/** カテゴリ別の正答率を集計 */
export function calcCategoryStats(
  logs: StudyLog[],
): Record<string, { correct: number; total: number; rate: number }> {
  const map: Record<string, { correct: number; total: number }> = {};
  for (const log of logs) {
    if (!map[log.grammar_category]) map[log.grammar_category] = { correct: 0, total: 0 };
    map[log.grammar_category].total++;
    if (log.is_correct) map[log.grammar_category].correct++;
  }
  const result: Record<string, { correct: number; total: number; rate: number }> = {};
  for (const [cat, { correct, total }] of Object.entries(map)) {
    result[cat] = { correct, total, rate: total > 0 ? Math.round((correct / total) * 100) : 0 };
  }
  return result;
}

/** 過去7日間の日別正答数を取得 */
export function calcDailyStats(logs: StudyLog[]): { date: string; correct: number; total: number }[] {
  const days: Record<string, { correct: number; total: number }> = {};
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const key = `${d.getMonth() + 1}/${d.getDate()}`;
    days[key] = { correct: 0, total: 0 };
  }
  for (const log of logs) {
    const d = log.answered_at instanceof Timestamp
      ? log.answered_at.toDate()
      : new Date(log.answered_at as unknown as string);
    const key = `${d.getMonth() + 1}/${d.getDate()}`;
    if (days[key]) {
      days[key].total++;
      if (log.is_correct) days[key].correct++;
    }
  }
  return Object.entries(days).map(([date, v]) => ({ date, ...v }));
}
