import {Routes, Route } from "react-router-dom"; /* importation de Routes, Route de react router*/

import "./main.css"; /* importation du fichier main.css qui contient la compilation de sass */

import Navbar from "./components/Navbar"; /* importation du component Navbar */
import Footer from "./components/Footer"; /* importation du component Footer */

import Home from "./pages/Home"; /* importation de notre page Home */
import About from "./pages/About"; /* importation de notre page About */
import PageNotFound from "./pages/PageNotFound"; /* importation de notre page PageNotFound */
import SingleProduct from "./pages/Singleproduct";


function App() { /* initialisation de la function App */
    return (
        <div>
            <div className="App">
                {<Navbar />} {/* ajout du component Navbar ici car on veut qu'il apparaisse sur toute les pages */}
                    <Routes>
                        <Route path="/" element={<Home />} /> {/* route menant vers la page principale du site */}
                        <Route path="/about" element={<About />} /> {/* route menant vest la page à propos */}
                        <Route path="/products/:productId" element={<SingleProduct />} />
                        <Route path="*" element={<PageNotFound />} /> {/* route menant vers la page d'erreur */}
                    </Routes>
                {<Footer />} {/* ajout du component Footer ici car on veut qu'il apparaisse sur toute les pages */}
            </div>
        </div>
    )
}

export default App

