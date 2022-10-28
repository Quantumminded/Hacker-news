import React, { useState, useEffect } from "react";
import Card from "./Cardluca";
import Pagination from "./Pagination";


export default function Main() {
    const [input, setInput] = useState('');
    const [inputResults, setInputResults] = useState([]);




    const search = (topic) => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${topic}`)
            .then((response) => response.json())
            .then((data) => setInputResults(data.hits))



    }


    return (
        <>
            <div className="nav-bar">
            <span><h1>Hacker News</h1></span>

            <span className="btn-span"> 
            <input onChange={(e) => setInput(e.target.value)} type="search" placeholder="What are you looking for?"></input>
            <button onClick={() => search(input)}>Search</button></span>
            </div>
           
           

            <div className="news-body">
                {
                    inputResults ?
                        inputResults.map((x, index) => (<Card key={index} art={x} />))
                        :
                        <p>Loading</p>

                }
            </div>
            
        </>
    );{}
}