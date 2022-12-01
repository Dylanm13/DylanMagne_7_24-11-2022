import React from "react"; /* importation de react */

function Card ({ image, title }) { /* initialisation de la function Thumbnails avec pour props image et title */
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb__img" /> {/* l'image du logement prend comme source notre props image */}
      <div className="thumb__overlay"></div>
      <h2 className="thumb__title">{title}</h2> {/* le titre du logement prend comme texte notre props title */}
    </div>
  );
};

export default Card;