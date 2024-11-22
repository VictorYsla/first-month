export default function Home() {
  const name = "Fernando"; // const + name + value // block scope
  let lastName = "Victor"; // let + name + value // block scope
  lastName = "Gallardo Ysla";
  let years = "Veinte y seis"; // var + name + value // function scope
  years = "Veinte y siete";

  //"" --> comillas dobles
  //'' --> comillas simples
  //`` --> comillas inclinadas // template strings // te permite jugar con el código dentro de un string (texto)

  // const addYears = "Mi edad es 5 +1";
  // const circleDimentions = "El tamaño de círculo es 3.14 + 0.0016";
  // const ducksAmounts = `El número de patos es ${10 + 15}`;

  // console.log({ addYears, circleDimentions, ducksAmounts });

  years = "Veinte y seis";

  const getNumericYears = (param) => {
    // parametro (param)
    //arrow function
    console.log("Es true?:", param === "Veinte y seis");
    `*****Ejercio en clase*****`;
    //Encontrar un manera de evitar que la función getNumericYears devuelva valores que no sean strings
    if (param === "Veinte y seis") {
      // Condicionales
      return 26;
    } else {
      return param;
    }
  };

  //getNumericYears() // Para ejecutar la función debemos llamarlo con el nombre + paréntesis

  console.log(
    `Mi nombre es ${name} mi apellido es ${lastName} y mi edad es ${getNumericYears(
      years
    )}`
  );

  //KeyNotes: CamelCase, Condicionales , buenas prácticas

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span>Hello name congrats!</span>
    </div>
  );
}
