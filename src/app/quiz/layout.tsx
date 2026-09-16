import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'クイズ | Syntaxy',
  description: 'Syntaxyの英語文法クイズに挑戦しよう。4択モードと並べ替えモードで、SVOC構文を理解しながら学習できます。',
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
