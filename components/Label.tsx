type Label = {
    texto: string
}


export default function Label({texto} : Label){
    return(
        <label className="text-black">{texto}</label>
    )
}