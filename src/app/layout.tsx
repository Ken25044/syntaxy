import type { Metadata } from 'next';
import { AuthProvider } from '@/contexts/AuthContext';
import ClientLayout from '@/components/layout/ClientLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syntaxy - 英語文法学習アプリ',
  description: 'Syntaxyは、クイズ形式で英語の文法を楽しく学べる学習アプリです。あなたのレベルに合わせたパーソナライズ学習で、TOEICや大学受験の対策をサポートします。',
  openGraph: {
    type: 'website',
    url: 'https://syntaxy.app/',
    title: 'Syntaxy - 英語文法学習アプリ',
    description: 'Syntaxyは、クイズ形式で英語の文法を楽しく学べる学習アプリです。あなたのレベルに合わせたパーソナライズ学習で、TOEICや大学受験の対策をサポートします。',
    images: ['https://syntaxy.app/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntaxy - 英語文法学習アプリ',
    description: 'Syntaxyは、クイズ形式で英語の文法を楽しく学べる学習アプリです。あなたのレベルに合わせたパーソナライズ学習で、TOEICや大学受験の対策をサポートします。',
    images: ['https://syntaxy.app/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
