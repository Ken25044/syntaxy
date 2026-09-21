"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SvocDisplay from '@/components/toefl/SvocDisplay';
import type { ToeflQuestion } from '@/types';

interface ResultItem {
  question: ToeflQuestion;
  isCorrect: boolean;
}

// ── スコアリング ──────────────────────────────────────
function ScoreRing({ score, total }: { score: number; total: number }) {
  const pct = total > 0 ? score / total : 0;
  const r = 48;
  const circ = 2 * Math.PI * r;
  const dash = circ * pct;

  return (
    <div className="relative w-28 h-28">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke={
            pct >= 0.8 ? '#10b981' : pct >= 0.5 ? '#f59e0b' : '#ef4444'
          }
          strokeWidth="10"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">{score}</span>
        <span className="text-xs text-gray-400">/ {total}</span>
      </div>
    </div>
  );
}

export default function ToeflResultPage() {
  const router = useRouter();
  const [results, setResults] = useState<ResultItem[] | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem('toefl_results');
    if (!raw) {
      router.replace('/');
      return;
    }
    try {
      const parsed = JSON.parse(raw) as ResultItem[];
      setResults(parsed);
    } catch {
      router.replace('/');
    }
  }, [router]);

  if (!results) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const score = results.filter((r) => r.isCorrect).length;
  const total = results.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  const message =
    pct === 100
      ? '完璧！パーフェクト！🏆'
      : pct >= 80
        ? 'すごい！よくできました 🎉'
        : pct >= 60
          ? 'もう少し！頑張ろう 💪'
          : '復習して再チャレンジ！📚';

  return (
    <div className="space-y-6 pb-20">
      {/* スコア */}
      <div className="flex flex-col items-center text-center space-y-3 py-6">
        <h1 className="text-xl font-bold text-gray-800">TOEFL対策 完了！</h1>
        <p className="text-sm text-gray-500">{message}</p>
        <ScoreRing score={score} total={total} />
        <div className="text-3xl font-bold text-gray-800">
          {pct}
          <span className="text-lg text-gray-400">%</span>
        </div>
      </div>

      {/* 各問題のSVOC解説 */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          問題ごとの解説
        </h2>

        {results.map((result, idx) => {
          const { question, isCorrect } = result;
          const isExpanded = expandedIdx === idx;
          // ダミーを除いた正解パーツ
          const correctParts = question.parts.filter((p) => !p.is_dummy);

          return (
            <div
              key={question.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              {/* ヘッダー（クリックで展開） */}
              <button
                onClick={() =>
                  setExpandedIdx(isExpanded ? null : idx)
                }
                className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                    isCorrect ? 'bg-emerald-500' : 'bg-red-400'
                  }`}
                >
                  {isCorrect ? '○' : '×'}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {question.japanese_text}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {question.question_type === 'reorder'
                      ? 'チャンク整序'
                      : 'Complete the Words'}
                  </p>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-300 transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* SVOC詳細（展開時） */}
              {isExpanded && (
                <div className="px-4 pb-4 border-t border-gray-50">
                  {/* 完成文 */}
                  <div className="mt-3 mb-4">
                    <p className="text-xs text-gray-400 mb-1">完成文</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {question.english_text}
                    </p>
                  </div>

                  {/* SVOC可視化 */}
                  <SvocDisplay parts={correctParts} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 操作ボタン */}
      <div className="flex flex-col gap-3">
        <Link
          href="/toefl/reorder"
          className="w-full py-3.5 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-center"
        >
          チャンク整序をもう一度
        </Link>
        <Link
          href="/toefl/typing"
          className="w-full py-3.5 rounded-2xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors text-center"
        >
          Complete the Words をもう一度
        </Link>
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors text-center py-2"
        >
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
}
