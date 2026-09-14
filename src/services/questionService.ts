import {
  collection,
  getDocs,
  query,
  where,
  documentId,
  type QueryConstraint,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { Question } from '../types';

const QUESTIONS_COL = 'questions';

export interface FetchQuestionsOptions {
  mode?: 'simple' | 'personalized';
  category?: string;
  count?: number;
}

/** 問題を取得してシャッフル */
export async function fetchQuestions(opts: FetchQuestionsOptions = {}): Promise<Question[]> {
  const { mode, category, count = 5 } = opts;

  const constraints: QueryConstraint[] = [];
  if (mode) constraints.push(where('mode', '==', mode));
  if (category) constraints.push(where('grammar_category', '==', category));
  // orderBy/limitはインデックスが必要なのでJS側でソート・スライス

  const q = query(collection(db, QUESTIONS_COL), ...constraints);
  const snap = await getDocs(q);
  const all = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Question));

  // difficulty順にソートしてからシャッフル → count件に絞る
  all.sort((a, b) => a.difficulty - b.difficulty);
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.slice(0, count);
}

/** 複数の問題IDから問題を取得 */
export async function fetchQuestionsByIds(ids: string[]): Promise<Question[]> {
  if (!ids || ids.length === 0) return [];

  // Firestoreの'in'クエリは最大10件までなので、チャンクに分ける
  const chunks = [];
  for (let i = 0; i < ids.length; i += 10) {
    chunks.push(ids.slice(i, i + 10));
  }

  const results: Question[] = [];
  for (const chunk of chunks) {
    const q = query(collection(db, QUESTIONS_COL), where(documentId(), 'in', chunk));
    const snap = await getDocs(q);
    snap.docs.forEach((d) => results.push({ id: d.id, ...d.data() } as Question));
  }

  // ランダムにシャッフル
  for (let i = results.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [results[i], results[j]] = [results[j], results[i]];
  }

  return results;
}
