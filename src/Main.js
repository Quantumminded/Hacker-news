import React, { useEffect, useState } from 'react';
import SearchBar from "./SearchBar";
import Card from "./Card_api";
import Pagination from "./Pagination";
import ReactDOM from "react-dom";


export default function Main() {
    // const [items, setItems] = useState([]);
    // const [query, setQuery] = useState("programming");
    // const [newsTitle, setNewsTitle] = useState([]);
    // const [author, setAuthor] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //   const fetchArticles = async () => {
    //     const res = await fetch(
    //       `http://hn.algolia.com/api/v1/search_by_date?query=${query}`
    //     );
    //     const data = await res.json();
    //     setItems(data.hits);
    //     setNewsTitle(data.hits[0]);
    //     // setNewsAuthor(data.hits[0]);
    //   };

    //   fetchArticles();
    // }, []);

 const [stroyIds, setStoryIds] = useState([]);
 

return (
  <>
    <div>MAIN</div>
    <SearchBar />
    <div className="news-body">
      {/* <Card newsTitle={newsTitle} author={author} /> */}
      <Card  />
    </div>
    <Pagination />
  </>
);
}