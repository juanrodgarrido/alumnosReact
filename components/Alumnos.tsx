"use client"

import {Alumno} from "../lib/db"
import { deleteAlumno } from "../lib/actions"
import {useState} from "react";

type AlumnoProps = {
    listaAlumnos : Alumno[]
    modo: "ninguno" | "add" | "borrar" | "editar";
}

export default function Alumnos({listaAlumnos, modo} : AlumnoProps){

  const alumnosPorPagina = 6;
  const [pagina, setPagina] = useState(1);
  const totalPaginas = Math.ceil(listaAlumnos.length/alumnosPorPagina);
  const inicio = (pagina - 1) * alumnosPorPagina; 
  const alumnosPagina = listaAlumnos.slice(inicio, inicio + alumnosPorPagina);

  

    async function borrar(dni : string) {
      if(confirm("Seguro que quieres borrar a este alumno de la base de datos?")){
      deleteAlumno(dni)
    }
  }

    
    
    return(
        <div className="w-full flex flex-col justify-between h-full">
          <ul className="w-full">
            {alumnosPagina.map((alumno) => (
              <li key = {alumno.dni}>               
                <div className = "text-black mb-3 w-full text-center">
                  <div className = "relative flex justify-center items-center">
                  <p>{alumno.nombre} {alumno.apellido1} {alumno.apellido2} </p>
                  {modo === "borrar" ? (<button className="absolute right-0 border-none bg-red-500 px-2.5 py-1.5 rounded-md cursor-pointer" onClick={() => borrar(alumno.dni)}>✖</button>
                    ) : null}
                  </div>
                  <p>{alumno.f_nacimiento.toLocaleDateString()}</p>
                  <p>{alumno.curso}º {alumno.especialidad}</p>
                  
                </div>
              </li>
            ))}
          </ul>
          {listaAlumnos.length === 0 ? <p className = "text-black">No hay alumnos pendientes</p> : null}

          <div className = "flex justify-center gap-2 mt-4">
            <button className ="bg-blue-600 text-white p-2 rounded-lg cursor-pointer" onClick={() => setPagina (p => p-1)} disabled={pagina === 1}>Anterior</button>
            <button className ="bg-blue-600 text-white p-2 rounded-lg cursor-pointer" onClick={() => setPagina (p => p+1)} disabled={pagina === totalPaginas}>Siguiente</button>
          </div>
        </div>
    )
}