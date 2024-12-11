import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Log.css';
import './FindId.jsx';
import './FindPw.jsx';

const User = {
    email: 'purple3@naver.com',
    id: 'purple3',
    pw: 'wearfund3@@'
}

function Log() {
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    // 로그인 버튼 비활성화 여부 저장 변수
    const [notAllow, setNotAllow] = useState(false);

    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    //     // 계정@도메인.최상위도메인 형태의 이메일 정규식
    //     const regex =
    //         /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    //     if (regex.test(email)) {
    //         setEmailValid(true);
    //     } else {
    //         setEmailValid(false);
    //     }
    // }

    const handleId = (e) => {
        setId(e.target.value);
        // 5~8자이며, 숫자와 영문자로만 가능한 정규식
        const regex = /^[a-zA-Z][0-9a-zA-Z]{4,7}$/;
        if (regex.test(id)) {
            setIdValid(true);
        } else {
            setIdValid(false);
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        // 8자 이상이며, 영문, 숫자, 특수문자 포함한 정규식
        const regex =
            /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const onClickConfirmButton = () => {
        if (id === User.id && pw === User.pw) {
            alert('로그인에 성공했습니다.')
        } else {
            alert('등록되지 않았거나 입력 값이 불일치합니다.')
        }
    }

    useEffect(() => {
        if (idValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [idValid, pwValid]);


    return (
        <div className="Container">
                <div className="page">
                <div className='titleWrap'>
                    <br />
                    로그인
                </div>
                <div className="contentWrap">
                    {/* <div className="inputTitle">이메일 주소</div>
                    <div className="inputWrap">
                        <input
                            type="text"
                            className="input"
                            placeholder="purple@naver.com"
                            value={email}
                            onChange={handleEmail}>
                        </input>
                    </div>

                    <div className="errorMessageWrap">
                        {
                            !emailValid && email.length > 0 && (
                                <div>올바른 이메일을 입력해주세요.</div>
                            )
                        }
                    </div> */}

                    <div style={{ marginTop: "26px" }} className="inputTitle">아이디</div>
                    <div className="inputWrap">
                        <input
                            type="text"
                            className="input"
                            placeholder="ex)purple3"
                            value={id}
                            onChange={handleId}></input>
                    </div>

                    <div className="errorMessageWrap">
                        {
                            !idValid && id.length > 0 && (
                                <div>올바른 아이디를 입력해주세요.</div>
                            )
                        }
                    </div>

                    <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호</div>
                    <div className="inputWrap">
                        <input
                            type="password"
                            className="input"
                            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                            value={pw}
                            onChange={handlePw}></input>
                    </div>

                    <div className="errorMessageWrap">
                        {
                            !pwValid && pw.length > 0 && (
                                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                            )
                        }
                    </div>

                    <div className='buttonWrap'>
                        <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">로그인</button>
                    </div>
                    <hr nonshade />
                    <div className="registerWrap">
                        <div className="registerTitle">
                            계정이 없으신가요? <Link to="/register">가입하기</Link>
                        </div>
                    </div>
                    <br /><br /><br />

                    <div className="login-container">
                        <button className="email-login-btn">이메일로 로그인하기</button>
                        <button className="social-login-btn kakao">카카오로 시작하기</button>
                        <button className="social-login-btn naver">네이버로 시작하기</button>
                        <div className="social-icons">
                            <button className="icon-btn google"><i class="fa-brands fa-google"></i></button>
                            <button className="icon-btn facebook" ><i class="fa-brands fa-facebook"></i></button>
                            <button className="icon-btn apple"><i class="fa-brands fa-apple"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Log;
