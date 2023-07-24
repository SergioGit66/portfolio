import { Link, BrowserRouter as Router } from "react-router-dom"
import React from "react"


const Navbar = () => {
    return (
        <nav>
            <div className="bg-black flex gap-10px w-166px items-center">
                <p className="">Sergio</p>
                    <Link to='/' className="">Inicio</Link>
                    <Link to='/aboutMe' className="">Acerca de mi</Link>
                    <Link to='/contactMe' className="">Contactame</Link>
                
            </div>
        </nav>

    )
}
export default Navbar 