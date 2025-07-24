'use client';
import { AuthForm } from '@/components/auth/AuthForm';

const LoginPage = () => {
  return (
    <>
      <AuthForm
        title='로그인'
        apiEndpoint='auth/login'
        redirectPath='/dashboard'
        fields={[
          { label: '이메일', name: 'email', type: 'email' },
          { label: '비밀번호', name: 'password', type: 'password' },
        ]}
        onSuccess={(data) => {
          // 필요 시 성공 후 별도 처리
        }}
      />
    </>
  );
};
export default LoginPage;
