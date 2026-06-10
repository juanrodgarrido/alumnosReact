
import Box from "../components/Box";
import Form from "../components/Form"
import { Alumno } from "../lib/db"
import { obtenerAlumnos } from "@/lib/db"


type listaAlumnos = {
  listaAlumnos: Alumno[]
};


export default async function Home({listaAlumnos} : listaAlumnos) {

  const alumnos = await obtenerAlumnos();
  const addAlumno = function(){
    
  }


  return (
    <div className = "flex justify-center space-x-20 mt-2 items-start">
      <Box>
        <Form>

        </Form>
      </Box>
      <Box>
        <div>
          <ul>
            {alumnos.map((alumno) => (
              <li key = {alumno.dni}>
                <div className = "text-black mb-3">
                  <p>{alumno.nombre} {alumno.apellido1} {alumno.apellido2}</p>
                  <p>{alumno.f_nacimiento.toLocaleDateString()} ({alumno.edad} años)</p>
                  <p>{alumno.curso}º {alumno.especialidad}</p>
                </div>
              </li>
            ))}
          </ul>
          {alumnos.length === 0 ? <p>No hay tareas pendientes</p> : null}
        </div>
      </Box>
    </div>
  );
}
