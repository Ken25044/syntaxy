import {
  collection,
  getDocs,
  query,
  where,
  type QueryConstraint,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { ToeflQuestion } from '../types';

const TOEFL_QUESTIONS_COL = 'toefl_questions';

export interface FetchToeflQuestionsOptions {
  questionType?: 'reorder' | 'typing';
  count?: number;
}

/**
 * toefl_questions コレクションから問題を取得してシャッフル
 *
 * @param opts.questionType - 'reorder' | 'typing' でフィルタ
 * @param opts.count - 取得する問題数（デフォルト: 5）
 */
export async function fetchToeflQuestions(
  opts: FetchToeflQuestionsOptions = {},
): Promise<ToeflQuestion[]> {
  const { questionType, count = 5 } = opts;

  const constraints: QueryConstraint[] = [];
  if (questionType) {
    constraints.push(where('question_type', '==', questionType));
  }

  const q = query(collection(db, TOEFL_QUESTIONS_COL), ...constraints);
  const snap = await getDocs(q);
  const all = snap.docs.map(
    (d) => ({ id: d.id, ...d.data() }) as ToeflQuestion,
  );

  // Fisher–Yates shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }

  return all.slice(0, count);
}
