import React, { useState } from "react";
import Card from "./Cardluca";
import data from "./data.json"


export default function Main() {
    const [input, setInput] = useState(true);
    const [inputResults, setInputResults] = useState([]);



console.log(data.hits)

    const search = (topic) => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${topic}`)
            .then((response) => response.json())
            .then((data) => setInputResults(data.hits))
           
            setInput(false)



    }


    return (
        <>
            <div className="nav-bar">
            <span><h1>Hacker News</h1></span>

            <span className="btn-span"> 
            <input onChange={(e) => setInput(e.target.value)} type="search" placeholder="What are you looking for?"></input>
            <button className="button" onClick={() => search(input)}>Search</button></span>
            </div>
           
           

            <div className="news-body">
                {
                    input ?
                   data.hits.map((x, index) => (<Card key={index} art={x} />))
                    
                        :
                        inputResults.map((x, index) => (<Card key={index} art={x} />))
                        

                }
            </div>
            
        </>
    );
}