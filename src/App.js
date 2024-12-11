

import CommHome from './CommPages/CommHome.js';
import ListCard from './components/ListCard';
import FundingList from './components/FundingList';
import CartPage from './components/CartPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/common/Header";
import Footer from "./pages/common/Footer";
import HomePage from "./pages/HomePage";
import NewProducts from "./pages/NewProducts";
import BestFunding from "./pages/BestFunding";
import Funding from "./pages/Funding";
import Communication from "./pages/Communication";
import DetailedPage from "./detailedpage/DetailedPage"; // DetailedPage 추가
import React from 'react';
import Log from './login/Log';
import Register from './login/Register';
import FindId from './login/FindId';
import FindPw from './login/FindPw';
import CommInfo from './CommPages/CommInfo.js';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/new-products" element={<NewProducts />} />
          <Route path="/best-funding" element={<BestFunding />} />
          <Route path="/communication" element={<CommHome/>} />
          <Route path="/best-funding/:id" element={<DetailedPage />} /> {/* 상세 페이지 경로 추가 */}
          <Route path='/findId' element={<FindId />} />
          <Route path='/findPw' element={<FindPw />} />
          <Route path='/log' element={<Log />} />
          <Route path='/register' element={<Register />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/funding" element={<FundingList />} />
          <Route path="/info/:id" element={<CommInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
