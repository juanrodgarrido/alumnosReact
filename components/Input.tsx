import { twMerge } from "tailwind-merge"; //Utilizo twMerge por si en algún componente quiero modificar el className de este input, lo añadí por una actualización que luego borré pero lo dejo por si acaso

type Input = {
    type: string,
    placeholder?: string,
    name: string,
    required?: boolean,
    pattern?: string,
    maxLength?: number     
    defaultValue? : string   
    disabled? : boolean
    className? : string
    readOnly? : boolean
}


export default function Input({type, placeholder, name, required, pattern, maxLength, defaultValue, disabled, className, readOnly } : Input){

    return(
        <input type={type}  defaultValue = {defaultValue} readOnly = {readOnly} disabled = {disabled} className={twMerge("text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-1.5", className)}  placeholder={placeholder} name = {name} required={required} pattern={pattern} maxLength={maxLength}></input>
    )
}