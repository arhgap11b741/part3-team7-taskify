'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';
import { postColumn } from '@/api/dashboard/apis';

interface Props {
  dashboardId: number;
  isDuplicateColumnName: (columnName: string) => boolean;
  onClose: (didSucceed: boolean) => void;
}

const ColumnCreateModal = ({ dashboardId, isDuplicateColumnName, onClose }: Props) => {
  const [columnName, setColumnName] = useState<string>('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const handleCreate = async () => {
    if (!columnName) {
      alert('컬럼 제목을 입력해주세요!');
      return;
    }
    if (isDuplicateColumnName(columnName)) {
      setIsDuplicate(true);
      return;
    }
    setIsDuplicate(false);

    try {
      if (isDuplicateColumnName(columnName)) return;
      const newColumn = await postColumn({ title: columnName, dashboardId: dashboardId });

      console.log('생성 성공:', newColumn);
      onClose(true);
    } catch (err) {
      console.error('생성 실패:', err);
      onClose(false);
    }
  };
  const inputChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColumnName(value);
  };

  return (
    <Modal onClose={() => onClose(false)}>
      <h2 className='text-xl font-bold mb-4'>새 컬럼 생성</h2>
      <label className='block mb-2 text-sm font-medium text-gray-700'>이름</label>
      <input
        type='text'
        value={columnName}
        onChange={(e) => inputChangeValue(e)}
        placeholder='대시보드 이름'
        className={`${isDuplicate ? 'm-auto' : 'mb-4'} w-full px-3 py-2 border border-[#D9D9D9] rounded-md `}
      />
      <span className={`${isDuplicate ? 'block' : 'hidden'} text-red-500 text-sm py-3`}>
        중복된 컬럼 이름입니다.
      </span>
      <div className='flex justify-center gap-[8px]'>
        <button
          className='px-4 py-2 w-1/2 bg-white border border-[#D9D9D9] rounded hover:bg-[#e4e4e4]'
          onClick={() => onClose(false)}
        >
          취소
        </button>
        <button
          className='px-4 py-2 w-1/2 bg-[#5534DA] hover:bg-[#3a3063] text-white rounded'
          onClick={handleCreate}
        >
          생성
        </button>
      </div>
    </Modal>
  );
};
export default ColumnCreateModal;
