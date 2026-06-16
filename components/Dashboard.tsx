"use client"
import { useState} from "react";
import Box from "../components/Box";
import Form from "../components/Form"
import Alumnos from "../components/Alumnos"
import Barra from "../components/Barra"
import FormEditar from "../components/FormEditar"
import { Alumno } from "../lib/db"

type AlumnoProps = {
    listaAlumnos : Alumno[];
}

type Modo = "ninguno" | "add" | "borrar" | "editar"; //Las opciones que podemos tener

export default function Dashboard({listaAlumnos} : AlumnoProps){

    const [modo, setModo] = useState<Modo>("ninguno");
    const [alumnoEditar, setAlumnoEditar] = useState<Alumno | null>(null); //Necesito guardar el alumno que voy a editar pero tengo que inicializar alumnoEditar en null porque no hay ningún alumno




    return(
        <div className = "flex flex-col items-center justify-center  mt-2">
              <Barra modo = {modo} setModo = {setModo} setAlumnoEditar = {setAlumnoEditar}></Barra>
              <div className = "flex w-full justify-center space-x-20 mt-2 items-start">
              {modo === "add" || (modo === "editar" && alumnoEditar) ? <Box>
                {modo === "add" ? <Form></Form> : null}
                {modo === "editar" && alumnoEditar ? <FormEditar key={alumnoEditar.dni} alumnoEditar = {alumnoEditar}></FormEditar> : null}
              </Box> : null }
              
              <Box>
                <Alumnos listaAlumnos={listaAlumnos} modo = {modo} setAlumnoEditar={setAlumnoEditar}>
                </Alumnos>
              </Box>
              </div>
            </div>
    )
}