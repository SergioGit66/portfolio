import { Link, BrowserRouter as Router } from "react-router-dom"



const Navbar = () => {
    return (
        <nav>
            <div className="">
                <p className="">Sergio</p>
                    <Link to='/home' className="">Inicio</Link>
                    <Link to='/aboutMe' className="">Acerca de mi</Link>
                    <Link to='/contact' className="">Proyectos</Link>
                <button className='' onClick="changeColor('blue')">Contactame</button>
            </div>
        </nav>

    )
}
export default Navbar