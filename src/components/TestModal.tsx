'use client';

import { useState } from 'react';
import { mockDashboardData, Dashboard } from '@/api/mockDashboards';

interface Props {
  onClose: () => void;
}

const COLORS = ['#760dde', '#e876ea', '#ffa500', '#76a5ea', '#7ac555'];

export default function TestModal({ onClose }: Props) {
  const [title, setTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!title || !selectedColor) {
      alert('제목과 색상을 모두 선택해주세요!');
      return;
    }

    const newDashboard: Dashboard = {
      id: Date.now(),
      title,
      color: selectedColor,
      userId: Math.random() * 1000,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdByMe: true,
    };

    // POST: 목데이터에 추가
    mockDashboardData.dashboards.unshift(newDashboard);
    mockDashboardData.totalCount++;

    onClose(); // 모달 닫기
  };

  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
      <div className='bg-white rounded-xl shadow-xl p-6 w-96'>
        <h2 className='text-xl font-bold mb-4'>대시보드 생성</h2>

        <label className='block mb-2 text-sm font-medium text-gray-700'>제목</label>
        <input
          type='text'
          className='w-full px-3 py-2 border rounded-md mb-4'
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

        <div className='flex justify-end gap-2'>
          <button className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400' onClick={onClose}>
            취소
          </button>
          <button
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
            onClick={handleSubmit}
          >
            생성하기
          </button>
        </div>
      </div>
    </div>
  );
}
