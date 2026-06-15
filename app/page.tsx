
import Dashboard from "../components/Dashboard"
import { obtenerAlumnos } from "@/lib/db"






export default async function Home() {

  const alumnos = await obtenerAlumnos();  
  

  return (    
        <Dashboard listaAlumnos={alumnos}>
        </Dashboard>      
  );
}
