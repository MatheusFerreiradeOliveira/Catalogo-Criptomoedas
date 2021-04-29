import React from 'react';
import { HiStar } from "react-icons/hi";
import './cryptocard.css';

export default function Cryptocard({data}) {
    
    console.log(data);
    
    return (
        <div className="card">
            <div className="cardImage">
                <img src={data.imgUrl} height="200" width="100%" style={{borderRadius: "20px"}}/>
            </div>
            <div className="cardBody">
                <HiStar className="starIcon" color={data.isFavourite ? "gold" : "white"}/>
                <h1>{data.name} <small>({data.code})</small></h1>
                <h1>{data.value} (U$)</h1>
                <h1>{data.variation} (% de variação semanal)</h1>
            </div>
        </div>
    )
}