import React, { useState } from "react";
import "./ProductInfo.css";

function ProductInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-info">
      <h5>[정품] 구스보다 따뜻한 머스크브러</h5>
      <p className="price">
        {/* <span className="original-price">449,000원</span> */}
        <span className="discounted-price">10,771% 달성</span>
      </p>
      <button className="coupon-button" onClick={handleOpenModal}>
        배송비할인부터 월 12,000원 할인받기
      </button>
      <p className="delivery-info">🚚 무료 배송 / 3일 내 발송</p>
      {/* <p className="reward-points">적립금: 12,000원</p> */}

      {/* 모달 창 */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>쿠폰받기</h3>
            <p>축하합니다! 5,000원 할인 쿠폰을 받으셨습니다.</p>
            <button className="close-button" onClick={handleCloseModal}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
