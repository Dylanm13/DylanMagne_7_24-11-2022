import {Routes, Route, } from "react-router-dom";

import "./main.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";



function App() {
    return (
        <div>
            <div className="App">
                {<Navbar />}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                {<Footer />}
            </div>
        </div>
    )
}

export default App

