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
    <div className='lg:flex-row lg:w-fit lg:overflow-x-scroll sm:m-[20px] flex m-[12px] flex-col w-full'>
      <span>여긴 대시보드에요</span>
    </div>
  );
};

export default Page;
