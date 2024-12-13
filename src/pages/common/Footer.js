// Footer.js
import React, { useState } from "react";
import Modal from "./Modaltou";
import ModalAbout from "./Modalinfo";
import ModalPrivacy from "./ModalPrivacy"; // 새로운 프라이버시 모달 import
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false); // 프라이버시 모달 상태 추가

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>프로젝트팀 정보</h3>
          <span>팀명: wearfund project team</span>
          <br/>
          <span>팀장: 김혜민</span>
          <br/>
          <span>팀원: 곽한규, 김종범, 장현</span>
        </div>
        <div className="footer-section">
          <h3>고객센터</h3>
          <span>전화: 1234-5678</span>
          <br/>
          <span>이메일: support@example.com</span>
          <br/>
          <span>운영시간: 09:00 - 18:00</span>
        </div>
        <div className="footer-section">
          <h3>바로가기</h3>
          <ul>
            <li><span onClick={() => setAboutModalOpen(true)}>WEARFUND소개</span></li>
            <li><span onClick={() => setModalOpen(true)}>이용약관</span></li>
            <li><span onClick={() => setPrivacyModalOpen(true)}>개인정보처리방침</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} wearfund project team. All rights reserved.</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <ModalAbout isOpen={isAboutModalOpen} onClose={() => setAboutModalOpen(false)} />
      <ModalPrivacy isOpen={isPrivacyModalOpen} onClose={() => setPrivacyModalOpen(false)} />
    </footer>
  );
};

export default Footer;