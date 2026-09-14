import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from './Header';
import BottomNav from './BottomNav';

export default function AppLayout() {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  // ログイン済みでプロフィールが存在し、purpose（目的）が未設定の場合はオンボーディングへ
  if (user && profile && !profile.purpose) {
    // 無限ループを防ぐため、既に/onboardingでないか確認（通常AppLayout配下にはないが念のため）
    if (location.pathname !== '/onboarding') {
      return <Navigate to="/onboarding" replace />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 pb-20 max-w-2xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
