import 'react-datepicker/dist/react-datepicker.css';
import SnbNav from '@/components/SnbNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      <SnbNav />
      {children}
    </div>
  );
}
