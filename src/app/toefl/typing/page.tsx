"use client";

import { useState, useMemo, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getMockToeflQuestions } from '@/data/toeflMockData';
import type { ToeflQuestion } from '@/types';

export default function ToeflTypingPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<ToeflQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState<
    { question: ToeflQuestion; isCorrect: boolean }[]
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setQuestions(getMockToeflQuestions('typing'));
    setMounted(true);
  }, []);

  const q = questions[currentIdx];
  if (!mounted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!q) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
        <span className="text-5xl">📚</span>
        <p className="text-gray-600 font-medium">問題がありません</p>
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
        >
          ホームへ
        </button>
      </div>
    );
  }

  return (
    <TypingQuiz
      key={q.id}
      question={q}
      currentIdx={currentIdx}
      totalCount={questions.length}
      onAnswer={(isCorrect) => {
        const newResults = [...results, { question: q, isCorrect }];
        setResults(newResults);
        if (currentIdx + 1 >= questions.length) {
          sessionStorage.setItem(
            'toefl_results',
            JSON.stringify(newResults),
          );
          router.push('/toefl/result');
        } else {
          setCurrentIdx((i) => i + 1);
        }
      }}
    />
  );
}

// ── 1問分のタイピングクイズ ───────────────────────────
function TypingQuiz({
  question,
  currentIdx,
  totalCount,
  onAnswer,
}: {
  question: ToeflQuestion;
  currentIdx: number;
  totalCount: number;
  onAnswer: (isCorrect: boolean) => void;
}) {
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const targetWord = question.target_word ?? '';

  const handleSubmit = () => {
    if (submitted) return;
    const correct =
      inputValue.trim().toLowerCase() === targetWord.toLowerCase();
    setIsCorrect(correct);
    setSubmitted(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSubmit();
    }
  };

  return (
    <div className="space-y-5 pb-36">
      {/* プログレスバー */}
      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1.5">
          <span>Complete the Words · TOEFL</span>
          <span>
            {currentIdx + 1} / {totalCount}
          </span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 rounded-full transition-all duration-300"
            style={{
              width: `${((currentIdx + 1) / totalCount) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* 日本語文 */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <p className="text-xs text-gray-400 mb-2">日本語</p>
        <p className="text-lg font-medium text-gray-800">
          {question.japanese_text}
        </p>
      </div>

      {/* 英文（一部が入力フォーム） */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <p className="text-xs text-gray-400 mb-3">
          空欄に正しい英単語を入力しよう
        </p>
        <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-2 text-base leading-relaxed">
          {question.parts.map((part) => {
            if (part.is_target) {
              return (
                <span key={part.id} className="inline-flex items-baseline">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={submitted}
                    placeholder="..."
                    autoFocus
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    className={`border-b-2 bg-transparent text-center font-mono font-medium outline-none transition-colors px-1 ${
                      submitted
                        ? isCorrect
                          ? 'border-emerald-500 text-emerald-600'
                          : 'border-red-400 text-red-500'
                        : 'border-blue-400 text-gray-800 focus:border-blue-600'
                    }`}
                    style={{
                      width: `${Math.max(targetWord.length, inputValue.length, 4) + 2}ch`,
                    }}
                  />
                </span>
              );
            }
            return (
              <span key={part.id} className="text-gray-700">
                {part.text}
              </span>
            );
          })}
        </div>

        {/* 不正解時に正解を表示 */}
        {submitted && !isCorrect && (
          <div className="mt-3 p-3 bg-red-50 rounded-xl border border-red-100">
            <p className="text-xs text-red-400 mb-1">正解</p>
            <p className="text-red-600 font-mono font-semibold">
              {targetWord}
            </p>
          </div>
        )}
      </div>

      {/* ヒント: 文字数 */}
      {!submitted && (
        <div className="text-center">
          <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
            💡 {targetWord.length} 文字の英単語
          </span>
        </div>
      )}

      {/* 解答ボタン */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!inputValue.trim()}
          className="w-full py-3.5 rounded-2xl bg-amber-500 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-600 transition-colors"
        >
          解答する
        </button>
      )}

      {/* 正解/不正解 + 次へ */}
      {submitted && (
        <div
          className={`rounded-2xl p-5 ${
            isCorrect
              ? 'bg-emerald-500 text-white'
              : 'bg-red-400 text-white'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">
              {isCorrect ? '🎉' : '😅'}
            </span>
            <div>
              <p className="font-bold text-lg">
                {isCorrect ? '正解！' : '不正解...'}
              </p>
              <p className="text-sm text-white/80">
                {isCorrect
                  ? 'スペルも完璧です！'
                  : `正解は "${targetWord}" です`}
              </p>
            </div>
          </div>
          <button
            onClick={() => onAnswer(isCorrect)}
            className="w-full py-2.5 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-colors"
          >
            {currentIdx + 1 >= totalCount ? '結果を見る →' : '次の問題へ →'}
          </button>
        </div>
      )}
    </div>
  );
}
