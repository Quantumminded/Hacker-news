import React from "react";
import "./index.css";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav className='pagination'>
            
                {pageNumbers.map(number => (
                    <a  key={number}  onClick={()=>paginate(number)} href='!#' className=''>
                        {number}
                    </a>
                ))}
        
        </nav>
    )
}