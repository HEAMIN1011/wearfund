// ModalAbout.js
import React from "react";
import "./Modal.css";

const ModalAbout = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>WEARFUND 소개</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <section className="about-section">
            <h3>회사 소개</h3>
            <p>WEARFUND는 혁신적인 패션 크라우드펀딩 플랫폼입니다.</p>
            <p>우리는 신진 디자이너와 소비자를 연결하여 새로운 패션의 가치를 창출합니다.</p>
          </section>
          
          <section className="about-section">
            <h3>미션</h3>
            <p>지속 가능한 패션 생태계 조성</p>
            <p>디자이너와 소비자 모두에게 이로운 패션 문화 창출</p>
          </section>

          <section className="about-section">
            <h3>비전</h3>
            <p>글로벌 패션 크라우드펀딩 시장의 선도적 플랫폼</p>
            <p>혁신적인 패션 브랜드의 성장 파트너</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModalAbout;