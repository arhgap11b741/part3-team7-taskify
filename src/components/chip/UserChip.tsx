export interface UserType {
  id: number;
  nickname: string;
  profileImageUrl: string | null; // 프로필이미지가 없을경우 추가 -lje
}

type SizeType = 'large' | 'small';

export const UserChip = ({ user, size }: { user: UserType; size: SizeType }) => {
  const smallClasses = 'w-6 h-6';
  const largeClasses = 'w-8 h-8';

  const sizeClasses = {
    large: largeClasses,
    small: smallClasses,
  };
  const firstChar = user.nickname.charAt(0).toUpperCase();
  // 프로필 이미지가 null일경우 분기처리
  return (
    <div className='flex items-center'>
      {user.profileImageUrl ? (
        <img
          src={user.profileImageUrl}
          alt={`${user.nickname}의 프로필 사진`}
          className={`rounded-full ${sizeClasses[size]}`}
        />
      ) : (
        <div
          className={`rounded-full bg-[#ddd] flex items-center justify-center text-xs text-white ${sizeClasses[size]}`}
        >
          {firstChar}
        </div>
      )}
      <span className='ml-2 hidden md:block lg:block'>{user.nickname}</span>
    </div>
  );
};
