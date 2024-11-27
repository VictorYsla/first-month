"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const greets = document.getElementById("pollo");
    console.log({ greetsContent: greets?.textContent });
    greets.textContent = "Hello Jean, congrats!!!";
    console.log({ greetsContent: greets?.textContent });
  }, []);

  // KeyNotes HTML, DOM
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span id="pollo">Hello name congrats!</span>
    </div>
  );
}
