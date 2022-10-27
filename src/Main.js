import React from "react";
import SearchBar from "./SearchBar";
// import Card from "./Card";
import Card from "./Cardluca";
import Pagination from "./Pagination";
import Data from "./data.json"

export default function Main() {

  let { hits } = Data;
return (
  <>
    <div>MAIN</div>
    <SearchBar />
    <div className="news-body">
      {hits.map(hit=>(<Card art={hit} />))}
    </div>
    <Pagination />
  </>
);
}