
import Box from "../components/Box";
import Form from "../components/Form"
import { obtenerAlumnos } from "@/lib/db"





export default async function Home() {

  const alumnos = await obtenerAlumnos();  


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
                  <p>{alumno.f_nacimiento.toLocaleDateString()}</p>
                  <p>{alumno.curso}º {alumno.especialidad}</p>
                </div>
              </li>
            ))}
          </ul>
          {alumnos.length === 0 ? <p className = "text-black">No hay tareas pendientes</p> : null}
        </div>
      </Box>
    </div>
  );
}
