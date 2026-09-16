"use client";

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/hooks/useUserProfile';
import { useStudyStats } from '@/hooks/useStudyStats';

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c0 0-4 4-4 8a4 4 0 008 0c0-1.5-.5-3-1.5-4.5C14 7 14.5 9 13 11c-.5.5-1 .8-1.5.9C10.3 10 10 8 10 7c0 0-1 2-1 4a3 3 0 006 0c0-3-3-9-3-9z" />
    </svg>
  );
}

const quickModes = [
  {
    href: '/quiz?mode=simple',
    emoji: '⚡',
    title: 'シンプルモード',
    desc: '4択で英文法をチェック',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    href: '/quiz?mode=personalized',
    emoji: '🧩',
    title: '並べ替えモード',
    desc: 'SVOCを正しく並べよう',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
];

const grammarCategories = [
  '現在時制', '過去時制', '現在完了', '受動態', '助動詞', '仮定法', 
  '不定詞', '動名詞', '分詞', '関係代名詞', '比較', '代名詞', 
  '前置詞', '接続詞'
];

export default function HomePage() {
  const { user } = useAuth();
  const { profile } = useUserProfile();
  const { totalAnswered, accuracy } = useStudyStats();

  const streak = profile?.streak_days ?? 0;
  const firstName = user?.displayName?.split(' ')[0] ?? 'さん';

  return (
    <div className="space-y-6">
      {/* ウェルカム */}
      <section>
        <h1 className="text-2xl font-bold text-gray-800">
          {user ? `おかえり、${firstName} 👋` : 'Syntaxyへようこそ 👋'}
        </h1>
        <p className="text-gray-500 text-sm mt-1">今日も英文法を1問やってみよう</p>
      </section>

      {/* ストリーク（ログイン時） */}
      {user && (
        <section className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-4 flex items-center gap-4 text-white shadow-md shadow-orange-200">
          <FlameIcon className="w-10 h-10 text-white/90 flex-shrink-0" />
          <div>
            <p className="text-2xl font-bold leading-none">{streak}日</p>
            <p className="text-sm text-white/80 mt-0.5">連続学習中 🔥</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-white/70">総回答数</p>
            <p className="text-sm font-semibold">{totalAnswered}問</p>
            {totalAnswered > 0 && (
              <>
                <p className="text-xs text-white/70 mt-1">正答率</p>
                <p className="text-sm font-semibold">{accuracy}%</p>
              </>
            )}
          </div>
        </section>
      )}

      {/* クイックスタート */}
      <section>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">モードを選ぶ</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickModes.map((mode) => (
            <Link
              key={mode.href}
              href={mode.href}
              className={`flex items-center gap-4 p-4 rounded-2xl border ${mode.bg} ${mode.border} hover:shadow-md transition-all active:scale-95`}
            >
              <span className="text-3xl">{mode.emoji}</span>
              <div>
                <p className="font-semibold text-gray-800">{mode.title}</p>
                <p className="text-sm text-gray-500">{mode.desc}</p>
              </div>
              <svg className="w-5 h-5 text-gray-300 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* 苦手な問題の復習 */}
      {user && (
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">苦手な問題</h2>
          </div>
          {profile?.weak_questions && profile.weak_questions.length > 0 ? (
            <Link
              href="/quiz?mode=review"
              className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-md transition-all active:scale-95"
            >
              <span className="text-3xl">🔥</span>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">復習モード</p>
                <p className="text-sm text-gray-500">{profile.weak_questions.length}問の苦手な問題があります</p>
              </div>
              <svg className="w-5 h-5 text-gray-300 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 opacity-60">
              <span className="text-3xl">🎉</span>
              <div>
                <p className="font-semibold text-gray-600">復習モード</p>
                <p className="text-sm text-gray-400">現在、苦手な問題はありません</p>
              </div>
            </div>
          )}
        </section>
      )}

      {/* 文法カテゴリ */}
      <section>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">文法カテゴリ</h2>
        <div className="grid grid-cols-2 gap-2">
          {grammarCategories.map((cat) => (
            <Link
              key={cat}
              href={`/quiz?category=${encodeURIComponent(cat)}`}
              className="px-4 py-3 rounded-xl bg-white border border-gray-100 text-sm font-medium text-gray-700 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700 transition-all text-center"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* ログインCTA（未ログイン時） */}
      {!user && (
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-5 text-white text-center">
          <p className="font-semibold text-lg">ログインして進捗を保存しよう</p>
          <p className="text-sm text-primary-200 mt-1 mb-4">Googleアカウントで簡単に始められます</p>
          <Link
            href="/login"
            className="inline-block bg-white text-primary-600 font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-primary-50 transition-colors"
          >
            Googleでログイン
          </Link>
        </section>
      )}
    </div>
  );
}
