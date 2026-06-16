import Button from "./Button";
import { Alumno} from "../lib/db"


type BarraProps = {
    modo: "ninguno" | "add" | "borrar" | "editar";
    setModo: (modo: "ninguno" | "add" | "borrar" | "editar") => void;
    setAlumnoEditar : (alumno : Alumno | null) => void;
}

export default function Barra({modo, setModo, setAlumnoEditar} : BarraProps){

    return(
        <div className = "flex w-1/4 items-center justify-center gap-4 bg-white rounded-xl p-5 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
            <Button texto = "Añadir" onClick={() => {setModo(modo === "add" ? "ninguno" : "add"); setAlumnoEditar(null) }} activo = {modo === "add"} ></Button>            
            <Button texto = "Editar" onClick={() => {setModo(modo === "editar" ? "ninguno" : "editar"); setAlumnoEditar(null)}} activo = {modo === "editar"}></Button>
            <Button texto = "Borrar"  onClick={() => {setModo(modo === "borrar" ? "ninguno" : "borrar"); setAlumnoEditar(null)}} activo = {modo === "borrar"}></Button>
            
            
        </div>
    )
}