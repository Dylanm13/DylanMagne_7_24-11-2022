import React from "react"; /* importation de react */

function Banner ({ image }) { /* initialisation de la function Banner avec pour props image et text */
    return (
        <div className="banner">
            <img src={image} alt="" className="banner__img" /> {/* l'image de la bannière prendre comme source notre props image */}
            <div className="banner__overlay"></div>
        </div>
    )
}

export default Banner