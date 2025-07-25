'use client';

import { ROUTES } from '@/constants/router';
import { useRouterContext } from '@/contexts/RouterContext';
import { useEffect } from 'react';

const Page = () => {
  const { router } = useRouterContext();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) router.push(ROUTES.LOGIN);
  }, [router]);

  return (
    <div>
      <span>여긴 대시보드에요</span>
    </div>
  );
};

export default Page;
