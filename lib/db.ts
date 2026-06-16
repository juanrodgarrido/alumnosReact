import mysql from "mysql2/promise"

export type Alumno = {
    dni: string,
    nombre: string,
    apellido1: string,
    apellido2: string,
    f_nacimiento: Date,    
    especialidad: string,
    curso: number,
    pagado: boolean
}

export async function abrirConexion() {
    return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,    
    });
}


export async function obtenerAlumnos(){
    
    const conexion = await abrirConexion();

    const [filas] = await conexion.execute(
        "SELECT * FROM alumnos ORDER BY apellido1 ASC"
    );

    await conexion.end();

    return filas as Alumno[];


}

export async function insertarAlumno({dni, nombre, apellido1, apellido2, f_nacimiento, especialidad, curso, pagado} : Alumno){

    const conexion = await abrirConexion();

    await conexion.execute(
        "INSERT INTO alumnos (dni, nombre, apellido1, apellido2, f_nacimiento, especialidad, curso, pagado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [dni, nombre, apellido1, apellido2, f_nacimiento, especialidad, curso, pagado]
    )

    await conexion.end();
}

export async function borrarAlumno(dni : string){

    const conexion = await abrirConexion();

    await conexion.execute(
        "DELETE FROM alumnos WHERE dni = ?",
        [dni]
    )

    await conexion.end();
}

export async function editarAlumno({nombre, apellido1, apellido2, f_nacimiento, especialidad, curso, pagado, dni} : Alumno){

    const conexion = await abrirConexion();

    await conexion.execute(
        "UPDATE alumnos SET nombre = ?, apellido1 = ?, apellido2 = ?, f_nacimiento = ?, especialidad = ?, curso = ?, pagado = ? WHERE dni = ?",
        [nombre, apellido1, apellido2, f_nacimiento, especialidad, curso, pagado, dni]
    )

    await conexion.end();
}








