import React from "react"; /* importation de react */

import logoFooter from "../design/logofooter.png"; /* importation du logo du site pour la version footer */

function Footer() {
  const effectiveYear = new Date().getFullYear(); /* stockage dans une constante de l'année actuelle */

  return (
    <footer className="footer">
      <img src={logoFooter} alt="Logo du footer" className="footer__logo" /> {/* le logo du footer prend comme source l'importation faite plus haut */}
      <p className="footer__text">
        &copy;
        {effectiveYear} Kasa. All rights reserved {/* ici le texte correspond à © suivit de l'année actuelle puis du texte */}
      </p>
    </footer>
  );
}

export default Footer;