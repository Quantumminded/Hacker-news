import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Pagination from "./Pagination";
import ReactDOM from "react-dom";

export default function Main() {
return (
    <>
        <div>MAIN</div>
        <SearchBar/>
        <Card/>
        <Card/>
        <Card/>
        <Pagination/>
    </>
)
}