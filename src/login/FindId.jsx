
import React, { useState } from "react";
import './Find.css';
import { BrowserRouter, Link } from 'react-router-dom';

const Find = () => {
    const [email, setEmail] = useState(""); // 이메일 입력 상태
    const [message, setMessage] = useState(""); // 결과 메시지 상태
    const [loading, setLoading] = useState(false); // 로딩 상태

    // 이메일 입력 핸들러
    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const users = [
        { email: "purple3@naver.com", username: "purple3" }
    ];


    const handleFormSubmit = async (event) => {
        event.preventDefault(); // 기본 제출 동작 방지
        setLoading(true);
        setMessage(""); // 이전 메시지 초기화

        // 서버로 이메일 전송
        try {
            // 실제 서버 대신 목 데이터를 활용한 응답 처리
            const mockUsers = [
                { email: "purple3@naver.com", username: "purple3" }
            ];

            const user = mockUsers.find((user) => user.email === email);

            if (user) {
                // 목 데이터를 사용한 성공 메시지
                setMessage(`아이디는 ${user.username} 입니다.`);
            } else {
                // 목 데이터를 사용한 실패 메시지
                setMessage("아이디를 찾을 수 없습니다.");
            }

        } catch (error) {
            console.error("Fetch 요청 실패:", error); // 오류 로그 출력
            setMessage("서버와 통신 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "100px", maxWidth: "600px", margin: "0 auto"}}>
            <div className="find-list">
                <ul>
                    <li class="id-active" ><Link to="/findid">아이디 찾기</Link></li>
                    <li class="pw-active" ><Link to="/findPw">비밀번호 찾기</Link></li>
                </ul>
            </div>

            <div class="page-body">
                <div class="id-check">
                    <p class="id-text">
                        소유하고 계신 이메일 계정을 입력해보세요.<br />
                        아이디를 확인해드립니다.
                    </p>
                </div>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>

                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                        placeholder="이메일을 입력하세요"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: loading ? "#ddd" : "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: loading ? "not-allowed" : "pointer",
                    }}
                >
                    {loading ? "찾는 중..." : "아이디 찾기"}
                </button>
            </form>
            {
                message && (
                    <p
                        style={{
                            marginTop: "20px",
                            color: message.startsWith("아이디는") ? "green" : "red",
                        }}
                    >
                        {message}
                    </p>
                )
            }
        </div >
    );
};

export default Find;
