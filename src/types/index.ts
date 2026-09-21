import { Timestamp } from 'firebase/firestore';

// SVOCの役割
export type SvocRole = 'S' | 'V' | 'O' | 'C' | 'M';

// 問題の各パーツ（単語/句）
export interface QuestionPart {
  text: string;
  role: SvocRole;
}

// 問題ドキュメント（Firestore: questions コレクション）
export interface Question {
  id: string;
  mode: 'simple' | 'personalized';
  difficulty: number; // 1-5
  theme: string;
  japanese_text: string;
  english_text: string;
  explanation?: string; // 解説文
  parts: QuestionPart[];
  options: string[]; // 4択選択肢（シンプルモード用）
  grammar_category: string;
}

// ユーザードキュメント（Firestore: users コレクション）
export interface UserProfile {
  uid: string;
  purpose: string;
  interests: string[];
  streak_days: number;
  last_study_date: Timestamp | null;
  weak_questions?: string[];
}

// 学習ログ（Firestore: study_logs コレクション）
export interface StudyLog {
  id?: string;
  uid: string;
  question_id: string;
  is_correct: boolean;
  answered_at: Timestamp;
  grammar_category: string;
}

// 学習結果（画面間の状態受け渡し用）
export interface AnswerResult {
  question: Question;
  userAnswer: string[];
  isCorrect: boolean;
}

// ── TOEFL対策モード用 ──────────────────────────────────

// TOEFL問題パーツ（チャンク）
export interface ToeflQuestionPart {
  id: string;
  text: string;
  role: SvocRole;
  is_dummy?: boolean;   // reorder用: ダミー選択肢
  is_target?: boolean;  // typing用: 入力対象
}

// TOEFL問題ドキュメント（Firestore: toefl_questions コレクション）
export interface ToeflQuestion {
  id: string;
  question_type: 'reorder' | 'typing';
  japanese_text: string;
  english_text: string;
  target_word?: string;   // typing用: 正解単語
  parts: ToeflQuestionPart[];
}

// TOEFL学習結果（画面間の状態受け渡し用）
export interface ToeflAnswerResult {
  question: ToeflQuestion;
  isCorrect: boolean;
  userAnswer: string[] | string;
}
