import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ログイン | Syntaxy',
  description: 'Syntaxyにログインして、英語文法の学習を始めましょう。Googleアカウントで簡単にログインできます。',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
