// ModalPrivacy.js
import React from "react";
import "./Modal.css";

const ModalPrivacy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>개인정보처리방침</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <section className="privacy-section">
            <h3>1. 개인정보의 수집 및 이용목적</h3>
            <p>회원 관리, 서비스 제공, 마케팅 및 광고 활용</p>
          </section>

          <section className="privacy-section">
            <h3>2. 수집하는 개인정보 항목</h3>
            <p>이름, 이메일 주소, 전화번호, 주소</p>
            <p>서비스 이용 기록, 접속 로그, 쿠키</p>
          </section>

          <section className="privacy-section">
            <h3>3. 개인정보의 보유 및 이용기간</h3>
            <p>회원 탈퇴 시까지 또는 법정 보유기간</p>
          </section>

          <section className="privacy-section">
            <h3>4. 개인정보의 파기절차</h3>
            <p>목적 달성 시 즉시 파기</p>
            <p>전자적 파일 형태의 정보는 기술적 방법으로 삭제</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModalPrivacy;