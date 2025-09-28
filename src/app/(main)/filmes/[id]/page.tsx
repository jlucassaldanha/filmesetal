import type { DetailsType } from "@/types/api";
import Image from "next/image";
import { Star, ArrowLeft } from 'lucide-react';
import Link from "next/link";

export const dynamic = 'force-dynamic';

async function getMovieDetails(id: string) {
	const api_key = process.env.API_KEY
	const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR`)

	 if (!response.ok) {
		throw new Error("Failed to fetch movie details");
	}
	const data = await response.json()

  	return data
}

export default async function Movie({ params }: {params: { id: string }}){
	const { id } = await params
	const details: DetailsType = await getMovieDetails(id)
	return (
		<div className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center">
			<section className="flex gap-5 border-2 border-gray-500 rounded-3xl overflow-auto bg-gray-700 max-w-[1000px] min-w-[700px]">
				<Image 
					src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} 
					alt="Poster do filme" 
					width={500} 
					height={750} 
				/>
				<div className="flex flex-col justify-between">
					<div className="my-5">
						<div className="flex flex-col gap-1 font-bold">
							<div className="text-3xl">
								{details.title}
							</div>
							<div className="px-3">
								Lançamento: {details.release_date}
								<div className="flex items-center gap-2 text-amber-500 font-bold">
									<Star size={15} fill="orange"/>
									{details.vote_average}
								</div>
							</div>
						</div>
						<div className="p-3">
							{details.overview}
						</div>
					</div>
					<Link href="/" className="flex justify-center items-center gap-3">
						<ArrowLeft />
						Voltar
					</Link>
				</div>
			</section>
		</div>
	)
}