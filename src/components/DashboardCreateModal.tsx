'use client';

import { useState } from 'react';
import Modal from '@/components/Modal'; //범용 모달

import { postDashboard } from '@/api/snb/apis';

const COLORS = ['#760dde', '#e876ea', '#ffa500', '#76a5ea', '#7ac555'];

interface Props {
  onClose: (didSucceed: boolean) => void;
}

export default function DashboardCreateModal({ onClose }: Props) {
  const [title, setTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleCreate = async () => {
    if (!title || !selectedColor) {
      alert('제목과 색상을 모두 선택해주세요!');
      return;
    }

    try {
      const newDashboard = await postDashboard({ title, color: selectedColor });
      console.log('생성 성공:', newDashboard);
      onClose(true);
    } catch (err) {
      console.error('생성 실패:', err);
      onClose(false);
    }
  };

  return (
    <Modal onClose={() => onClose(false)}>
      <h2 className='text-xl font-bold mb-4'>대시보드 생성</h2>

      <label className='block mb-2 text-sm font-medium text-gray-700'>대시보드 이름</label>
      <input
        type='text'
        className='w-full px-3 py-2 border border-[#D9D9D9] rounded-md mb-4'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='대시보드 이름'
      />

      <label className='block mb-2 text-sm font-medium text-gray-700'>색상 선택</label>
      <ul className='flex gap-2 mb-4'>
        {COLORS.map((color) => (
          <li
            key={color}
            className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
              selectedColor === color ? 'border-black' : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </ul>

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
          생성하기
        </button>
      </div>
    </Modal>
  );
}
