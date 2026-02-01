"use client";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import type { RootState } from '../redux/store';

export default function Page() {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.replace('/home');
    } else {
      router.replace('/login');
    }
  }, [user, router]);
  return null;
}
