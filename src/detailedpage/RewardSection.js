import React, { useState } from "react";
import "./RewardSection.css";

function RewardSection({ rewardData = {} }) {
  const { title, supporters, satisfaction, totalFunding, options = [] } = rewardData;

  const [selectedOption, setSelectedOption] = useState(null);
  const [likes, setLikes] = useState(0); // 하트 숫자 상태

  const handleOptionChange = (event) => {
    const selected = options.find((option) => option.name === event.target.value);
    if (selectedOption && selectedOption.name === selected.name) {
      // 이미 선택된 리워드인 경우 처리 방지
      alert("이미 선택한 리워드입니다.");
      return;
    }
    setSelectedOption(selected); // 새로운 리워드 선택
  };

  const handleDeleteSelection = () => {
    setSelectedOption(null); // 선택 초기화
  };

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1); // 좋아요 숫자 증가
  };

  return (
    <div className="reward-section">
      <div className="reward-card">
        <div className="header-row">
          <div className="heart-container" onClick={handleLike}>
            <span className="heart-icon">❤️</span>
            <span className="heart-count">{likes.toLocaleString()}</span>
          </div>
          <div>
            <h4 className="title">{title}</h4>
            <p className="supporters">{supporters}명 서포터</p>
          </div>
        </div>
        <div className="satisfaction-section">
        <p><span className="stars">⭐⭐⭐⭐⭐</span> 만족도: {satisfaction}</p>
        </div>
        {/* <p>누적 펀딩액: {totalFunding}</p> */}
      </div>
      <hr />
      <div className="reward-options">
        <label htmlFor="reward-select">리워드 선택:</label>
        <select id="reward-select" onChange={handleOptionChange} defaultValue="">
          <option value="" disabled>
            리워드를 선택하세요
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.name}>
              {option.name} - {option.price}원
            </option>
          ))}
        </select>
      </div>
      {selectedOption && (
        <div className="selected-option-details">
          <div className="selection-header">
            <h4 className="selected-title">선택한 리워드</h4>
            <button className="delete-button" onClick={handleDeleteSelection}>
              선택 취소
            </button>
          </div>
          <p>이름: {selectedOption.name}</p>
          <p>가격: {selectedOption.price}원</p>
          <p>상태: {selectedOption.status}</p>
        </div>
      )}
      <div className="reward-actions">
        <button className="action-button">선물하기</button>
        <button className="action-button primary">구매하기</button>
      </div>
    </div>
  );
}

export default RewardSection;
