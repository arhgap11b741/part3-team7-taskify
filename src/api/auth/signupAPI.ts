import axios from 'axios';

/**
 * 사용자 데이터를 생성하는 API 컴포넌트
 * @param {object} userData - 사용자 데이터 (email, nickname, password)
 * @returns {Promise<any>} - API 응답 데이터
 */

async function signupAPI(userData) {
  try {
    const res = await axios.post('https://sp-taskify-api.vercel.app/16-7/users', userData);
    return res.data;
  } catch (error) {
    console.error('실패:', error);
    throw error;
  }
}

export default signupAPI;
