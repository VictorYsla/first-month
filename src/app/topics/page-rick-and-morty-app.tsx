"use client";

import Link from "next/link";
import GitHubSvg from "../assets/svgs/github-logo.svg";
import MagnificantGlasses from "../assets/svgs/magnificant-glasses.svg";
import ArrowLeftSvg from "../assets/svgs/arrow-left.svg";
import ArrowRigthSvg from "../assets/svgs/arrow-rigth.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { CharactersResponseTypes, Characters } from "./types";
import CharacterCard from "./components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState("");
  const [page, setPage] = useState(1);

  //valores similares a false: false, ", null, undifined, 0

  /**
   * Añadir paginación
   * Identificar como pasarle el valor para seleccionar la página adecuada
   * Añadir el parámetro al API "?page=NUMERO-AQUÍ"
   * Verificar que la paginación funcione
   * Utilizar template strings para hacer dinámica la paginación
   * Añadir la variable al template string
   * Pasarle el parámetro page a la función getRickAndMortyCharacters
   * Probar si los SVGS utilizados aceptan la propiedad onClick
   * Funcionó, entonces, colocar la función getRickAndMortyCharacters con su respectivo parámetro, esto para pruebas
   * Añadir un estado(useState) "page" para hacer dinámica la paginación
   * Colocar el setPage en los SVGS correspondientes
   * Colocar page en el useEffect correspondiente
   * Hacer que la flecha left se pinte de gris y no reste valor a page si es igual a 1
   * Hacer que la flecha right no sume si es la última página
   */

  //Llamado al API para obtener data
  const getRickAndMortyCharacters = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );

      const charactersResponse: CharactersResponseTypes = response.data;

      setCharacters(charactersResponse.results);
      console.log({ charactersResponse });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setHasError("Ups algo falló");
    }
  };

  // const usingMap = [1, 2, 3, 4, 5];

  // const addOne = usingMap.map((item) => item + 1);

  // console.log("Array sumado:", addOne);

  useEffect(() => {
    console.log("results:", characters);
    getRickAndMortyCharacters();
    console.log({ page });
  }, [page]);

  //KeyNotes: Desestructuración,Iteración, spreed, paginación , .length

  // const firstCharacter = {
  //   name: "Popeye",
  //   status: "alegre",
  //   species: "humano",
  //   gender: "pansexual",
  //   location: "Océano",
  //   image: "",
  // };

  // console.log("Cuál es el nombre de mi personaje:", firstCharacter.name); //Iteración
  // console.log("Imprimiento mi primer objeto:", {
  //   name: "Popeye",
  //   status: "alegre",
  //   species: "humano",
  //   gender: "pansexual",
  //   location: "Océano",
  //   image: "",
  // });
  // console.log("Desestructurando mi primer objeto:", { ...firstCharacter });

  //if-else
  const firstNumber = 1;
  const secondNumber = 2;
  const condition = secondNumber > firstNumber; // true || false
  const isGreaterThan = `${secondNumber} es mayor a ${firstNumber}`;
  const isLessThan = `${secondNumber} no es mayor a ${firstNumber}`;

  const ifElse = () => {
    if (condition) {
      return isGreaterThan;
    } else {
      return isLessThan;
    }
  };
  //Operado ternario
  //condition? a : b

  const operatorResult = condition ? isGreaterThan : isLessThan;

  console.log({ operatorResult });
  console.log({ ifElse: ifElse() });

  return (
    <div className="bg-white min-h-screen">
      {/* Modal de carga */}

      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="text-white flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
            <p className="mt-4 text-xl font-semibold">Cargando...</p>
          </div>
        </div>
      )}

      <div className="flex h-16 items-center justify-between px-4 py-12 md:px-6 bg-[rgb(241,245,249)] bg-opacity-75 rounded-lg shadow-lg border-b-4 border-transparent hover:border-b-gray-300">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-semibold">
            <span className="text-green-400">Rick </span>
            <span className="text-black"> and </span>
            <span className="text-yellow-400">Morty</span>
            <span className="text-black"> App</span>
          </span>
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 hover:bg-gray-100"
        >
          <GitHubSvg className="w-10 h-10 fill-black lg:w-12 lg:h-12" />
          <span className="sr-only">GitHub</span>
        </Link>
      </div>
      <div className="flex items-center h-16 justify-center">
        <div className="relative flex items-center  ">
          <input
            placeholder="Name of character..."
            className="pl-4 pr-10 py-2 w-[384px] border-[3px] border-green-500 focus:border-blue-500  outline-none text-black h-11 placeholder:italic placeholder:font-semibold  p-2 "
          />
          <MagnificantGlasses className="absolute right-3 fill-black w-18 h-18" />
        </div>
      </div>
      <div className="flex justify-between px-32 mb-6">
        <ArrowLeftSvg
          className={`${
            page === 1 ? "bg-gray-500" : "bg-blue-500"
          } fill-white h-18 w-36`}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        />
        <ArrowRigthSvg
          className={`${
            characters.length < 20 ? "bg-gray-500" : "bg-blue-500"
          } fill-white h-18 w-36`}
          onClick={() => {
            if (characters.length === 20) {
              setPage(page + 1);
            }
          }}
        />
      </div>
      {hasError && (
        <div className="w-full flex justify-center">
          <span className="text-red-500 text-lg">{hasError}</span>
        </div>
      )}
      <div className="max-w-full p-4 flex flex-col md:flex-row md:flex-wrap space-y-6 md:space-y-0 gap-8 items-center md:justify-center">
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
}
