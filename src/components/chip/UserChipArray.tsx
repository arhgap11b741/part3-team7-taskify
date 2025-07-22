'use client';

import { UserType } from './UserChip';

export const UserChipArray = ({
  users,
  maxVisible = 4,
}: {
  users: UserType[];
  maxVisible: number;
}) => {
  const visibleUsers = users.slice(0, maxVisible);
  const remainingCount = users.length - maxVisible;

  return (
    <div className='flex '>
      {visibleUsers.map((el) => (
        <img
          key={el.id}
          src={el.profileImageUrl}
          alt={`${el.nickname}의 프로필 사진`}
          className='w-8 h-8 not-first:-ml-2 rounded-full ring-2 ring-white bg-white'
        />
      ))}
      {remainingCount > 0 && (
        <div className='w-8 h-8 grid place-items-center not-first:-ml-2 rounded-full ring-2 ring-white bg-amber-300 text-amber-700'>
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
