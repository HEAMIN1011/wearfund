//import axios from 'axios';

const BASE_URL = 'http://localhost:3000/register';
// 기본 API 인스턴스 생성
//axios.create({
const api =
    {
    emailCheck: `${BASE_URL}/email-check`,  // 이메일 중복 확인 API
    verifyEmailCode: `${BASE_URL}/verify-code`,  // 이메일 인증 코드 검증 API
    register: `${BASE_URL}/register`,  // 회원가입 API
    login: `${BASE_URL}/login`,  // 로그인 API
};

// // API 요청 예시: GET 요청
// export const fetchUserData = async () => {
//     try {
//         const response = await api.get('/user');  // 예시 엔드포인트
//         return response.data;
//     } catch (error) {
//         console.error('API 요청 오류:', error);
//         throw error;
//     }
// };

// // POST 요청 예시
// export const createUser = async (userData) => {
//     try {
//         const response = await api.post('/user', userData);
//         return response.data;
//     } catch (error) {
//         console.error('API 요청 오류:', error);
//         throw error;
//     }
// };

export default api;
