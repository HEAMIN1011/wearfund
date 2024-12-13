import React from 'react';
import './MainVideoComponent.css'; // 별도 CSS 파일 사용

const MainVideoComponent = () => {
  return (
    <div className="KeyVisualVideo_container">
      <video 
        autoPlay 
        loop 
        playsInline 
        muted
        poster="https://static.wadiz.kr/assets/openfunding/registration-keyvisual-mobile-poster.jpg"
        className="KeyVisualVideo"
      >
        <source 
          src="https://static.wadiz.kr/assets/openfunding/registration-keyvisual-mobile.mp4" 
          type="video/mp4" 
        />
        {/* 브라우저가 비디오를 지원하지 않을 경우 표시할 텍스트 */}
        당신의 브라우저는 동영상을 지원하지 않습니다.
      </video>
      <div className="KeyVisualVideo_inner">
        <strong className="KeyVisualVideo_title">
          누구나 WEARFUND를 통해 할 수 있어요
        </strong>
        <div className="KeyVisualVideo_buttonWrapper">
          <div className="ButtonStartProject_container">
            <button className="StartProjectButton">시작하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideoComponent;
