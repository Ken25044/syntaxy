import {
  collection,
  getDocs,
  query,
  where,
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
