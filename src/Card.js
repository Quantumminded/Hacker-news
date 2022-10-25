import React from "react";
import data from "./data.json"

export default function Card(){
let { hits } = data;

    return (
        <div>
            <div className="main-container">CARD</div>
            <div>
                <title {hits.map((hit) => ( <h2>{hit.title}</h2>))} />
                
            </div>
        </div>
    )
}