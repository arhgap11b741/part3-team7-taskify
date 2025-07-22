'use client';
import SnbNav from '@/components/SnbNav';
import { getColumnsByDashboardId, Column } from '@/api/snb/apis';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import ColumnCreateModal from '@/components/ColumnCreateModal';

const DashboardDetailPage = () => {
  const params = useParams();
  const dashboardId = Number(params.id);
  const [columns, setColumns] = useState<Column[]>([]);
  const prevColumnsRef = useRef<Column[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchColumns = async () => {
      if (isNaN(dashboardId)) {
        console.warn('dashboardId가 유효하지 않습니다:', params.id);
        return;
      }

      try {
        const columns = await getColumnsByDashboardId(dashboardId);
        prevColumnsRef.current = columns;
        console.log(columns);
        setColumns(columns);
      } catch (err) {
        console.error('컬럼 가져오기 실패:', err);
        // 필요한 경우: setError('컬럼을 불러오는 데 실패했어요.');
      }
    };

    fetchColumns();
  }, [dashboardId, params.id]);
  const handleNewColumnAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className='flex bg-[#FAFAFA] h-screen'>
      <SnbNav />
      {columns.map((column) => (
        <div key={column.id} className='bg-white shadow p-4 rounded'>
          <h2 className='font-semibold'>{column.title}</h2>
          {/* 카드 리스트 등 추가 */}
        </div>
      ))}
      <button onClick={handleNewColumnAdd}>새로운 칼럼 추가하기</button>
      {isModalOpen && <ColumnCreateModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default DashboardDetailPage;
