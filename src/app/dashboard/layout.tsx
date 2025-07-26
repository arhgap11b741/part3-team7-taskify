import Snb from '@/components/SnbNav';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen'>
      <Snb /> {/* 왼쪽 사이드 내비 */}
      <main className='test flex-1'>
        {children} {/* [dashboardId]/page.tsx, mydashboard/page.tsx 등 렌더링 */}
      </main>
    </div>
  );
}
