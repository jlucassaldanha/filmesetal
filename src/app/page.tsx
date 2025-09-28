import Image from "next/image";
import Link from "next/link";
import { Clapperboard, Search } from 'lucide-react';
import type { MovieType } from "@/types/api";

export const dynamic = 'force-dynamic';

const getMoviesNow = async () => {
  const api_key = process.env.API_KEY
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=pt-BR`)

  const data = await response.json()

  return data.results
} 

export default async function Home() {
  const movies: MovieType[] = await getMoviesNow()

  return (
    <div className="text-white bg-gray-800">
      <header 
        className="bg-gray-800 text-white font-extrabold text-6xl p-4 border-b-2 border-black flex justify-between"
      >
        <div className="flex items-center gap-4">
          <Clapperboard size={50} />
          FILMES&TAL
        </div>
        <div className="flex">
          <Link className="flex gap-3 font-medium items-center text-3xl" href="/buscar">
            <Search size={30} /> 
            Buscar
          </Link>
        </div>
      </header>
      <div className="flex justify-center font-bold text-5xl p-5">
        Filmes em Cartaz
      </div>
      <div className="flex flex-wrap gap-5 justify-center p-5">
        {movies.map((movie, i) => {
          return (
          <Link 
            href={`/filmes/${movie.id}`}
            key={i}
          >
            <div 
              className="flex-col justify-items-center gap-5 border-2 border-gray-500 rounded-3xl max-w-[350px] bg-gray-700 overflow-auto"
              
            >
              <Image 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt="Poster do filme" 
                width={350} 
                height={750} 
              />
              <div className="text-shadow-2xs text-1xl m-5 font-bold">
                {movie.title}
              </div>  
            </div>
          </Link>
        )})}
      </div>
    </div>
  );
}
