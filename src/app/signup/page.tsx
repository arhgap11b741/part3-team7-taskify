'use client';

import signupAPI from '@/api/auth/signupAPI';
import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // <- 짜증나는 놈 ㅠ_ㅠ

    try {
      const response = await signupAPI({
        email: email,
        nickname: nickname,
        password: password,
      });

      setMessage(`회원가입 성공: ${response.nickname}`);
      setEmail('');
      setNickname('');
      setPassword('');
    } catch (error) {
      console.error('회원가입 오류:', error);
      setMessage('회원가입 실패');
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
          <label>닉네임</label>
          <input type='text' value={nickname} onChange={(e) => setNickname(e.target.value)} />
        </div>
        <div>
          <label>비밀번호</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>가입하기</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignupPage;
