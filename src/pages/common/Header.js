import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../common/Header.css';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      {/* 로고 */}
      <div className="logo">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/WearFundLogo.png`}
            alt="WearFund Logo"
            className="wearfund-logo"
          />
        </Link>
      </div>

      {/* 메뉴 */}
      <div className="menu-wrapper">
        <div className="menu menu-left">
          <Link to="/new-products"><span>이달의신상</span></Link>
          <Link to="/best-funding"><span>BEST펀딩</span></Link>
          <Link to="/funding"><span>펀딩</span></Link>
          <Link to="/communication"><span>소통</span></Link>
        </div>
        <div className="menu menu-right">
          <span>로그인</span>
          <span>회원가입</span>
          <span><i className="fa-solid fa-cart-shopping"></i></span>
          <span className="search-btn" onClick={toggleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>

      {/* 검색 모달 */}
      {isSearchOpen && (
        <div className="search-modal">
          <div className="search-content">
            <input type="text" placeholder="검색어를 입력하세요" />
            <button className="close-btn" onClick={toggleSearch}>닫기</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;