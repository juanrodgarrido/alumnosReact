
import Box from "../components/Box";
import Form from "../components/Form"
import Alumno from "../components/Alumnos"
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
        <Alumno listaAlumnos={alumnos}>
        </Alumno>
      </Box>
    </div>
  );
}
