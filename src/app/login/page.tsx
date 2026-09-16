"use client";

import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/firebase';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (e) {
      setError('ログインに失敗しました。もう一度お試しください。');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center space-y-8 px-4">
      {/* どこからでもホームに戻れるロゴ（左上） */}
      <Link href="/" className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
        <span className="text-xl font-bold text-primary-600 tracking-tight">Syntaxy</span>
      </Link>
      {/* ロゴ */}
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold text-primary-600 mb-2">Syntaxy</h1>
        <p className="text-gray-500 text-sm">英語文法をゲーム感覚でマスターしよう</p>
      </div>

      {/* 特徴 */}
      <div className="w-full max-w-xs space-y-3">
        {[
          { emoji: '⚡', text: 'SVOCを視覚的に理解' },
          { emoji: '🎯', text: 'あなたに合った問題を出題' },
          { emoji: '📊', text: '学習進捗をトラッキング' },
        ].map((f) => (
          <div key={f.text} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-xl">{f.emoji}</span>
            <span className="text-sm text-gray-700 font-medium">{f.text}</span>
          </div>
        ))}
      </div>

      {/* ログインボタン */}
      <div className="w-full max-w-xs space-y-3">
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold py-3.5 rounded-2xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <svg className="w-5 h-5 animate-spin text-gray-400" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          )}
          <span>{loading ? 'ログイン中...' : 'Googleでログイン'}</span>
        </button>

        {error && (
          <p className="text-red-500 text-xs text-center">{error}</p>
        )}

        <p className="text-center text-xs text-gray-400">
          ログインすることで、利用規約とプライバシーポリシーに同意したことになります。
        </p>
      </div>
    </div>
  );
}
