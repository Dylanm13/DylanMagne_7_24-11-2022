import React from "react"; /* importation de react */
import { Link } from "react-router-dom"; /* importation de Link de react router afin de pouvoir faire des lien entre les pages */

import image from "../design/banner.png"; /* importation de image qui contient l'image de notre bannière */
import products from "../__mocks__/data.json"; /* importation de products qui correspond aux infos de nos produits */
import marketdata from "../__mocks__/aboutData"; /* importation de marketdata qui contient les différents slogan ou textes récurents du site */
import Homebanner from "../components/Homebanner"; /* importation de Homebanner le component de notre bannière de la page d'accueil */
import Card from "../components/Card"; /* importation de Card le component qui se charge de l'affichage des logements */

const slogan = marketdata.slogan /* stockage du slogan de la bannière dans une const slogan */

function Products () { /* initialisation de la function Products */
    return (
      <div className="home">
        <div className="home__banner">
          <Homebanner image={image} title={slogan} /> {/* les props image et title de notre component Homebanner vont désormais prendre les éléments correspondants importés */}
        </div>
        <section className="home__products">
          {products.map((product) => { /* application de la méthode .map à nos informations pour éviter de réitérer du code */
            return (
              <article key={product.id}> {/* ajout de l'id de notre produit pour la key */}
                <Link to={`/products/${product.id}`}> {/* ajout du'un Link pour faire en sorte qu'au click sur un logement nous sommes dirigés vers une page produit */}
                  <Card image={product.cover} title={product.title} /> {/* les props image et title de notre component Card vont désormais prendre les éléments correspondants importés  */}
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    );
  };
  
  export default Products;