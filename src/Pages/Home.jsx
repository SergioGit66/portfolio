import Navbar from "../components/Navbar";
import InfoBox from "../components/InfoBox";
import InfoCard from "../components/ImgCard";
import React from "react";
import Projects from "../components/Projects";  
import AboutMeBox from "../components/AboutMeBox";

const Home = () => {
    return (
        <div>
            <Navbar />
            <InfoCard />
            <InfoBox />
            <AboutMeBox />
            <Projects />
        </div>
    )
}

export default Home