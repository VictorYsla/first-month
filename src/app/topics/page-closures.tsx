export default function Home() {
  // función padre
  const createCounter = () => {
    let counter = 0; //0 //1 //2 //3 ...
    // función hijo
    const increase = () => {
      counter++; // +1 ==> counter = counter +1
      return counter; // 1 //2 //3 ...
    };
    return increase; // ()=> { counter++; return counter;  } y también te retorna el entorno que tiene createCounter
  };

  const counter = createCounter(); //1
  

  // console.log(counter); //1
  // console.log(counter); //1
  // console.log(counter); //1 

  console.log(counter()); //1
  // ()=> { counter++ ; return counter ;  } // Cuanto en el entorno counter es 0 ==> retorna 1

  console.log(counter()); //2
  // ()=> { counter++; return counter;  } // En este segundo entorno, el valor de counter es 1 y esto se puede porque mantiene un entorno

  console.log(counter()); //3
  // ()=> { counter++; return counter;  } // counter es 2 ==> 3
  


  //KeyNote: entorno = Variables y contexto
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span>Hello name congrats!</span>
    </div>
  );
}
