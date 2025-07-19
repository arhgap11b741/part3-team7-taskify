'use client';

import signupAPI from '@/api/auth/signupAPI';
import { useState } from 'react';
import Image from 'next/image';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    <>
      <Image src='/images/images_logo.png' alt='로고 이미지' width={200} height={280} />
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
    </>
  );
};

export default SignupPage;
