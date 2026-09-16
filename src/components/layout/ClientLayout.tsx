"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { user, profile, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && profile && !profile.purpose && pathname !== '/onboarding') {
      router.replace('/onboarding');
    }
  }, [user, profile, loading, pathname, router]);

  // ログインやオンボーディングはヘッダー・ボトムナビ非表示
  const isNoLayoutPage = pathname === '/login' || pathname === '/onboarding';

  if (isNoLayoutPage) {
    return <ErrorBoundary>{children}</ErrorBoundary>;
  }

  // loading中でも children（ページの静的HTML部分）をそのまま表示する
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 pb-20 max-w-2xl w-full mx-auto px-4 py-6">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
      <BottomNav />
    </div>
  );
}
