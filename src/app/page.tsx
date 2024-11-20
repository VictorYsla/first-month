export default function Home() {
  const name = "Fernando"; //string


  const lastName = "Ysla"; // camelCase

  // console.log(name, lastName);

  let fullName = "Victor Fernando Gallardo Ysla";

  // console.log("fullName:", fullName);

  fullName = "VictorYsla";

  // console.log("fullName-Modified:", fullName);

  // var friendName = "Jean";

  // friendName = "Frank";

  //Scope


  let vaca = "muu muu"

  const pollo = "pio pio";
  let chancho = "oing oing";
  


  const firstFunction = () => {


    chancho = "oing oing oing";


    vaca = "muu muuu muuuuuu"

    wind = "flu"

    console.log("Wind before to assigened",wind)
    

    if(true){
      const sun = "ligth"
      const rain = "water"

      var wind = "oxigen"
    }

    console.log("El pollo hace:", pollo);
    console.log("El chancho hace:", chancho);
    console.log("El vaca hace:", vaca);
  };

//++++++++++Redeclarar

  // var cuy = "quiu quiu"

  // var cuy = "muuu oing pio"

  // console.log("Redeclarar cuy: ", cuy)

 //++++++++++Reasignarlo
  let cuy = "quiu quiu"

   cuy = "muuu oing pio"
   
   console.log("Redeclarar cuy: ", cuy)
 


   firstFunction();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span>Hello {name} congrats!</span>
    </div>
  );
}
