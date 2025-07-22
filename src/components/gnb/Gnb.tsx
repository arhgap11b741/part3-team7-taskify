import { Button } from '../button/Button';
import SettingIcon from '../../../public/icon/settings.svg';
import InviteIcon from '../../../public/icon/invitation.svg';
import CrownIcon from '../../../public/icon/crown.svg';
import { UserChip, UserType } from '../chip/UserChip';
import { UserChipArray } from '../chip/UserChipArray';

const GnbWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className='w-full h-[70px] flex items-center px-6 py-3 gap-8 border-b border-b-gray-200'>
      {children}
    </nav>
  );
};

export const GnbMyDashboard = ({ user }: { user: UserType }) => {
  return (
    <GnbWrapper>
      <div className='flex-1'>
        <h1 className='font-bold text-xl'>내 대시보드</h1>
      </div>
      <div className='flex gap-2'>
        <Button size='extraSmall' type='gnb'>
          <SettingIcon />
          관리
        </Button>
        <Button size='extraSmall' type='gnb'>
          <InviteIcon />
          초대하기
        </Button>
      </div>
      <div className='border-l border-l-gray-200 h-full' />
      <div>
        <UserChip user={user} size='large' />
      </div>
    </GnbWrapper>
  );
};

export const GnbMyDashboardWithUsers = ({ user, users }: { user: UserType; users: UserType[] }) => {
  return (
    <GnbWrapper>
      <div className='flex-1'>
        <h1 className='font-bold text-xl'>내 대시보드</h1>
      </div>
      <div className='flex gap-2'>
        <Button size='extraSmall' type='gnb'>
          <SettingIcon />
          관리
        </Button>
        <Button size='extraSmall' type='gnb'>
          <InviteIcon />
          초대하기
        </Button>
      </div>
      <UserChipArray users={users} maxVisible={4} />
      <div className='border-l border-l-gray-200 h-full' />
      <div>
        <UserChip user={user} size='large' />
      </div>
    </GnbWrapper>
  );
};

export const GnbDashboard = ({
  user,
  users,
  title,
  createdByMe,
}: {
  user: UserType;
  users: UserType[];
  title: string;
  createdByMe: boolean;
}) => {
  return (
    <GnbWrapper>
      <div className='flex-1 flex gap-2 items-center'>
        <h1 className='font-bold text-xl'>{title}</h1>
        {createdByMe && <CrownIcon />}
      </div>
      <div className='flex gap-2'>
        <Button size='extraSmall' type='gnb'>
          <SettingIcon />
          관리
        </Button>
        <Button size='extraSmall' type='gnb'>
          <InviteIcon />
          초대하기
        </Button>
      </div>
      <UserChipArray users={users} maxVisible={4} />
      <div className='border-l border-l-gray-200 h-full' />
      <div>
        <UserChip user={user} size='large' />
      </div>
    </GnbWrapper>
  );
};
