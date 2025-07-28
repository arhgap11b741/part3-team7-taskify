'use client';
import { setAccessToken } from '@/utils/tokenhandler';
import { AuthForm } from '@/components/auth/AuthForm'; // 앞서 만든 재사용 컴포넌트 임포트

export default function SignupPage() {
  return (
    <AuthForm
      title='회원가입'
      apiEndpoint='users'
      redirectPath='/dashboard'
      fields={[
        { label: '이메일', name: 'email', type: 'email' },
        { label: '닉네임', name: 'nickname', type: 'text' },
        { label: '비밀번호', name: 'password', type: 'password' },
      ]}
      onSuccess={(data) => {
        if (data.accessToken) {
          setAccessToken(data.accessToken);
        }
      }}
    />
  );
}
