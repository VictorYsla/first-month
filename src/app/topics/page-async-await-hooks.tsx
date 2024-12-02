"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAnyCharacters = async () => {
    try {
      const res = await axios.get(
        "https://api.sampleapis.com/simpsons/characters"
      );
      // console.log(res.data[1]);
      setResult(res.data[1]);
      setLoading(false);
      console.log("RESULTADO ADENTROOOOO:", result);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnyCharacters();
  }, []);

  useEffect(() => {
    console.log("RESULTADO AFUERAAA:", result);
  }, [result]); // cada que la variable result cambie se mostrará el log

  /**
   * KeyNotes: Librerías = dependencias, importaciones, axios, API,
   * response o result, iteración, array, objects, operador ternario
   * Hooks, useState, CRUD (create, read, update, delete), reactividad, REACT, renderizar
   * */

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {loading ? (
        <span>Estoy cargandoooooo, espereeeee</span>
      ) : (
        <span>{result.name}</span>
      )}
    </div>
  );
}
