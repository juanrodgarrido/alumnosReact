"use client"

import {Alumno} from "../lib/db"
import { deleteAlumno } from "../lib/actions"

type AlumnoProps = {
    listaAlumnos : Alumno[];
}

export default function Alumnos({listaAlumnos} : AlumnoProps){

  

    async function borrar(dni : string) {
      deleteAlumno(dni)
    }

    
    
    return(
        <div>
          <ul>
            {listaAlumnos.map((alumno) => (
              <li key = {alumno.dni}>               
                <div className = "text-black mb-3">
                  <p>{alumno.nombre} {alumno.apellido1} {alumno.apellido2}</p>
                  <p>{alumno.f_nacimiento.toLocaleDateString()}</p>
                  <p>{alumno.curso}º {alumno.especialidad}</p>
                  <button className="ml-1 border-none bg-red-500 px-2.5 py-1.5 rounded-md cursor-pointer" onClick={() => borrar(alumno.dni) }>✖</button>
                </div>
              </li>
            ))}
          </ul>
          {listaAlumnos.length === 0 ? <p className = "text-black">No hay alumnos pendientes</p> : null}
        </div>
    )
}