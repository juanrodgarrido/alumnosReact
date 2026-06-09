type Button = {
  texto: string;
};

export default function Button({ texto }: Button) {
  return (
    <button className="bg-blue-600 cursor-pointer p-2.5 rounded-lg transition-colors hover:bg-blue-800 ">
      {texto}
    </button>
  );
}
