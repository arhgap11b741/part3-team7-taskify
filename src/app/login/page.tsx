'use client';
import loginAPI from '@/api/auth/loginAPI';
import { useState } from 'react';
import Image from 'next/image';
import { useRouterContext } from '@/contexts/RouterContext';

const LoginPage = () => {
  const { router } = useRouterContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await loginAPI({
        email: email,
        password: password,
      });

      sessionStorage.setItem('accessToken', response.accessToken);

      setMessage(`로그인 성공: ${response.user.email}`);
      setEmail('');
      setPassword('');
      router.push('/dashboard'); //로그인 성공시 로그인 상태로 대시보드로 redirection.
    } catch (error) {
      console.error('로그인 오류:', error);
      setMessage('로그인 실패');
    }
  };

  return (
    <>
      <Image src='/images/images_logo.png' alt='로고 이미지' width={200} height={280} />
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>이메일</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label>비밀번호</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type='submit'>로그인</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};
export default LoginPage;
