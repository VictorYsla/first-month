export default function Home() {
  const anyFunction = () => {
    return 26
  };
  
  //contentFunction() // undefined() => Error

  // var contentFunction = anyFunction() // 26
  // console.log({contentFunction: contentFunction() }) // 26() => Error

  var contentFunction = anyFunction // contentFunction() => 26 && anyFunction() => 26
  console.log({contentFunction: contentFunction() }) 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span>Hello name congrats!</span>
    </div>
  );
}
