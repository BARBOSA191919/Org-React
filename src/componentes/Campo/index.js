import { useState } from "react"
import "./Campo.css"

const Campo = (props) => { /* los props son propiedas de los componentes*/
       /*el const crea una funcion */ 
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion 
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}
/*typeScript: TypeScript es un lenguaje basado en JavaScript pero con algunas mejoras que permiten convertir la tarea de crear una web con JavaScript en una nueva experiencia de programación.*/ 
export default Campo