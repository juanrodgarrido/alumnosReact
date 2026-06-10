"use server"

import { insertarAlumno } from "./db";
import { revalidatePath } from "next/cache";

export async function addAlumno(formData: FormData) {

    
    const dni = formData.get("dni") as string;
    const nombre = formData.get("nombre") as string;
    const apellido1 = formData.get("apellido1") as string;
    const apellido2 = formData.get("apellido2") as string;
    const f_nacimiento = new Date(formData.get("f_nacimiento") as string);    
    const especialidad = formData.get("especialidad") as string;
    const curso = Number(formData.get("curso") as string);
    
    await insertarAlumno({ dni, nombre, apellido1, apellido2, f_nacimiento, especialidad, curso, pagado: false});
}