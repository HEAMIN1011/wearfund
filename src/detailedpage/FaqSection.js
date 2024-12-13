import React from "react";
import "./FaqSection.css";
import data from "./Data"; // Data.js 파일에서 데이터를 import

function FaqSection() {
  const { product } = data; // data 객체에서 product 정보를 추출

  return (
    <div className="story-section">
      <h3>FAQ</h3>
      <div className="story-content">
        <img 
          src={product.storyImage} 
          alt="Story illustration" 
          className="story-image"
        />
        <p>{product.story}</p>
       </div>
    </div>
  );
}

export default FaqSection;