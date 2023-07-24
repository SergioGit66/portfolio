//bio con foto
import React from "react"
import SergioPic from "../img/IMG-20230622-WA0002(1).jpg"


const BioImg = () => {
    return(
        <div>
        <h1>Sergio Dominguez</h1>

        <p>Me llamo Sergio y actualmente acabo de terminar de cursar un bootcamp de desarrollador web. He afianzado todos los conocimientos para poder tener una base en la que empezar en este sector! Soy una persona que le gusta trabajar en equipo ya que es una manera de conectar con diferentes visiones y recompensa con un conocimiento con el fin de mejorar tanto la productividad como la relación con el resto del equipo. Trato de buscar todo el feedback posible en los proyectos, con el fin de mejorar y poder hacer que el producto sea mas atractivo y funcional para consumidor. Cualquier duda u opinión, siempre estoy dispuesto a intercambiar experiencias!</p>

        <u><i>sergiodomingueztenorio66@gmail.com</i></u>

        <img src={SergioPic} alt="No funciona" />
        </div>
    )
}
export default BioImg


