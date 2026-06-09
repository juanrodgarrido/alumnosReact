"use client";

import Button from "../components/Button";
import Box from "../components/Box";
import Label from "../components/Label";
import Input from "../components/Input";

export default function Home() {
  return (
    <div>
      <Box>
        <Label texto="DNI"></Label>
        <Input type="text" placeholder="12345678A"></Input>
        <Label texto="Nombre"></Label>
        <Input type="text" placeholder="Juan"></Input>
        <Label texto="Primer apellido"></Label>
        <Input type="text" placeholder="Rodriguez"></Input>
        <Label texto="Segundo apellido"></Label>
        <Input type="text" placeholder="Garrido"></Input>
        <Label texto="Fecha de nacimiento"></Label>
        <Input type="date" placeholder=""></Input>
        <Label texto="Especialidad"></Label>
        <select defaultValue = "" className="text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-2">
          <option value = "" disabled>Elige una opción</option>
          <option value="DAM" >
            DAM
          </option>
          <option value="DAW" >
            DAW
          </option>
        </select>
        <Label texto="Curso"></Label>
        <select defaultValue = "" className="text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-2">
          <option value = "" disabled>Elige una opción</option>
          <option value="1" >
            1º
          </option>
          <option value="2" >
            2º
          </option>
        </select>

        <Button texto="Añadir alumno"></Button>
      </Box>
    </div>
  );
}
