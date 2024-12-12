import React from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 임포트
import fundingData from "./Data";
import "./BestFunding.css";

const BestFunding = () => {
  return (
    <div className="best-funding">
      <h2>BEST FUNDING</h2>
      <div className="funding-grid">
        {fundingData.map((item) => (
          <div className="funding-card" key={item.id}>
            <Link to={`/best-funding/${item.id}`}> {/* Link 추가 */}
              <img 
                src={require(`./image/path-to-image-${item.id}.jpg`)} 
                alt={item.title} 
                className="funding-image" 
              />
              <div className="funding-info">
                <div className="funding-stats">
                  <span className="percentage">{item.percentage} 달성</span>
                  <span className="days-left">{item.daysLeft}</span>
                </div>
                <h3>{item.title}</h3>
                {item.price && <p>{item.price}</p>}
                
              </div>
            </Link>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default BestFunding;
