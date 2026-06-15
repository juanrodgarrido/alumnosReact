type Button = {
  texto: string;
  type? : "submit" | "reset" | "button",
  onClick? : () => void,
  activo? : boolean
};

export default function Button({ texto, type = "button" , onClick, activo }: Button) { //Así usamos button por defecto en caso de que no pasemos ningun prop
  return (
    <button type={type} onClick={onClick} className={`text-white cursor-pointer p-2.5 rounded-lg transition-colors ${activo ? "bg-blue-900 hover" : "bg-blue-600 hover:bg-blue-800"}`}>
      {texto}
    </button>
  );
}
