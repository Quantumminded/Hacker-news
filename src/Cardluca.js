import React from "react";
import "./index.css";
import "./card.css";


export default function Card (promps) {
  
    
  return (
    <div className="card-main-container">
      <div className="card-top">
        <h2 className="card-title">{promps.art.title}</h2>
        <h3 className="card-author">Write by {promps.art.author}</h3>
      </div>
      <div className="news-card-footer">
        <div className="reaction-section">
          <p className="reaction">{promps.art.points} ❤️</p>
          <p className="reaction">
            {" "}
            {promps.art.num_comments} 💬
          </p>
        </div>
        <a href={promps.art.url} target="_black">
          <button className="read-more-text-btn">Read More</button>
        </a>
      </div>
    </div>
  );
}
