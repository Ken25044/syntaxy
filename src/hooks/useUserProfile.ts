import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { fetchUserProfile } from '../services/userService';
import type { UserProfile } from '../types';

interface UseUserProfileResult {
  profile: UserProfile | null;
  loading: boolean;
  refresh: () => void;
}

export function useUserProfile(): UseUserProfileResult {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetchUserProfile(user.uid)
      .then(setProfile)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user, tick]);

  return {
    profile,
    loading,
    refresh: () => setTick((t) => t + 1),
  };
}
