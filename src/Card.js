import React from "react";
import "./index.css";
import "./card.css";

export default function Card() {
  return (
    <div className="card-main-container">
      <div className="card-top">
        <h2 className="card-title">Title</h2>
        <h3 className="card-author">Author</h3>
      </div>
      <div className="news-card-footer">
        <p className="news-card-footer-element">Like</p>
        <p className="news-card-footer-element">Comment</p>
      </div>
      <div className="read-more-section">
        <p className="read-more-text">read more > </p>
      </div>
    </div>
  );
}
