import Card from "./Card"

const AllSkills = () => {
    return(
        <div className="bg-{black}">
            <h2>Mis habilidades</h2>
            <Card title={'Cooworking'} text={'Trato de ser una persona valiosa para el equipo, aportando ideas y todos los conocimientos a mi alcance para que el flujo de trabajo optimice el desarrollo del proyecto'}></Card>
            <Card title={'Planificación'} text={'Me gusta prioriza y dividir las tareas para asegurarme de que lo mas importante queda hecho a tiempo y saber que tendré tiempor por si hay imprevistos.'}></Card>
            <Card title={'Enfoque'} text={'Siempre trato de mantenerme centrado y concentrado en lo que se esta haciendo ya que es vital para sacar el trabajo adelante y poder seguir toda la planificación previa.'}></Card>
            <Card title={'Flexibilidad'} text={'Soy una persona que está dispuesta a ver todos los puntos de vista posibles, no cerrarse en una idea para tener una mejor respuesta a la hora de poder replantear un plan o adaptarme a las circunstacias externas al proyecto'}></Card>
            <Card title={'Conciencia'} text={'Entiendo como conciencia el tener claro cual es mi rol en cada punto tanto del proyecto como del equipo y también a la hora de conocer cuales son mis limitaciones o mis puntos fuertes para así administrar mejor mi tiempo.'}></Card>
            <Card title={'Compromiso'} text={'Tanto en el ámbito laboral como en el académico siempre me ha gustado estar comprometido con el objetivo de la empresa, esto supone una motivación, concentración y una productividad superior.'}></Card>
        </div>
    ) 
}
export default AllSkills