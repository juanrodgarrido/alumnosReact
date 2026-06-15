type Box = {
    children: React.ReactNode //Tipo de React que renderiza todo lo que esté en la pantalla
    
}

export default function Box({children} : Box){

    return(
        <div className = "flex flex-col w-1/4 h-[600px] overflow-y-auto items-center justify-self-center bg-white rounded-xl p-5 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
            {children}
        </div>
    )
}