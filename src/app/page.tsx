import Image from "next/image";

type MovieType = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

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
    <div>
      <div className="m-4 flex justify-center font-bold text-5xl bg">
        FILMES EM CARTAZ
      </div>
      <div className="flex flex-wrap gap-5 justify-center m-5">
        {movies.map((movie, i) => {
          return (
          <div 
            className="flex-col justify-items-center gap-4 border-2 rounded-3xl p-3 max-w-[300px]"
            key={i}
          >
            <div className="rounded-2xl overflow-auto">
              <Image 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt="Poster do filme" 
                width={300} 
                height={750} 
              />
            </div>
            
            <div className="text-1xl m-5 font-bold">
              {movie.title}
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}
