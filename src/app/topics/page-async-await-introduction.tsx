"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState(null); // Estado para los resultados
  const [loading, setLoading] = useState(false); // Estado para el loading

  const getRickAndMortyCharacters = async () => {
    setLoading(true); // Inicia el loading
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setResult(response.data.results[0]); // Actualiza el estado con el resultado
      console.log({ result: response.data.results[0] }); // Log dentro de la función
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false); // Termina el loading
      }, 5000);
    }
  };

  // Llamada a la API cuando el componente se monta
  useEffect(() => {
    getRickAndMortyCharacters();
  }, []);

  console.log({ result });

  console.log({ resultOut: result });

  //HistoryKeyNotes: ClassComponents, Functional compomentes
  //KeyNotes: Librerías = dependencias, importaciones, axios, API, response o result, iteración, array, objects
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span id="pollo">Hello name congrats!</span>
      {loading ? (
        <p>Loading...</p>
      ) : (
        result && (
          <div>
            <h2>{result.name}</h2>
            <img src={result.image} alt={result.name} />
          </div>
        )
      )}
    </div>
  );
}
