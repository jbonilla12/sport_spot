import React from 'react'
import { withRouter } from 'react-router-dom'

export const Inicio = (props) => {
    return (
        <div className="jumbotron mt-5 container-fluid">
            <h2 className="display-4"><strong>¡Bienvenido! </strong> {props.email}</h2>
            <h1 className="display-4"><strong>Sport Spot Administracion</strong></h1>
            <p className="lead">Se requiere tener informacion precisa para modelado de datos del sistema</p>
            <hr className="my-4"/>
            <p>Almacena toda la informacion necesaria para la gestion de la tienda deportiva.</p>
        </div>
        
    )
}
export default withRouter(Inicio)