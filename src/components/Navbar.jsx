import React from "react" /* importation de react */
import Logo from "../design/logo.png" /* importation du logo du site */ 
import {NavLink} from "react-router-dom" /* importation de NavLink part react router */



function Navbar() {
    return (
        <nav className="nav">
            <NavLink to="/"><img src={Logo} alt="Logo" className="nav__img" /></NavLink> {/* ajout du logo du site en mettant un link retournant le menu principal */}
            <div className="nav__links">
                <NavLink to="/" className={({ isActive }) => /* ajout du la rubrique "accueil" en ajoutant une condition avec un boolean */
                      isActive ? "nav__links--active" : "nav__links--inactive" /* pour que le css soit différent selon l'etat de l'élément */
                      }>Accueil {/* en mettant des className différents pour leur donner des propriétés différentes dans le css */}
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                      isActive ? "nav__links--active" : "nav__links--inactive" /* MÊME PRINCIPE QU'AU DESSUS */
                      }>À propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar