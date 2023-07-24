//pequeño texto acerca de mi (HOME)
import SergioPic from "../img/IMG-20230622-WA0002(1).jpg"

const AboutMeBox = () => {
    return (
        <div>
            <h1 className="">Acerca de mi</h1>

            <p>Hola, mi nombre es Sergio, me gusta mucho el trabajo en equipo tanto en mi entorno profesional como en el personal. Como desarrollador front end, considero que un buen producto tiene crear tanto una satisfación a la hora de usarse como emocional en las que lo usan. 
            He estado utilizando tecnologías como Javascript, React y varios frameworks como lo son Bootstrap y Tailwind. </p>


            <img src={SergioPic} alt="No funciona" />
        </div>
    )
}
export default AboutMeBox