import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '学習進捗 | Syntaxy',
  description: 'あなたの英語文法学習の進捗状況を確認しましょう。カテゴリ別の正答率や連続学習日数をチェックできます。',
};

export default function ProgressLayout({ children }: { children: React.ReactNode }) {
  return children;
}
