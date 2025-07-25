import Image from 'next/image';
import { useState } from 'react';
import ColumnEditModal from './ColumnEditModal';

interface ColumnProps {
  title: string;
  columnId: number;
  onColumnUpdate: () => void;
}

const Column = ({ title, columnId, onColumnUpdate }: ColumnProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onColumnEdit = () => {
    //모달창 띄우기
    setIsModalOpen(true);
  };

  return (
    <div className='lg:border-b-0 lg:border-r border-b p-[12px] border-gray-400 lg:w-[354px] lg:shrink-0'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-[8px]'>
            <span className='bg-pri w-[8px] h-[8px] block rounded-full'></span>
            <h5 className='font-bold text-[16px]'>{title}</h5>
            <span className='bg-gray-400 text-xs text-gray-100 font-medium w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
              0
            </span>
          </div>
          <button className='cursor-pointer'>
            <Image
              src='/icons/icon_setting.svg'
              alt='컬럼 설정 아이콘'
              width={22}
              height={22}
              onClick={onColumnEdit}
            />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ColumnEditModal
          title={title}
          columnId={columnId}
          modalOpenState={isModalOpen}
          modalOpenSetState={setIsModalOpen}
          onCreated={onColumnUpdate}
        />
      )}
    </div>
  );
};
export default Column;
