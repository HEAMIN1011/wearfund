// Modal.js
import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>이용약관</h2>
        <p>
          <strong>제1조 (목적)</strong>
          <br />
          이 약관은 “주식회사 WEARFUND(전자상거래 사업자)”가 운영하는 “WEARFUND 사이트(이하 ‘몰’이라 한다)”에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 “사이트 몰”과 “이용자”의 권리, 의무 및 책임 등과 관련한 사항을 규정함을 목적으로 합니다.
        </p>
        <p>
          <strong>제2조 (목적)</strong>
          <br />
          이 약관은 “주식회사 WEARFUND(전자상거래 사업자)”가 운영하는 “WEARFUND 사이트(이하 ‘몰’이라 한다)”에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 “사이트 몰”과 “이용자”의 권리, 의무 및 책임 등과 관련한 사항을 규정함을 목적으로 합니다.
        </p>
        <p>
          <strong>제3조 (목적)</strong>
          <br />
          이 약관은 “주식회사 WEARFUND(전자상거래 사업자)”가 운영하는 “WEARFUND 사이트(이하 ‘몰’이라 한다)”에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 “사이트 몰”과 “이용자”의 권리, 의무 및 책임 등과 관련한 사항을 규정함을 목적으로 합니다.
        </p>
        <p>
          <strong>제4조 (목적)</strong>
          <br />
          이 약관은 “주식회사 WEARFUND(전자상거래 사업자)”가 운영하는 “WEARFUND 사이트(이하 ‘몰’이라 한다)”에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 “사이트 몰”과 “이용자”의 권리, 의무 및 책임 등과 관련한 사항을 규정함을 목적으로 합니다.
        </p>
        <p>
          <strong>제5조 (목적)</strong>
          <br />
          이 약관은 “주식회사 WEARFUND(전자상거래 사업자)”가 운영하는 “WEARFUND 사이트(이하 ‘몰’이라 한다)”에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 “사이트 몰”과 “이용자”의 권리, 의무 및 책임 등과 관련한 사항을 규정함을 목적으로 합니다.
        </p>
      </div>
    </div>
  );
};

export default Modal;
