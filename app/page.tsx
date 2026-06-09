"use client";

import Button from "../components/Button";
import Box from "../components/Box";

export default function Home() {
  return (
    <div>
      <Box>
        <label className="text-black">DNI</label>
        <input
          type="text"
          className="text-black"
          placeholder="12345678A"
        ></input>
        <label className="text-black">Nombre</label>
        <input type="text" className="text-black" placeholder="Juan"></input>
        <label className="text-black">Primer apellido</label>
        <input
          type="text"
          className="text-black"
          placeholder="Rodriguez"
        ></input>
        <label className="text-black">Segundo apellido</label>
        <input type="text" className="text-black" placeholder="Garrido"></input>
        <label className="text-black">Fecha de nacimiento</label>
        <input type="date" className="text-black"></input>
        <label className="text-black">Especialidad</label>
        <select>
          <option value="DAM" className="text-black">
            DAM
          </option>
          <option value="DAW" className="text-black">
            DAW
          </option>
        </select>
        <Button texto="Añadir alumno"></Button>
      </Box>
    </div>
  );
}
