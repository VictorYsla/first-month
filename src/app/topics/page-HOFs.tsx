export default function Home() {
  // function saludar(nombre: string) {
  //   return `Hola, ${nombre}`;
  // }

  // function procesarEntradaUsuario(callback: (nombre: string) => string) {
  //   const nombre = "Juan";
  //   return callback(nombre);
  // }

  // console.log(procesarEntradaUsuario(saludar));
  // Salida: "Hola, Juan"

  //Arrow functions aquí abajo

  const procesarEntradaUsuario = (callback: (nombre: string) => string) => {
    const nombre = "Jean";
    return callback(nombre);
  };

  const saludar = (nombre: string) => {
    return `Hola, ${nombre}`;
  };

  console.log(procesarEntradaUsuario(saludar));

  function crearMultiplicador(factor: number) {
    return function (numero: number) {
      return numero * factor;
    };
  }

  const multiplicarPorDos = crearMultiplicador(2); // return ghost function
  console.log(multiplicarPorDos(5));
  // Salida: 10

  const createMultiplier = (factor: number) => {
    return (number: number) => {
      return number * factor;
    };
  };

  const multiplyByTwo = createMultiplier(2); // return ghost function

  console.log(multiplyByTwo(10));

  //KeyNotes: Callback, HOFs, TypeScript, ghost function, parameter, HTML (HyperText Markup Language)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span>Hello name congrats!</span>
    </div>
  );
}
