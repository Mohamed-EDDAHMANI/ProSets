"use client";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import type { RootState } from '../../redux/store';

export default function HomePage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 32 }}>
      <h2>Welcome, {user.email}!</h2>
      <p>Your role: {user.role}</p>
      <p>This is the home page. You are authenticated.</p>
    </div>
  );
}
