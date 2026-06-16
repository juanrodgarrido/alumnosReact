

import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

import { addAlumno } from "../lib/actions"



export default function Form(){





    return(           
                  
      <form action={addAlumno} className="flex flex-col justify-between h-full ">
        <div>
        <Label texto="DNI"></Label>
        <Input type="text" name="dni" placeholder="12345678A" required pattern="[0-9]{8}[A-Za-z]{1}" maxLength={9}></Input> {/* Usamos pattern para controlar que pongan el DNI en el formato correcto y maxLength para limitar los caracteres*/}
        <Label texto="Nombre"></Label>
        <Input type="text" name="nombre" placeholder="Juan" required maxLength={20}></Input>
        <Label texto="Primer apellido"></Label>
        <Input type="text" name="apellido1" placeholder="Rodriguez" required maxLength={20}></Input>
        <Label texto="Segundo apellido"></Label>
        <Input type="text" name="apellido2" placeholder="Garrido" required maxLength={20}></Input>
        <Label texto="Fecha de nacimiento"></Label>
        <Input type="date" name="f_nacimiento" required></Input>
        <Label texto="Especialidad"></Label>
        <select name="especialidad" defaultValue="" className="text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-2" required>
          <option value="" disabled>Elige una opción</option>
          <option value="DAM">DAM</option>
          <option value="DAW">DAW</option>
        </select>
        <Label texto="Curso"></Label>
        <select name="curso" defaultValue="" className="text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-2" required>
          <option value="" disabled>Elige una opción</option>
          <option value="1">1º</option>
          <option value="2">2º</option>
        </select>        
        <Label texto="¿Pagado?"></Label>    
        <select name="pagado" defaultValue="" className="text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-2" required>
          <option value="" disabled>Elige una opción</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
        </div>
        <Button texto="Añadir alumno" type = "submit"></Button>
      </form>
    
        
    )
}