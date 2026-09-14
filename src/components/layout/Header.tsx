import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {
  const { user } = useAuth();

  // 常にヘッダーを表示し、ロゴからホームに戻れるようにする

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary-600 tracking-tight">Syntaxy</span>
          <span className="text-xs text-gray-400 font-medium hidden sm:block">英語文法学習</span>
        </Link>
        <div className="flex items-center gap-3">
          {user ? (
            <Link to="/settings">
              <img
                src={user.photoURL ?? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName ?? 'U')}&background=2563eb&color=fff`}
                alt={user.displayName ?? 'User'}
                className="w-8 h-8 rounded-full ring-2 ring-primary-100 object-cover"
              />
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              ログイン
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
