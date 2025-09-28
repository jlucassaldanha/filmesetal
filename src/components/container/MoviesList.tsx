import { MovieType } from "@/types/api"
import Image from "next/image"
import Link from "next/link"

export function MoviesList({ movies }: { movies: MovieType[] }) {
	return (
		<div className="flex flex-wrap gap-5 justify-center p-5">
			{movies?.map((movie, i) => {
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
	)
}