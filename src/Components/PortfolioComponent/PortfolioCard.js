import React from "react";

function PortfolioCard({ img, title, setShowModal }) {
  return (
    <div className="portfolio-card">
      <img src={img} alt="img"></img>
      <div className="hover-box">
        <h3>{title}</h3>
        <button onClick={() => setShowModal(true)}>მეტის ნახვა</button>
      </div>
    </div>
  );
}

export default PortfolioCard;
