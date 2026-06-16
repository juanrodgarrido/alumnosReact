import { Alumno } from "../lib/db"

import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { edAlumno } from "../lib/actions";

type FormEditarProps = {
    alumnoEditar : Alumno;
}

export default function FormEditar({alumnoEditar} : FormEditarProps){


    return(
        <form action={edAlumno} className="flex flex-col justify-between h-full ">
                <div>
                <Label texto="DNI"></Label>
                <Input type="text" name="dni" defaultValue={alumnoEditar.dni} className = "bg-gray-200" readOnly maxLength={9}></Input> {/* Usamos pattern para controlar que pongan el DNI en el formato correcto y maxLength para limitar los caracteres*/}
                <Label texto="Nombre"></Label>
                <Input type="text" name="nombre" defaultValue={alumnoEditar.nombre} required maxLength={20}></Input>
                <Label texto="Primer apellido"></Label>
                <Input type="text" name="apellido1" defaultValue={alumnoEditar.apellido1} required maxLength={20}></Input>
                <Label texto="Segundo apellido"></Label>
                <Input type="text" name="apellido2" defaultValue={alumnoEditar.apellido2} required maxLength={20}></Input>
                <Label texto="Fecha de nacimiento"></Label>
                <Input type="date" name="f_nacimiento" defaultValue={alumnoEditar.f_nacimiento.toISOString().slice(0, 10)} required></Input>
                <Label texto="Especialidad"></Label>
                <select name="especialidad" defaultValue={alumnoEditar.especialidad} className="text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-2" required>
                  <option value="" disabled>Elige una opción</option>
                  <option value="DAM">DAM</option>
                  <option value="DAW">DAW</option>
                </select>
                <Label texto="Curso"></Label>
                <select name="curso" defaultValue={alumnoEditar.curso} className="text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-2" required>
                  <option value="" disabled>Elige una opción</option>
                  <option value="1">1º</option>
                  <option value="2">2º</option>
                </select>        
                <Label texto="¿Pagado?"></Label>    
                <select name="pagado" defaultValue={alumnoEditar.pagado ? "si" : "no"} className="text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-2" required>
                  <option value="" disabled>Elige una opción</option>
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </select>
                </div>
                <Button texto="Editar alumno" type = "submit"></Button>
              </form>
    )
}