import React from "react";
import Hero from "./Hero";
import About from "./About";
import Metrices from "./keymatrices";
import ServiceOverview from "./Serviceoverview";
import Testimonials from "./FeaturedTestimonial";
import FeaturedPortfolio from "./FeaturedPortfolio";

function Home(){
    return(
        <div>
            <Hero />
            <Metrices />
            <About />
            <ServiceOverview />
            <Testimonials />
            <FeaturedPortfolio />

        </div>
    )
}
export default Home;