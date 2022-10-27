import React from "react";
import "./style/index.css";
import "./style/card.css";


export default function Card(props) {

    

  return (
    <div className="card-main-container">
      <div className="card-top">
        <h1> Title </h1>
        {/* <h1>{props.hits.title} </h1> */}

        {/* {hits.map(hit=> (<h2 className="card-title">{hit.title}</h2>))} */}

        <h3 className="card-author">Author</h3>
      </div>
      <div className="news-card-footer">
        <p className="news-card-footer-element">Like</p>
        <p className="news-card-footer-element">Comment</p>
      </div>
      <div className="read-more-section">
        <p className="read-more-text">read more </p>
      </div>
    </div>
  );
}
