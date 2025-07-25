'use client';

import { ROUTES } from '@/constants/router';
import { useRouterContext } from '@/contexts/RouterContext';
import { useEffect } from 'react';

export default function Dashboard() {
  const { router } = useRouterContext();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) router.push(ROUTES.LOGIN);
  }, [router]);

  return (
    <section className='flex bg-gray-500 h-screen'>
      <div>나의 대시보드 Section</div>
    </section>
  );
}
