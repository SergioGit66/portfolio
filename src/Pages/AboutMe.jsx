import React from "react"
import BioImg from "../components/BioImg"
import Navbar from "../components/Navbar"
import Tecnologies from "../components/Tecnologies"
import WorkTecnologies from "../components/WorkTecnologies"
import Footer from "../components/Footer"
import AllSkills from "../components/AllSkills"

const AboutMe = () => {
    return(
        <div>
            <Navbar />
            <BioImg />
            <AllSkills />
            <Tecnologies />
            <WorkTecnologies />
            <Footer />
        </div>
    )
}

export default AboutMe