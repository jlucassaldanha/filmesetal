'use client'
import { MoviesList } from "@/components/container/MoviesList";
import { Input } from "@/components/ui/input";
import { MovieType } from "@/types/api";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SearchMovie(){
	const [inputText, setInputText] = useState<string>('')
	const [moviesList, setMoviesList] = useState<MovieType[]>()

	const handleOnClick = async () => {
		console.log(inputText)
		try {
			const response = await fetch(`/api/search?movie_name=${inputText}`)
			const data = await response.json()
			setMoviesList(data.results)
		} catch (error) {
			console.log(error)
		}
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value)
	}

	return (
		<div className="bg-gray-800 text-white min-h-screen">
			<header className="bg-gray-800 text-white p-4 border-b-2 border-black flex items-center justify-center gap-5">
				<Link href="/" className="flex justify-center items-center gap-3">
					<ArrowLeft />
					Voltar
				</Link>
				<Input 
					className="max-w-[600px] bg-gray-700" 
					value={inputText} onChange={handleChange}
				/>
				<button 
					className="text-2xl flex items-center gap-2 cursor-pointer"
					onClick={handleOnClick}
				>
					<Search />
					Buscar
				</button>
			</header>
			{moviesList !== undefined ? 
				<MoviesList movies={moviesList}/> 
				: (
				<div className="flex justify-center items-center text-3xl p-8">
					Os resultados da pesquisa aparecerão aqui
				</div>
			)}
		</div>
	)
}