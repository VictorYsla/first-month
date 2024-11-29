export default function Home() {
  //Tarea en clase, pasarlo a arrow function
  // function procesoAsincrono(callBack: () => void) {
  //   console.log("Iniciando proceso...");
  //   setTimeout(() => {
  //     console.log("Proceso terminado.");
  //     return callBack(); // Llamamos al callback después de terminar el proceso
  //   }, 10000); // Simulamos un retraso de 2 segundos
  // }

  // procesoAsincrono(() => {
  //   console.log("Ejecutando el callback.");
  // });

  // console.log("Pollo");

  const promise = new Promise((resolve, reject) => {
    const success = false; // Cambiar a false para simular un error
    if (success) {
      resolve("Promesa resuelta con éxito.");
    } else {
      reject("Ocurrió un error.");
    }
  });

  // Consumir la promesa
  promise
    .then((result) => {
      //res
      console.log(result); // Se ejecuta si se resuelve
    })
    .catch((error) => {
      // err
      console.log(error); // Se ejecuta si se rechaza
    });

  //KeyNotes: Promise, then, catch, resolve, reject

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span id="pollo">Hello name congrats!</span>
    </div>
  );
}
