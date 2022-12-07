import React from "react"; /* importation de react */
import downArrow from "../design/arrow.png" /* importation de l'image qui va nous servir de flèche */
import { useState } from "react"


function Collapse ({ title, content }) { /* initialisation de la function Collapse avec pour props title et content */
     
        const [ open, setOpen ] = useState(false)
        
        const isCollapse = (e) => {
            e.preventDefault();
            const divText = e.target.nextSibling;
            const arrow = e.target.lastChild;
            setOpen(!open)
            if (!open) {
                divText.classList.add("show")
                arrow.classList.add("rotate")
            } else {
                divText.classList.remove("show")
                arrow.classList.remove("rotate")
            }
        }

    return (
        <div className="collapse">
            <button type="button" className="collapse__button" onClick={isCollapse}>
                {title}
                <img src={downArrow} alt="" className="collapse__arrow" />
            </button>
            <div className= "collapse__content">
            {Array.isArray(content) ? (
                    <ul className="collapse__list">
                        {content.map((equipement, index) => (
                            <li key={index} className="collapse__list-element">
                                {equipement}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="collapse_text">{content}</p>
                )}
            </div>
        </div>
    )
}

export default Collapse