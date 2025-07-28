'use client';

import { useState } from 'react';

interface Invitation {
  id: string;
  email: string;
}

const InvitationsSection = () => {
  // 하드코딩된 초대 내역 데이터
  const [invitations] = useState<Invitation[]>([
    { id: '1', email: 'codeitA@codeit.com' },
    { id: '2', email: 'codeitB@codeit.com' },
    { id: '3', email: 'codeitD@codeit.com' },
    { id: '4', email: 'codeitC@codeit.com' },
    { id: '5', email: 'codeitE@codeit.com' },
  ]);

  const [showInviteModal, setShowInviteModal] = useState(false);

  const handleCancelInvitation = (invitationId: string) => {
    console.log('취소할 초대 ID:', invitationId);
    // 나중에 실제 취소 API 연결
  };

  const handleInvite = () => {
    setShowInviteModal(true);
    console.log('초대하기 모달 열기');
    // 나중에 실제 모달 구현
  };

  return (
    <div className='bg-white rounded-lg p-6 shadow-sm'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-bold'>초대 내역</h2>
        <button
          onClick={handleInvite}
          className='px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600'
        >
          초대하기
        </button>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <span className='text-sm font-medium text-gray-700'>이메일</span>
        <span className='text-sm text-gray-500'>1 페이지 중 1</span>
      </div>

      {/* 초대 내역 리스트 */}
      <div className='space-y-3'>
        {invitations.map((invitation) => (
          <div
            key={invitation.id}
            className='flex justify-between items-center p-3 border border-gray-200 rounded-lg'
          >
            <span className='text-gray-700'>{invitation.email}</span>

            {/* 취소 버튼 */}
            <button
              onClick={() => handleCancelInvitation(invitation.id)}
              className='px-3 py-1 text-sm text-red-600 border border-red-600 rounded hover:bg-red-50'
            >
              취소
            </button>
          </div>
        ))}
      </div>

      {/* 페이지네이션 (임시) */}
      <div className='flex justify-center mt-6'>
        <div className='flex gap-2'>
          <button className='px-3 py-1 border border-gray-300 rounded text-gray-400'>‹</button>
          <button className='px-3 py-1 bg-violet-500 text-white rounded'>1</button>
          <button className='px-3 py-1 border border-gray-300 rounded text-gray-400'>›</button>
        </div>
      </div>

      {/* 임시 모달 알림 */}
      {showInviteModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg'>
            <h3 className='text-lg font-bold mb-4'>초대하기 모달</h3>
            <p className='mb-4'>나중에 실제 모달을 만들 예정입니다!</p>
            <button
              onClick={() => setShowInviteModal(false)}
              className='px-4 py-2 bg-gray-500 text-white rounded'
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvitationsSection;
