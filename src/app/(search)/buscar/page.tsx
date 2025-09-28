'use client'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SearchMovie(){
	const [inputText, setInputText] = useState<string>('')

	const handleOnClick = async () => {
		console.log(inputText)
		try {
			const response = await fetch(`/api/search?movie_name=${inputText}`)

			const data = await response.json()


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
			<div className="flex flex-wrap gap-5 justify-center p-5">
				{/*movies.map((movie, i) => {
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
				)})*/}
			</div>
		</div>
	)
}