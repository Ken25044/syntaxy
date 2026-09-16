"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ScoreRing({ score, total }: { score: number; total: number }) {
  const pct = total > 0 ? score / total : 0;
  const r = 48;
  const circ = 2 * Math.PI * r;
  const dash = circ * pct;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} fill="none" stroke="#f3f4f6" strokeWidth="10" />
        <circle
          cx="60" cy="60" r={r} fill="none"
          stroke={pct >= 0.8 ? '#10b981' : pct >= 0.5 ? '#f59e0b' : '#ef4444'}
          strokeWidth="10"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-gray-800">{score}</span>
        <span className="text-xs text-gray-400">/ {total}</span>
      </div>
    </div>
  );
}

export default function QuizResultPage() {
  const searchParams = useSearchParams();
  const score = Number(searchParams.get('score') ?? 0);
  const total = Number(searchParams.get('total') ?? 5);
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  const message =
    pct === 100 ? '完璧！パーフェクト！🏆' :
    pct >= 80 ? 'すごい！よくできました 🎉' :
    pct >= 60 ? 'もう少し！頑張ろう 💪' :
    '復習して再チャレンジ！📚';

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-8 text-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">クイズ完了！</h1>
        <p className="text-gray-500 text-sm">{message}</p>
      </div>

      <ScoreRing score={score} total={total} />

      <div className="text-4xl font-bold text-gray-800">
        {pct}<span className="text-xl text-gray-400">%</span>
      </div>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Link
          href="/quiz?mode=simple"
          className="w-full py-3.5 rounded-2xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors text-center"
        >
          もう一度やる
        </Link>
        <Link
          href="/progress"
          className="w-full py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-center"
        >
          進捗を確認する
        </Link>
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors text-center"
        >
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
}
