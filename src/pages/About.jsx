import aboutData from "../__mocks__/aboutData" /* importation de aboutData contenant toutes phrases dont nous avons besoin */
 
import Banner from "../components/Banner" /* importation du component Banner */
import Collapse from "../components/Collapse" /* importation du component Collapse */

import imageBanner from "../design/aboutbanner.png" /* importation de l'image de la bannière de la page à propos */

function About () { /* initialisation de la function About */
    function content (title) { /* initialisation de la function content avec comme paramètre title */
        switch (title) {
            case "fiability":
                return aboutData.fiability
            case "respect":
                return aboutData.respect
            case "service":
                return aboutData.service /* AJOUT DE PLUSIEURS CAS COMPORTANT LES TEXTES CORESPONDANTS A CES MÊMES CAS */
            case "security":
                return aboutData.security  
            default:
                console.log("default")
                break
        }
    }

    return (
        <div className="about">
            <Banner image={imageBanner} /> {/* le props image de notre component Banner va désormais prendre l'élément correspondant importé */}
            <div className="about__dropdowns">
                <Collapse title="Service" content={content("service")} /> {/* AJOUT DU COMPNENT COLLAPSE PERMETTANT D'OUVRIR AU CLICK NOS ELEMENTS */}
                <Collapse title="Fiabilité" content={content("fiability")} /> {/* ET LES PROPS IMAGE ET CONTENT VONT DESORMAIS PRENDRE LES */}
                <Collapse title="Respect" content={content("respect")} /> {/* ELEMENTS CORRESPONDANT IMPORTÉS */}
                <Collapse title="Sécurité" content={content("security")} />
            </div>          
        </div>
    )
}

export default About