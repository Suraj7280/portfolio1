import React from 'react'
import './Achieve.css'
import flipkart from '../assets/flipkart.jpg'
import adobe from '../assets/adobe.jpg'
import faciliation from '../assets/faciliation.jpg'
import techguru from '../assets/techguru.jpg'
import high from '../assets/high.jpg'
import news from '../assets/news.jpg'
import fasc from '../assets/fasc.jpg'
import techg from '../assets/techg.jpg'



export default function Achieve(){
    return(
        <>
            <div className="i-achieve">
                <h5 className="i-p-i">Some of My Achievements</h5>
                <span className="crousel">
                    <img src={techguru} className="ii-image" alt="imag1e" />
                    <img src={adobe} className="ii-image" alt="imag1e" />
                </span>
                <span className="crousel">
                    <img src={flipkart} className="ii-image" alt="imag1e" />
                    <img src={faciliation} className="ii-image" alt="imag1e" />
                </span>
                <h5 className="i-p-i">Favourite Pics</h5>
                <span className="crousel">
                    <img src={high} className="ii-image" alt="imag1e" />
                    <img src={techg} className="ii-image" alt="imag1e" />
                </span>
                <span className="crousel">
                    <img src={news} className="ii-image" alt="imag1e" />
                    <img src={fasc} className="ii-image" alt="imag1e" />
                    
                </span>
            </div>
            
            
        </>
    );
}