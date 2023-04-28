import "./ListaOpciones.css"

const ListaOpciones = () =>{
    //Para recorrer el arreglo usamos metodo map -> arreglo.map( (equipo,index) => {
    //  return <optin></option>   
    // } )
    const equipos = ["Programación","Front End","Data Science","Devops","UX y Diseño","Móvil","Innovación y Gestión"]
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { equipos.map( (equipo, index) => <option key={index}>{equipo}</option> ) }
        </select>
    </div>
}

export default ListaOpciones