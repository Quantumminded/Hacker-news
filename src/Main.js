import React, { useState } from "react";
import Card from "./Cardluca";
import data from "./data.json"


export default function Main() {
    const [input, setInput] = useState(true);
    const [inputResults, setInputResults] = useState([]);


    const search = (topic) => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${topic}`)
            .then((response) => response.json())
            .then((data) => setInputResults(data.hits))
           
            setInput(false)
    }


    return (
      <>
        <div className="nav-bar">
          <span>
            <a href="/">
              <h1>Hacker News</h1>{" "}
            </a>
          </span>
            <span className="btn-span"> 
            <input onChange={(e) => setInput(e.target.value)} onKeyDown={()=> search(input)} type="search" placeholder="What are you looking for?"></input>
            <button type="submit" className="button" onClick={() => search(input)}>Search</button></span>
            </div>
           

        <div className="news-body">
          {input
            ? data.hits.map((x, index) => <Card key={index} art={x} />)
            : inputResults.map((x, index) => <Card key={index} art={x} />)}
        </div>

        <div className="footer">
          <div className="footer-text">
            <a
              href="https://github.com/Quantumminded/Hacker-news"
              target="_blank"
            >
              open-source code
            </a>{" "}
            by{" "}
            <a href="https://main--stringhetti.netlify.app/" target="_blank">
              Luca
            </a>
            ,{" "}
            <a href="https://github.com/Valeprogr" target="_blank">
              Valetina
            </a>{" "}
            and{" "}
            <a href="https://adaneo6.com/" target="_blank">
              Ada
            </a>
          </div>
        </div>
      </>
    );
}
