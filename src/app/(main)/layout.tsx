import { Clapperboard, Search } from "lucide-react";
import Link from "next/link";

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
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
			{children}
		</div>
	)
}