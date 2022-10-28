import React from "react";
import "./index.css";
import "./card.css";


export default function Card (promps) {
  
    
  return (
    <div className="card-main-container">
      <div className="card-top">
        <h2 className="card-title">{promps.art.title}</h2>
        <h3 className="card-author">{promps.art.author}</h3>
      </div>
      <div className="news-card-footer">
        <p className="news-card-footer-element">{promps.art.points} ❤️</p>
        <p className="news-card-footer-element"> {promps.art.num_comments} 💬</p>
      </div>
      <div className="read-more-section">
        <p className="read-more-text">read more  </p>
      </div>
    </div>
  );
}
