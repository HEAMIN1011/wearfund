import React, { useState } from "react";
import "./ProductImage.css"; // 스타일 파일 추가

function ProductImage({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="product-image-slider">
      <button className="slider-button prev" onClick={prevImage}>
        &lt;
      </button>
      <img
        src={images[currentImageIndex].path}
        alt={`Product ${currentImageIndex + 1}`}
        className="product-image"
      />
      <button className="slider-button next" onClick={nextImage}>
        &gt;
      </button>
      <div className="image-counter">
        {currentImageIndex + 1}/{images.length}
      </div>
    </div>
  );
}

export default ProductImage;
