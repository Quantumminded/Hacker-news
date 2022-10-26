import React, { useState } from "react";
import "./index.css";
import "./card.css";
import Data from "./data.json"

export default function Card() {

    let { hits } = Data;
  return (
    <div className="card-main-container">
      <div className="card-top">
        {hits.map(hit=> (<h2 className="card-title">{hit.title}</h2>))}
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
