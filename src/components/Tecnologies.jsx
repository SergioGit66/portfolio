import Card from "./Card"
import React from "react"


const Tecnologies = () => {
    return(
        <div>
            <h2>Tecnologias con las que trabajo</h2>
            <Card title={'HTML'} text={''} src={''}></Card>
            <Card title={'Javascript'} text={''} src={''}></Card>
            <Card title={'React'} text={''} src={''}></Card>

            <h2>Experiencia de trabajo y educación</h2>
            <Card title={'Gamma Tech School'} text={'Estudié un bootcamp de desarrollo en la que tuve mas de 500h prácticas.'} src={''}></Card>
            <Card title={'Figma'} text={'He usado Figma para mas de un proyecto'} src={''}></Card>
            <Card title={''} text={''} src={''}></Card>
        </div>
    ) 
}
export default Tecnologies