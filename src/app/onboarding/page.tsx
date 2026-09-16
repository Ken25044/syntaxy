"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { updateUserProfile } from '@/services/userService';

const PURPOSES = [
  { id: 'exam', label: '試験対策（TOEIC, 英検など）', emoji: '📝' },
  { id: 'business', label: 'ビジネス英語・キャリア', emoji: '💼' },
  { id: 'travel', label: '旅行・日常会話', emoji: '✈️' },
  { id: 'hobby', label: '趣味・洋画や洋楽の理解', emoji: '🎬' },
];

const INTERESTS = [
  'テクノロジー', 'スポーツ', 'ニュース', 'エンタメ', 'ビジネス', '旅行', '科学', '文化'
];

export default function OnboardingPage() {
  const { user, profile } = useAuth();
  
  const [purpose, setPurpose] = useState<string>('');
  const [interests, setInterests] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleInterest = (i: string) => {
    setInterests(prev => 
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    );
  };

  const handleSave = async () => {
    if (!user || !purpose) return;
    setLoading(true);
    try {
      await updateUserProfile(user.uid, { purpose, interests });
      window.location.href = '/'; 
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  if (!user || (profile && profile.purpose)) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-white px-5 py-12 flex flex-col max-w-md mx-auto">
      {/* どこからでもホームに戻れるロゴ（左上） */}
      <Link href="/" className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
        <span className="text-xl font-bold text-primary-600 tracking-tight">Syntaxy</span>
      </Link>

      <div className="flex-1 space-y-8 mt-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Syntaxyへようこそ！</h1>
          <p className="text-gray-500 text-sm">あなたに合った学習を提供するために、少しだけ教えてください。</p>
        </div>

        {/* 目的 */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">1. 英語を学ぶ主な目的は何ですか？</h2>
          <div className="space-y-3">
            {PURPOSES.map(p => (
              <button
                key={p.id}
                onClick={() => setPurpose(p.label)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all ${
                  purpose === p.label
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-100 bg-white hover:border-primary-200'
                }`}
              >
                <span className="text-2xl">{p.emoji}</span>
                <span className={`font-medium ${purpose === p.label ? 'text-primary-700' : 'text-gray-700'}`}>
                  {p.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* 興味 */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">2. 興味のあるトピック（複数選択可）</h2>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map(i => {
              const selected = interests.includes(i);
              return (
                <button
                  key={i}
                  onClick={() => toggleInterest(i)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                    selected
                      ? 'border-primary-500 bg-primary-500 text-white shadow-sm'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {i}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <div className="pt-8">
        <button
          onClick={handleSave}
          disabled={!purpose || loading}
          className="w-full py-4 rounded-2xl bg-primary-600 text-white font-bold disabled:opacity-50 transition-colors shadow-sm"
        >
          {loading ? '保存中...' : '学習を始める'}
        </button>
      </div>
    </div>
  );
}
