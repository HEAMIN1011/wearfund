import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/common/Header";
import Footer from "./pages/common/Footer";
import HomePage from "./pages/HomePage";
import NewProducts from "./pages/NewProducts";
import BestFunding from "./pages/BestFunding";
import Funding from "./pages/Funding";
import Communication from "./pages/Communication";
import DetailedPage from "./detailedpage/DetailedPage"; // DetailedPage 추가

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-products" element={<NewProducts />} />
          <Route path="/best-funding" element={<BestFunding />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/best-funding/:id" element={<DetailedPage />} /> {/* 상세 페이지 경로 추가 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
