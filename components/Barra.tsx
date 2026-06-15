import Button from "./Button";


type BarraProps = {
    modo: "ninguno" | "add" | "borrar" | "editar";
    setModo: (modo: "ninguno" | "add" | "borrar" | "editar") => void;
}

export default function Barra({modo, setModo} : BarraProps){

    return(
        <div className = "flex w-1/4 items-center justify-center gap-4 bg-white rounded-xl p-5 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
            <Button texto = "Añadir" onClick={() => setModo(modo === "add" ? "ninguno" : "add")} activo = {modo === "add"}></Button>            
            <Button texto = "Editar" onClick={() => setModo(modo === "editar" ? "ninguno" : "editar")} activo = {modo === "editar"}></Button>
            <Button texto = "Borrar"  onClick={() => setModo(modo === "borrar" ? "ninguno" : "borrar")} activo = {modo === "borrar"}></Button>
            
            
        </div>
    )
}