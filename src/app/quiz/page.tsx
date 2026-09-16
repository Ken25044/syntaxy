"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { fetchQuestions, fetchQuestionsByIds } from '@/services/questionService';
import { saveStudyLog } from '@/services/studyLogService';
import { updateStreak, updateWeakQuestion } from '@/services/userService';
import type { Question, SvocRole } from '@/types';
import { Skeleton } from '@/components/ui/Skeleton';


// SVOC カラーマップ
const ROLE_COLORS: Record<SvocRole, { bg: string; text: string; border: string; label: string }> = {
  S: { bg: 'bg-red-50',    text: 'text-red-600',    border: 'border-red-300',    label: 'S' },
  V: { bg: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-300',   label: 'V' },
  O: { bg: 'bg-green-50',  text: 'text-green-600',  border: 'border-green-300',  label: 'O' },
  C: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-300', label: 'C' },
  M: { bg: 'bg-gray-50',   text: 'text-gray-500',   border: 'border-gray-300',   label: 'M' },
};

// ── 4択モード ──────────────────────────────────────────
function SimpleQuiz({
  question,
  onAnswer,
}: {
  question: Question;
  onAnswer: (answer: string, isCorrect: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const correct = question.options[0];
  const [shuffledOptions] = useState<string[]>(() => 
    [...question.options].sort(() => Math.random() - 0.5)
  );
  const hasSubmitted = useRef(false);

  const handleSelect = (opt: string) => {
    if (hasSubmitted.current) return;
    hasSubmitted.current = true;
    setSelected(opt);
    setTimeout(() => onAnswer(opt, opt === correct), 1000);
  };

  return (
    <div className="space-y-6">
      {/* 日本語文 */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <p className="text-xs text-gray-400 mb-2">日本語</p>
        <p className="text-lg font-medium text-gray-800">{question.japanese_text}</p>
      </div>

      {/* 英文（空欄部分を [  ?  ] に） */}
      <div className="bg-gray-50 rounded-2xl p-4 text-center">
        <p className="text-sm text-gray-500 mb-1">英文を完成させよう</p>
        <p className="text-base font-mono text-gray-700">
          {question.english_text.replace(correct, '[ ？ ]')}
        </p>
      </div>

      {/* 4択 */}
      <div className="grid grid-cols-2 gap-3">
        {shuffledOptions.map((opt) => {
          const isSelected = selected === opt;
          const isCorrectOpt = opt === correct;
          let cls = 'border-gray-100 bg-white text-gray-700 hover:border-primary-200 hover:bg-primary-50';
          if (selected) {
            if (isCorrectOpt) cls = 'border-emerald-400 bg-emerald-50 text-emerald-700';
            else if (isSelected) cls = 'border-red-300 bg-red-50 text-red-600';
            else cls = 'border-gray-100 bg-white text-gray-400 opacity-60';
          }
          return (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`p-4 rounded-2xl border-2 font-medium text-sm transition-all ${cls}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── 並べ替えモード ────────────────────────────────────
function formatDisplayWord(word: string, isFirst: boolean) {
  if (!word) return word;
  if (isFirst) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  if (word === 'I' || word.startsWith('I ') || word.startsWith("I'")) {
    return word;
  }
  return word.charAt(0).toLowerCase() + word.slice(1);
}

function SortQuiz({
  question,
  onAnswer,
}: {
  question: Question;
  onAnswer: (answer: string[], isCorrect: boolean) => void;
}) {
  const correctOrder = question.parts.map((p) => p.text);
  const [bank, setBank] = useState<string[]>(() => [...correctOrder].sort(() => Math.random() - 0.5));
  const [arranged, setArranged] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const hasSubmitted = useRef(false);

  const moveToArranged = (word: string, idx: number) => {
    if (submitted) return;
    setBank((b) => b.filter((_, i) => i !== idx));
    setArranged((a) => [...a, word]);
  };

  const moveToBank = (word: string, idx: number) => {
    if (submitted) return;
    setArranged((a) => a.filter((_, i) => i !== idx));
    setBank((b) => [...b, word]);
  };

  const handleSubmit = () => {
    if (hasSubmitted.current) return;
    if (arranged.length !== correctOrder.length) return;
    hasSubmitted.current = true;
    const correct = JSON.stringify(arranged) === JSON.stringify(correctOrder);
    setIsCorrect(correct);
    setSubmitted(true);
    setTimeout(() => onAnswer(arranged, correct), 1200);
  };

  return (
    <div className="space-y-5">
      {/* 日本語文 */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <p className="text-xs text-gray-400 mb-2">日本語</p>
        <p className="text-lg font-medium text-gray-800">{question.japanese_text}</p>
      </div>

      {/* 並べ替えエリア */}
      <div>
        <p className="text-xs text-gray-400 mb-2">並べ替えてタップ → 下のエリアへ</p>
        <div
          className={`min-h-[72px] border-2 border-dashed rounded-2xl p-3 flex flex-wrap gap-2 transition-colors ${
            submitted
              ? isCorrect
                ? 'border-emerald-300 bg-emerald-50'
                : 'border-red-300 bg-red-50'
              : 'border-gray-200 bg-gray-50'
          }`}
        >
          {arranged.length === 0 && !submitted && (
            <span className="text-gray-300 text-sm self-center">ここに並べよう</span>
          )}
          {arranged.map((word, idx) => {
            const partInfo = question.parts.find((p) => p.text === word);
            const role = (partInfo?.role ?? 'M') as SvocRole;
            const colors = ROLE_COLORS[role];
            return (
              <button
                key={`${word}-${idx}`}
                onClick={() => moveToBank(word, idx)}
                disabled={submitted}
                className={`px-3 py-1.5 rounded-xl border-2 text-sm font-medium transition-all ${colors.bg} ${colors.text} ${colors.border}`}
              >
                {formatDisplayWord(word, idx === 0)}
                <span className="ml-1 text-xs opacity-60">{colors.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 単語バンク */}
      <div>
        <p className="text-xs text-gray-400 mb-2">単語・フレーズ</p>
        <div className="flex flex-wrap gap-2">
          {bank.map((word, idx) => (
            <button
              key={`${word}-${idx}`}
              onClick={() => moveToArranged(word, idx)}
              disabled={submitted}
              className="px-3 py-1.5 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-primary-300 hover:bg-primary-50 transition-all"
            >
              {formatDisplayWord(word, false)}
            </button>
          ))}
        </div>
      </div>

      {/* 送信ボタン */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={arranged.length !== correctOrder.length}
          className="w-full py-3.5 rounded-2xl bg-primary-600 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
        >
          答え合わせ
        </button>
      )}

      {/* 正解の SVOC 表示 */}
      {submitted && (
        <div className="bg-white rounded-2xl border border-gray-100 p-4">
          <p className="text-xs text-gray-400 mb-3">正解の文構造</p>
          <div className="flex flex-wrap gap-3">
            {question.parts.map((part, i) => {
              const colors = ROLE_COLORS[part.role as SvocRole];
              return (
                <div key={i} className="flex flex-col items-center">
                  <span className={`px-3 py-1.5 rounded-xl border-2 text-sm font-medium ${colors.bg} ${colors.text} ${colors.border}`}>
                    {formatDisplayWord(part.text, i === 0)}
                  </span>
                  <span className={`text-xs font-bold mt-1 ${colors.text}`}>{colors.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ── 結果オーバーレイ ──────────────────────────────────
function ResultOverlay({
  isCorrect,
  onNext,
  isLast,
  explanation,
}: {
  isCorrect: boolean;
  onNext: () => void;
  isLast: boolean;
  explanation?: string;
}) {
  return (
    <div className={`fixed inset-x-0 bottom-0 z-50 p-4 pb-8 rounded-t-3xl shadow-2xl transition-all ${isCorrect ? 'bg-emerald-500' : 'bg-red-400'}`}>
      <div className="max-w-lg mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl self-start mt-1">{isCorrect ? '🎉' : '😅'}</span>
          <div>
            <p className="text-white font-bold text-lg">{isCorrect ? '正解！' : '不正解...'}</p>
            <p className="text-white/90 text-sm">{isCorrect ? 'すばらしい！' : 'もう一度チャレンジしよう'}</p>
            {!isCorrect && explanation && (
              <div className="mt-2 bg-white/20 rounded-xl p-3 text-sm text-white border border-white/30">
                <p className="font-semibold mb-1">💡 解説</p>
                <p>{explanation}</p>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={onNext}
          className="bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors"
        >
          {isLast ? '結果を見る' : '次へ →'}
        </button>
      </div>
    </div>
  );
}

// ── メインのQuizPage ──────────────────────────────────
export default function QuizPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, profile } = useAuth();

  const mode = (searchParams.get('mode') ?? 'simple') as 'simple' | 'personalized' | 'review';
  const category = searchParams.get('category') ?? undefined;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastResult, setLastResult] = useState<{ isCorrect: boolean } | null>(null);
  const [score, setScore] = useState(0);
  const [quizKey, setQuizKey] = useState(0); // 問題コンポーネント再マウント用

  useEffect(() => {
    setLoading(true);
    
    const loadQuestions = async () => {
      try {
        let qs: Question[] = [];
        if (mode === 'review') {
          if (!profile?.weak_questions || profile.weak_questions.length === 0) {
            setError('苦手な問題がありません。');
            return;
          }
          qs = await fetchQuestionsByIds(profile.weak_questions);
          // 復習モードでは出題数を絞るか全て出すか（ここでは最大5問とする）
          qs = qs.slice(0, 5);
        } else {
          qs = await fetchQuestions({ mode, category, count: 5 });
        }

        if (qs.length === 0) {
          setError('問題が見つかりませんでした。');
          return;
        }
        setQuestions(qs);
      } catch (e) {
        setError('問題の取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [mode, category, profile?.weak_questions]);

  const handleAnswer = useCallback(
    async (_answer: string | string[], isCorrect: boolean) => {
      const q = questions[currentIdx];
      setLastResult({ isCorrect });
      if (isCorrect) setScore((s) => s + 1);

      if (user && q) {
        try {
          await saveStudyLog({
            uid: user.uid,
            question_id: q.id,
            is_correct: isCorrect,
            grammar_category: q.grammar_category,
          });
          if (isCorrect && profile) {
            await updateStreak(user.uid, profile.streak_days, profile.last_study_date);
          }
          // 苦手の更新
          await updateWeakQuestion(user.uid, q.id, isCorrect);

          // ローカルのprofileのweak_questionsも即座に更新しておく（UX向上のため）
          if (profile) {
            if (isCorrect) {
              profile.weak_questions = (profile.weak_questions || []).filter(id => id !== q.id);
            } else {
              if (!(profile.weak_questions || []).includes(q.id)) {
                profile.weak_questions = [...(profile.weak_questions || []), q.id];
              }
            }
          }
        } catch (e) {
          console.error('Failed to save log or update weak question:', e);
        }
      }
    },
    [questions, currentIdx, user, profile],
  );

  const handleNext = useCallback(() => {
    setLastResult(null);
    if (currentIdx + 1 >= questions.length) {
      router.push(`/quiz/result?score=${score + (lastResult?.isCorrect ? 1 : 0)}&total=${questions.length}`);
    } else {
      setCurrentIdx((i) => i + 1);
      setQuizKey((k) => k + 1);
    }
  }, [currentIdx, questions.length, router, score, lastResult]);

  const q = questions[currentIdx];

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-2 w-full" />
        </div>
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <div className="grid grid-cols-2 gap-3">
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-14 w-full" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
        <span className="text-5xl">😥</span>
        <p className="text-gray-600 font-medium">{error}</p>
        <div className="flex gap-3 mt-2">
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">リトライ</button>
          <button onClick={() => router.push('/')} className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium">ホームへ</button>
        </div>
      </div>
    );
  }

  if (!q) return null;

  const isLast = currentIdx + 1 >= questions.length;

  return (
    <div className="pb-36 space-y-4">
      {/* プログレスバー */}
      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1.5">
          <span>{mode === 'simple' ? '4択' : '並べ替え'} · {q.grammar_category}</span>
          <span>{currentIdx + 1} / {questions.length}</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 難易度 */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${i < q.difficulty ? 'bg-amber-400' : 'bg-gray-100'}`}
          />
        ))}
      </div>

      {/* 問題コンポーネント */}
      {q.mode === 'simple' ? (
        <SimpleQuiz key={quizKey} question={q} onAnswer={(_ans, ok) => handleAnswer(_ans, ok)} />
      ) : (
        <SortQuiz key={quizKey} question={q} onAnswer={(arr, ok) => handleAnswer(arr, ok)} />
      )}

      {/* 結果オーバーレイ */}
      {lastResult && (
        <ResultOverlay 
          isCorrect={lastResult.isCorrect} 
          onNext={handleNext} 
          isLast={isLast} 
          explanation={q.explanation}
        />
      )}
    </div>
  );
}
