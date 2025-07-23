'use client';
import SnbNav from '@/components/SnbNav';
import { getColumnsByDashboardId, Column } from '@/api/snb/apis';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ColumnCreateModal from '@/components/column/ColumnCreateModal';
import ColumnComponent from '@/components/column/Columns';
import Image from 'next/image';

const DashboardDetailPage = () => {
  const params = useParams();
  const dashboardId = Number(params.id);
  const [columns, setColumns] = useState<Column[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const fetchColumns = async () => {
    if (isNaN(dashboardId)) {
      console.warn('dashboardId가 유효하지 않습니다:', params.id);
      return;
    }

    try {
      const columns = await getColumnsByDashboardId(dashboardId);
      setColumns(columns);
    } catch (err) {
      console.error('컬럼 가져오기 실패:', err);
    }
  };
  useEffect(() => {
    fetchColumns();
  }, [dashboardId, params.id]);

  const handleNewColumnAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const isDuplicateColumnName = (columnName: string) => {
    const pattern = /[a-zA-Z]/; // 영문 알파벳이 있는지 확인
    // columnName에 영문 알파벳이 없는 경우 (예: "123", "가나다")
    if (pattern.test(columnName) === false) {
      return columns.some((column) => column.title === columnName);
    }
    // columnName에 영문 알파벳이 있는 경우
    // 대소문자를 무시하고 비교하기 위해 toUpperCase()를 호출
    return columns.some((column) => column.title.toUpperCase() === columnName.toUpperCase());
  };
  return (
    <section className='flex bg-[#FAFAFA] h-screen'>
      <SnbNav />
      <div className='lg:flex-row lg:w-fit lg:overflow-x-scroll sm:m-[20px] flex m-[12px] flex-col w-full'>
        {columns.map((column, idx) => (
          <ColumnComponent
            key={idx}
            columnId={column.id}
            title={column.title}
            onColumnUpdate={fetchColumns}
          />
        ))}
        <button
          className='lg:w-[354px] lg:shrink-0 lg:mt-[60px] lg:ml-[20px] sm:mt-[20px] cursor-pointer flex justify-center items-center gap-[12px] bg-white w-full h-[66px] text-base border font-bold border-[#D9D9D9] mt-[16px] rounded-lg'
          onClick={handleNewColumnAdd}
        >
          새로운 칼럼 추가하기
          <Image
            src='/icons/icon_columnAdd.svg'
            width={20}
            height={20}
            alt='새로운 컬럼 추가하는 버튼'
          />
        </button>

        {isModalOpen && (
          <ColumnCreateModal
            isDuplicateColumnName={isDuplicateColumnName}
            dashboardId={dashboardId}
            onClose={(didSucceed) => {
              setIsModalOpen(false);
              if (didSucceed) {
                fetchColumns();
              }
            }}
          />
        )}
      </div>
    </section>
  );
};

export default DashboardDetailPage;
