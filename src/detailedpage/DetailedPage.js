import React, { useState, useEffect } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import StorySection from "./StorySection";
import ReviewsSection from "./ReviewsSection";
import FaqSection from "./FaqSection";
import RewardSection from "./RewardSection";
import data from "./Data";
import "./DetailedPage.css";

function DetailedPage() {
  const { product } = data;

  const [activeTab, setActiveTab] = useState("story");
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px 이하일 경우 모바일로 간주
    };
    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 탭 내용에 맞는 컴포넌트
  const renderTabContent = () => {
    switch (activeTab) {
      case "story":
        return <StorySection story={product.story} />;
      case "reviews":
        return <ReviewsSection story={product.story} />;
      case "faq":
        return <FaqSection story={product.story} />;
      default:
        return null;
    }
  };

  return (
    <div className="detailed-page">
      <div className="content-wrapper">
        {/* 좌측 콘텐츠 */}
        <div className="left-section">
          <div className="product-container"> 
            <ProductImage images={product.images} />
          </div>

          <div className="tabs">
            <button
              className={`tab-button ${activeTab === "story" ? "active" : ""}`}
              onClick={() => setActiveTab("story")}
            >
              Story
            </button>
            <button
              className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={`tab-button ${activeTab === "faq" ? "active" : ""}`}
              onClick={() => setActiveTab("faq")}
            >
              FAQ
            </button>
          </div>

          <div className="tab-content">{renderTabContent()}</div>
        </div>

        {/* 우측 리워드 창 */}
        <div
          className={`right-section ${
            isMobile ? "mobile-bottom-bar" : ""
          }`}
        >
          {!isMobile ? (
            <>
              <ProductInfo
                title={product.title}
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
                description={product.description}
                rewardPoints={product.rewardPoints}
              />
              <RewardSection rewardData={product.rewardData} />
            </>
          ) : (
            <div className="mobile-actions">
              <button className="gift-button">선물하기</button>
              <button className="buy-button">구매하기</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailedPage;
