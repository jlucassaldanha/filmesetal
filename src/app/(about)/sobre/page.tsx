import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
	return (
		<div className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center gap-5">
			<Link href="/" className="flex justify-center items-center gap-3">
				<ArrowLeft />
				Voltar
			</Link>
			<section className="p-5 max-w-[600px]" >
				<h1 className="text-5xl font-bold text-teal-400 flex justify-center mb-3">
					Sobre o Filmes&Tal
				</h1>
				<p className="text-left">
					Bem-vindo ao Filmes&Tal! Este é um projeto prático que desenvolvi para aplicar meus conhecimentos em Next.js. O objetivo foi construir uma aplicação funcional consumindo uma API externa (TMDb) e explorar os principais conceitos do framework.
				</p>
			</section>
			<section>
				<h2 className="text-3xl font-bold flex justify-center mb-3 mt-3">Tecnologias e conceitos trabalhados</h2>
				<ul className="list-disc list-inside text-left max-w-md mx-auto bg-gray-700 p-6 rounded-lg">
					<li>Next.js</li>
					<li>React</li>
					<li>TypeScript</li>
					<li>TailwindCSS</li>
					<li>Consumo de APIs REST</li>
				</ul>
			</section>
			<section className="p-5 max-w-[400px]">
				<h2 className="text-3xl font-semibold text-white mb-4 flex justify-center">
				Sobre mim
				</h2>
				<p className="mb-4 text-left">
					Você pode entrar em contato e acompanhar meu trabalho através dos links abaixo:
				</p>
				<div className="flex justify-center items-center space-x-6">
				<Link 
					href="https://linkedin.com/in/joao-lucas-saldanha" 
					target="_blank" 
					rel="noopener noreferrer" 
					className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
				>
					<FaLinkedin size={24} />
					<span>LinkedIn</span>
				</Link>
				<Link 
					href="https://github.com/jlucassaldanha" 
					target="_blank" 
					rel="noopener noreferrer" 
					className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
				>
					<FaGithub size={24} />
					<span>GitHub</span>
				</Link>
				</div>
			</section>
		</div>
	)
}