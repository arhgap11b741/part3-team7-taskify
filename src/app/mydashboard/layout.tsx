import SnbNav from '@/components/SnbNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      <SnbNav /> {/* 왼쪽 사이드 내비 */}
      <main className='flex-1'>{children}</main>
    </div>
  );
}
