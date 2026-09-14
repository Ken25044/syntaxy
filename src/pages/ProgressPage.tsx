import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useStudyStats } from '../hooks/useStudyStats';
import { useUserProfile } from '../hooks/useUserProfile';

// シンプルな棒グラフコンポーネント
function BarChart({ data }: { data: { date: string; correct: number; total: number }[] }) {
  const maxTotal = Math.max(...data.map((d) => d.total), 1);
  return (
    <div className="flex items-end gap-2 h-28">
      {data.map((d) => (
        <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full relative flex flex-col justify-end" style={{ height: '80px' }}>
            {/* 全体バー */}
            <div
              className="w-full bg-gray-100 rounded-t-md absolute bottom-0"
              style={{ height: `${(d.total / maxTotal) * 80}px` }}
            />
            {/* 正解バー */}
            <div
              className="w-full bg-primary-500 rounded-t-md absolute bottom-0 transition-all"
              style={{ height: `${(d.correct / maxTotal) * 80}px` }}
            />
          </div>
          <span className="text-[9px] text-gray-400">{d.date}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProgressPage() {
  const { user } = useAuth();
  const { profile } = useUserProfile();
  const { totalAnswered, accuracy, categoryStats, dailyStats, loading } = useStudyStats();

  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
        <span className="text-5xl">📊</span>
        <h1 className="text-xl font-bold text-gray-800">進捗を確認するには<br />ログインが必要です</h1>
        <Link
          to="/login"
          className="inline-block bg-primary-600 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary-700 transition-colors"
        >
          Googleでログイン
        </Link>
      </div>
    );
  }

  const statCards = [
    { label: '総回答数', value: loading ? '…' : `${totalAnswered}`, unit: '問', color: 'text-primary-600' },
    { label: '正答率', value: loading ? '…' : totalAnswered > 0 ? `${accuracy}` : '—', unit: totalAnswered > 0 ? '%' : '', color: 'text-emerald-600' },
    { label: '連続日数', value: loading ? '…' : `${profile?.streak_days ?? 0}`, unit: '日', color: 'text-amber-500' },
  ];

  const sortedCategories = Object.entries(categoryStats).sort((a, b) => b[1].total - a[1].total);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">進捗</h1>

      {/* サマリーカード */}
      <div className="grid grid-cols-3 gap-3">
        {statCards.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>
              {s.value}<span className="text-sm">{s.unit}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* 過去7日間グラフ */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-600">過去7日間の学習</h2>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-primary-500 inline-block" />正解</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-gray-100 inline-block" />回答数</span>
          </div>
        </div>
        {loading ? (
          <div className="h-28 flex items-center justify-center text-gray-300 text-sm">読み込み中…</div>
        ) : totalAnswered === 0 ? (
          <div className="h-28 flex items-center justify-center text-gray-300 text-sm">まだデータがありません。クイズに挑戦しよう！</div>
        ) : (
          <BarChart data={dailyStats} />
        )}
      </div>

      {/* カテゴリ別成績 */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <h2 className="text-sm font-semibold text-gray-600 mb-4">カテゴリ別正答率</h2>
        {loading ? (
          <div className="text-gray-300 text-sm text-center py-4">読み込み中…</div>
        ) : sortedCategories.length === 0 ? (
          <div className="text-gray-300 text-sm text-center py-4">まだデータがありません</div>
        ) : (
          <div className="space-y-3">
            {sortedCategories.map(([cat, { correct, total, rate }]) => (
              <div key={cat} className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-24 flex-shrink-0 truncate">{cat}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-500 rounded-full transition-all duration-500"
                    style={{ width: `${rate}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 w-12 text-right">
                  {rate}% <span className="text-gray-300">({correct}/{total})</span>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
