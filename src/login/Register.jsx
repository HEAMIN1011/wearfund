import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import Api from './Api';
import Timer from './Timer';
import "./FindId.jsx";
import "./FindPw.jsx";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const INITIAL_TIMER_SECONDS = 180;
const PHONE_NUMBER_LENGTH = 11;
const VERIFICATION_CODE_LENGTH = 6;


function Register() {
    
    const [email, setEmail] = useState('');
    const [pn, setPn] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [timer, setTimer] = useState(180);



    //인증번호 기능 구현
    const [isVerified, setIsVerified] = useState(false);
    const [verificationMessage, setVerificationMessage] = useState("");

    const [emailValid, setEmailValid] = useState(false);
    const [pnValid, setPnValid] = useState(false);
    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(false);

    const [verificationSent, setVerificationSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");

    //const [isGetCode, setIsGetCode] = useState(false);
    //const [isTimer, setIsTimer] = useState(false);
    //const [count, setCount] = useState(0);
    //const [isChecked, setIsChecked] = useState(false);
    //const [codeValue, setCodeValue] = useState('');
    const [verificationStatus, setVerificationStatus] = useState(null);
    const navigate = useNavigate();

    // 인증번호 재전송 함수
    const resendVerification = () => {
        setTimer(180);
    };

    //타이머 함수
    const formatTime = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    useEffect(() => {
        let interval;
        if (verificationSent) {
            interval = window.setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 1) {
                        clearInterval(interval);
                        setVerificationSent(false);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [verificationSent]);

    // 인증번호 확인 함수
    const verifyCode = () => {
        if (verificationCode === "111111" && timer > 0) {
            setIsVerified(true);
            setVerificationMessage("인증 성공하였습니다.");
        } else {
            setIsVerified(false);
            setVerificationMessage("인증번호가 잘못되었습니다.");
        }
    };

    // 인증번호 입력 변경 함수
    const handleVerificationCodeChange = (e) => {
        const numbersOnly = e.target.value.replace(/\D/g, "");
        if (numbersOnly.length <= 6) {
            setVerificationCode(numbersOnly);
        }
    };

    //번호인증부분
    // 입력 폼 변경 시 실행되는 함수
    const handleChange = (e) => {
        const numbersOnly = e.target.value.replace(/\D/g, "");
        if (numbersOnly.length <= 11) {
            setPn(numbersOnly);
        }
    };

    // 전화번호 입력에 '-' 넣는 함수
    const displayFormattedPhoneNumber = (numbers) => {
        if (numbers.length <= 3) {
            return numbers;
        } else if (numbers.length <= 7) {
            return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
        } else {
            return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
                7
            )}`;
        }
    };

    // 인증번호 전송 함수
    const sendVerification = () => {
        if (pn.length < 10) return;
        setVerificationSent(true);
    };



    //정규식 코드
    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        setEmailValid(regex.test(e.target.value));
    }

    const handlePn = (e) => {
        setPn(e.target.value);
        const regex = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/
        setPnValid(regex.test(e.target.value));
    }

    const handleId = (e) => {
        setId(e.target.value);
        const regex = /^[a-zA-Z][0-9a-zA-Z]{4,7}$/;
        setIdValid(regex.test(e.target.value));
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        setPwValid(regex.test(e.target.value));
    }
    const onClickConfirmButton = () => {
        if (emailValid && pnValid && idValid && pwValid) {
            alert('회원가입이 완료되었습니다.');
            navigate('/');
        } else {
            alert('모든 필드를 올바르게 입력하고 휴대전화 인증을 완료해주세요.');
        }
    }

    // notAllow 상태는 이메일, 비밀번호, 아이디 유효성 검사를 모두 통과하고 이메일 인증(isChecked)이 완료된 경우에만 false로 설정
    useEffect(() => {
        setNotAllow(!(emailValid && pwValid && idValid));
    }, [emailValid, pwValid, idValid]);

    return (
        <div className="page">
            <div className='titleWrap'>
                회원가입
            </div>
            {/* 이메일 부분 */}
            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input
                        type="email"
                        className="input"
                        placeholder="ex)purple3@naver.com"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className="errorMessageWrap">
                    {!emailValid && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요.</div>
                    )}
                </div>

                {/* 전화번호 부분 */}
                <div style={{ marginTop: "26px" }} className="inputTitle">전화번호</div>
                <div className="inputWrap">
                    <input
                        type="text"
                        className="input"
                        placeholder="ex)01012345678"
                        maxLength={11}
                        value={pn}
                        onChange={handlePn}
                    />
                    <button className="pnButton" onClick={!verificationSent ? sendVerification : resendVerification}>{!verificationSent ? "인증" : "재전송"}</button>
                </div>
                {/* 전화번호 인증 부분 */}
                {verificationSent && (
                    <div className="inputWrap">
                        <timer className="timerNb">{formatTime()}</timer>
                        <input 
                            placeholder="인증번호 입력"
                            className="checkNb"
                            type="text"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                        />
                        <button className="certifiedButton" onClick={verifyCode}>
                            확인
                        </button>
                    </div>
                )}

                <div>
                    {!isVerified && (
                        <p style={{ color: "red" }}>{verificationMessage}</p> // 인증 실패 메시지
                    )}
                    {isVerified && (
                        <p style={{ color: "green" }}>{verificationMessage}</p> // 인증 성공 메시지
                    )}
                </div>

                <div className="errorMessageWrap">
                    {!pnValid && pn.length > 0 && (
                        <div>올바른 전화번호를 입력해주세요.</div>
                    )}
                </div>

                {/* 아이디 부분 */}
                <div style={{ marginTop: "26px" }} className="inputTitle">아이디</div>
                <div className="inputWrap">
                    <input
                        type="text"
                        className="input"
                        placeholder="ex)purple3"
                        value={id}
                        onChange={handleId}
                    />
                </div>
                <div className="errorMessageWrap">
                    {!idValid && id.length > 0 && (
                        <div>올바른 아이디를 입력해주세요.</div>
                    )}
                </div>

                {/* 비밀번호 부분 */}
                <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input
                        type="password"
                        className="input"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={pw}
                        onChange={handlePw}
                    />
                </div>
                <div className="errorMessageWrap">
                    {!pwValid && pw.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>

                    {/* 가입 버튼 부분 */}
                <div className='buttonWrap'>
                    <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
                        가입
                    </button>
                </div>
                <hr />
                {/* 로그인/아이디/비번찾기 부분 */}
                <div className="registerWrap">
                    <div className="registerTitle">
                        계정이 있으신가요? <Link to="/log">로그인하기</Link>
                    </div>
                    <div className="findTitle">
                        아이디 또는 비밀번호를 잊으셨나요? <Link to="/findId">아이디/비밀번호 찾기</Link>
                    </div>
                </div> <br />

                    {/* 간편가입 부분 */}
                <div className="fastRg">간편가입</div>
                <div className="login-container">
                    <button className="social-login-btn kakao">카카오로 시작하기</button>
                    <button className="social-login-btn naver">네이버로 시작하기</button>
                    <div className="social-icons">
                        <button className="icon-btn google"><FcGoogle /></button>
                        <button className="icon-btn facebook"><FaFacebook /></button>
                        <button className="icon-btn apple"><FaApple /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Register;

