import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17부터 JSX 변환이 자동으로 되므로 제거
      'react/prop-types': 'off', // JavaScript에서도 prop-types 사용 여부에 따라 설정 (여기서는 비활성화)
      'react/jsx-uses-react': 'off', // New JSX Transform 관련 설정
      'react/jsx-key': 'error', // 리스트 렌더링엔 항상 고유한 key 값 사용
      'react/destructuring-assignment': ['error', 'always'], // Props 전달은 비구조화 할당
      'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }], // ignoreRestSiblings: true는 객체 비구조화 할당에서 나머지가 사용되지 않아도 경고하지 않습니다.
      'react/jsx-uses-vars': 'error', // JSX에서 사용되는 변수를 사용된 것으로 간주
      'react/jsx-no-undef': 'error', // 정의되지 않은 JSX 컴포넌트 사용 방지
      'prefer-arrow-callback': 'error', // 콜백 함수는 화살표 함수로
      'func-names': ['error', 'as-needed'], // 필요한 경우에만 함수 이름 허용
    },
  },
];

export default eslintConfig;
