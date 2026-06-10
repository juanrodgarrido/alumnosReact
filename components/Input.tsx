type Input = {
    type: string,
    placeholder?: string,
    name: string,
    required?: boolean,
    pattern?: string,
    maxLength?: number
}


export default function Input({type, placeholder, name, required, pattern, maxLength} : Input){

    return(
        <input type={type} className="text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-1.5" placeholder={placeholder} name = {name} required={required} pattern={pattern} maxLength={maxLength}></input>
    )
}