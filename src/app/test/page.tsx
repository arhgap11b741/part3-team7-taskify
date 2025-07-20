// import useFormField from '@/hooks/useFormField';

// const signup = () => {
//   const { values, valid, handleInputChange, handleInputBlur } = useFormField(
//     ['email', 'nickName', 'password', 'passwordVerify'],
//     'signup',
//   );
//   return (
//     <>
//       <section>
//         <form>
//           <AuthField>
//             <AuthField.label htmlFor='email'>이메일</AuthField.label>
//             <AuthField.input
//               id='email'
//               placeholder='이메일을 입력해 주세요'
//               ariaLabel='이메일 입력 칸'
//               type='email'
//               value={values.email}
//               onChange={handleInputChange}
//               onBlur={handleInputBlur}
//             />
//             <AuthField.valid valid={valid.accountId}>{valid.accountId}</AuthField.valid>
//           </AuthField>

//           <AuthField>
//             <AuthField.label htmlFor='nickName'>닉네임</AuthField.label>
//             <AuthField.input
//               id='nickName'
//               placeholder='닉네임을 입력해 주세요'
//               ariaLabel='닉네임 입력 칸'
//               type='text'
//               value={values.nickName}
//             />
//             <AuthField.valid valid={valid.nickName}>{valid.nickName}</AuthField.valid>
//           </AuthField>

//           <AuthField>
//             <AuthField.label htmlFor='password'>비밀번호</AuthField.label>
//             <AuthField.input
//               id='password'
//               placeholder='8자 이상 입력해 주세요'
//               ariaLabel='비밀번호 입력 칸'
//               type='password'
//               value={values.password}
//             />
//             <AuthField.valid valid={valid.password}>{valid.password}</AuthField.valid>
//           </AuthField>

//           <AuthField>
//             <AuthField.label htmlFor='passwordVerify'>비밀번호 확인</AuthField.label>
//             <AuthField.input
//               id='passwordVerify'
//               placeholder='비밀번호를 한번 더 입력해 주세요'
//               ariaLabel='비밀번호 확인 입력칸'
//               type='password'
//               value={values.passwordVerify}
//             />
//             <AuthField.valid valid={valid.passwordVerify}>{valid.passwordVerify}</AuthField.valid>
//           </AuthField>
//         </form>
//         <div></div>
//       </section>
//     </>
//   );
// };
// export default signup;

// A ㅏ ............
