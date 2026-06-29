import React from "react";
import "./App.css";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import NavigationBar from "./Navbar";
import Footer from "./Footer";
import Service from "./Service";
import Portfolio from "./portfolio";
import Testimonial from "./Testimonial";
import WebDevelopment from "./services/webdevelopment";
import AppDevelopment from "./services/appdevelopment";
import AI from "./services/Ai";
import Cybersecurity from "./services/Cybersecurity";
import UIUX from "./services/UIUX";
import Contact from "./Contact";


function App(){
    return(
        <BrowserRouter>

        <NavigationBar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/ai" element={<AI />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/uiux" element={<UIUX />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        </BrowserRouter>
    )
}
export default App;