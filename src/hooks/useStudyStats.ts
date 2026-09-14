import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  fetchStudyLogs,
  calcCategoryStats,
  calcDailyStats,
} from '../services/studyLogService';
import type { StudyLog } from '../types';

interface StudyStats {
  logs: StudyLog[];
  totalAnswered: number;
  totalCorrect: number;
  accuracy: number; // 0–100
  categoryStats: Record<string, { correct: number; total: number; rate: number }>;
  dailyStats: { date: string; correct: number; total: number }[];
  loading: boolean;
}

export function useStudyStats(): StudyStats {
  const { user } = useAuth();
  const [logs, setLogs] = useState<StudyLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLogs([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetchStudyLogs(user.uid)
      .then(setLogs)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user]);

  const totalAnswered = logs.length;
  const totalCorrect = logs.filter((l) => l.is_correct).length;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const categoryStats = calcCategoryStats(logs);
  const dailyStats = calcDailyStats(logs);

  return { logs, totalAnswered, totalCorrect, accuracy, categoryStats, dailyStats, loading };
}
