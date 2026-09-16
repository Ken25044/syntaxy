"use client";

import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';

export default function SettingsPage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">設定</h1>

      {/* プロフィール */}
      {user && (
        <div className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
          <img
            src={user.photoURL ?? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName ?? 'U')}&background=2563eb&color=fff`}
            alt={user.displayName ?? 'User'}
            className="w-14 h-14 rounded-full ring-2 ring-primary-100 object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">{user.displayName}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      )}

      {/* 学習設定プレースホルダー */}
      <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
        <div className="px-5 py-4">
          <p className="text-sm font-semibold text-gray-600 mb-1">学習目的</p>
          <p className="text-sm text-gray-400">Step 4 でオンボーディング時に設定します</p>
        </div>
        <div className="px-5 py-4">
          <p className="text-sm font-semibold text-gray-600 mb-1">興味・関心</p>
          <p className="text-sm text-gray-400">ニュース、スポーツ、技術など</p>
        </div>
        <div className="px-5 py-4">
          <p className="text-sm font-semibold text-gray-600 mb-1">通知設定</p>
          <p className="text-sm text-gray-400">学習リマインダー（準備中）</p>
        </div>
      </div>

      {/* ログアウト or ログイン */}
      <div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="w-full py-3 rounded-2xl border border-red-100 text-red-500 font-medium text-sm hover:bg-red-50 transition-colors"
          >
            ログアウト
          </button>
        ) : (
          <a
            href="/login"
            className="block w-full py-3 rounded-2xl bg-primary-600 text-white font-semibold text-sm text-center hover:bg-primary-700 transition-colors"
          >
            Googleでログイン
          </a>
        )}
      </div>
    </div>
  );
}
