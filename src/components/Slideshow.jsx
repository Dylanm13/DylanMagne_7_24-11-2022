import React from "react";
import { useState } from "react";

import arrowRight from "../design/rightarrow.svg"
import arrowLeft from "../design/leftarrow.svg"

function Slideshow ({slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    function nextSlide () {
        setCurrent(current === length -1 ? 0 : current + 1) 
    }

    function prevSlide () {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className="slideshow">
            {slides.map((picture, index) => { 
                return (
                    <div key={index} className={index === current ?
                    "slide slideshow__active-picture" : 
                    "slide slideshow__inactive-picture"}>
                        {index === current && (
                            <img src={picture} alt="" className="slideshow__picture" />
                        )}
                    </div>
                )
                })}
                {length > 1 ? (
                    <>
                        <div className="slideshow_previous" onClick={prevSlide}>
                            <img src={arrowLeft} alt="" className="slideshow__previous-icon" />
                        </div>
                        <div className="slideshow_next" onClick={nextSlide} >  
                            <img src={arrowRight} alt="" className="slideshow__next-icon" />
                        </div> 
                    </> 
                ) : null}
                <p className="slideshow__number">{current+1}/{length}</p>
        </div>
    )
}


export default Slideshow