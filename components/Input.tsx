type Input = {
    type: string,
    placeholder: string
}


export default function Input({type, placeholder} : Input){

    return(
        <input type={type} className="text-black w-full mb-2 rounded-lg border border-gray-300 outline-none p-1.5" placeholder={placeholder}></input>
    )
}