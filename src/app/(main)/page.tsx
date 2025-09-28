import type { MovieType } from "@/types/api";
import { MoviesList } from "@/components/container/MoviesList";

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
      <div className="flex justify-center font-bold text-5xl p-5">
        Filmes em Cartaz
      </div>
      <MoviesList movies={movies}/>
    </div>
  );
}
