import { useState } from "react"
import Header from "./assets/components/Header"
import Tareas from "./assets/components/Tareas"

function App() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: "ir al cine",
      fecha: "02 de febrero",
      terminado: true,
  },
  {
      id: 2,
      texto: "Comprar en el supermercado",
      fecha: "10 de febrero",
      terminado: false,
  },
  {
      id: 3,
      texto: "Hacer una app en React",
      fecha: "11 de febrero",
      terminado: false,
  }
  ])


  const borrarTareas = (id) =>{
    //console.log("tarea" + id);
    {setTareas(tareas.filter((tareas)=> tareas.id !== id))}
  }

  const terminarTareas = (id) =>{
    console.log("tarea" + id);
  }


  return (
    <div className="container">
      <Header titulo="Tareas"/>
      {tareas.length > 0 ? <Tareas tareas={tareas} onDelete={borrarTareas} onToggle={terminarTareas} />: "No existen tareas en la lista"} 
    </div>
  )
}

export default App
