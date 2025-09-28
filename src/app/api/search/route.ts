import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const movie_name = searchParams.get('movie_name')

		const api_key = process.env.API_KEY
		const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=pt-BR&query=${movie_name}`)

		const data = await response.json()

		return NextResponse.json(data)
	} catch (error) {
		return NextResponse.json({ error: `Falha ao buscar filme\n${error}`}, { status: 500 })
	}
}