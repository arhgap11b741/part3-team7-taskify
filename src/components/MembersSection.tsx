'use client';

import { useState } from 'react';

interface Member {
  id: string;
  name: string;
  profileImage?: string;
}

const MembersSection = () => {
  // 하드코딩된 구성원 데이터
  const [members] = useState<Member[]>([
    { id: '1', name: '정만철' },
    { id: '2', name: '최주협' },
    { id: '3', name: '김태순' },
    { id: '4', name: '윤지현' },
  ]);

  const handleDeleteMember = (memberId: string) => {
    console.log('삭제할 구성원 ID:', memberId);
    // 나중에 실제 삭제 API 연결
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">구성원</h2>
        <span className="text-sm text-gray-500">1 페이지 중 1</span>
      </div>

      {/* 구성원 리스트 */}
      <div className="space-y-4">
        {members.map((member) => (
          <div key={member.id} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              {/* 프로필 아이콘 */}
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-medium">
                {member.name[0]}
              </div>
              <span className="font-medium">{member.name}</span>
            </div>
            
            {/* 삭제 버튼 */}
            <button
              onClick={() => handleDeleteMember(member.id)}
              className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded hover:bg-red-50"
            >
              삭제
            </button>
          </div>
        ))}
      </div>

      {/* 페이지네이션 (임시) */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-400">‹</button>
          <button className="px-3 py-1 bg-violet-500 text-white rounded">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-400">›</button>
        </div>
      </div>
    </div>
  );
};

export default MembersSection;