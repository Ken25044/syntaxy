import Link from 'next/link';
import { AuthWelcome, AuthStreakCard, AuthWeakQuestionsSection, AuthLoginCTA } from '@/components/home/AuthSections';

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
  return (
    <div className="space-y-6">
      {/* ウェルカム（クライアント: 認証状態で名前を変える） */}
      <AuthWelcome />

      {/* ストリーク（クライアント: ログイン時のみ表示） */}
      <AuthStreakCard />

      {/* クイックスタート（サーバーで静的レンダリング） */}
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

      {/* 苦手な問題の復習（クライアント: 認証依存） */}
      <AuthWeakQuestionsSection />

      {/* 文法カテゴリ（サーバーで静的レンダリング） */}
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

      {/* ログインCTA（クライアント: 未ログイン時のみ表示） */}
      <AuthLoginCTA />
    </div>
  );
}
