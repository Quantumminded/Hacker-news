import React, { useState,useEffect } from "react";
import Card from "./Cardluca";
import Pagination from "./Pagination";


export default function Main() {
    const [input, setInput] = useState(true);
    const [inputResults, setInputResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const[postsPerPage, setPostsPerPage] = useState(15)


    const search = (topic) => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${topic}`)
            .then((response) => response.json())
            .then((data) => setInputResults(data.hits))
           
            setInput(false)
    }

  useEffect(() => {
    const fetchData = () => {
      fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story')
        .then((response) => response.json())
        .then((data) => setInputResults(data.hits))
    }
    fetchData()
   
  }, []);
  
  //Get current Post
  const indexLastPost = currentPage * postsPerPage;
  const indexOfFirsPost = indexLastPost - postsPerPage;
  const currentPosts = inputResults.slice(indexOfFirsPost, indexLastPost);

  //Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <>
        <div className="nav-bar">
          <span>
            <a href="/">
              <h1>Hacker News</h1>{" "}
            </a>
          </span>
        <span className="search-container"> 
            <input onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {
              if (e.key === 'Enter') {
                search(input)
              }
            }} type="search" placeholder="What are you looking for?"></input>
            <button type="submit" className="button" onClick={() => search(input)}>Search</button>
        </span>
        </div>
           

        <div className="news-body">
          {input
            ? currentPosts.map((x, index) => <Card key={index} art={x} />)
            : currentPosts.map((x, index) => <Card key={index} art={x} />)}
        </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={inputResults.length} paginate={paginate} />

        <div className="open-source">
            <a href="https://github.com/Quantumminded/Hacker-news"  rel="noreferrer" target="_blank">
                Open-source code
            </a>
            {" "}by{" "}
            <a href="https://main--stringhetti.netlify.app/" target="_blank" rel="noreferrer">
                Luca

            </a>
            ,{" "}
            <a href="https://github.com/Valeprogr" target="_blank" rel="noreferrer">
              Valentina
            </a>{" "}
            and{" "}
            <a href="https://adaneo6.com/" target="_blank" rel="noreferrer">
              Ada
            </a>
          </div>
      </>
    );
}
