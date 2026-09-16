"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import { Skeleton } from '@/components/ui/Skeleton';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { user, profile, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // ログイン済みでプロフィールが存在し、purpose（目的）が未設定の場合はオンボーディングへ
    if (!loading && user && profile && !profile.purpose && pathname !== '/onboarding') {
      router.replace('/onboarding');
    }
  }, [user, profile, loading, pathname, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-6 space-y-6">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </main>
      </div>
    );
  }

  // ログインやオンボーディングはヘッダー・ボトムナビ非表示
  const isNoLayoutPage = pathname === '/login' || pathname === '/onboarding';

  if (isNoLayoutPage) {
    return <ErrorBoundary>{children}</ErrorBoundary>;
  }

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
