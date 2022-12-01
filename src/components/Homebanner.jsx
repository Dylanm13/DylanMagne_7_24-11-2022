import React from "react"; /* importation de react */

function Homebanner ({ image, title }) { /* initialisation de notre function Homebanner avec comme props image et title */
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb__img" /> {/* l'image de la bannière prend comme source notre props image */}
      <div className="thumb__overlay"></div>
      <h2 className="thumb__bigtitle">{title}</h2> {/* le titre affiché sur la bannière prend comme texte notre props title */}
    </div>
  );
};

export default Homebanner;