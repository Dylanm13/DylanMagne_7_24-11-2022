import React from "react";
import downArrow from "../design/arrow.png"


const Collapse = ({ title, content }) => {
    const isCollapse = (e) => {
        e.preventDefault()
        const divText = e.target.nextSibling
        const arrow = e.target.lastChild

        if (!divText.classList.contains("show")) {
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
            <div className="collapse__content">
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