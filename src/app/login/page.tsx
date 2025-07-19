'use client';
import loginAPI from '@/api/auth/loginAPI';
import { useState } from 'react';

const LoginPage = () => {
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

      setMessage(`로그인 성공: ${response.user.email}`);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('로그인 오류:', error);
      setMessage('로그인 실패');
    }
  };

  return (
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
  );
};
export default LoginPage;
