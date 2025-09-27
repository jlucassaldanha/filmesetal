import { Clapperboard } from 'lucide-react';

export default function Loading() {
	return (
		<div className="bg-gray-800 text-4xl text-white min-h-screen w-full flex justify-center items-center">
			<div className='flex flex-col gap-3 justify-center items-center'>
				<Clapperboard size={120}className="animate-bounce" />
				<div className='font-bold'>
					Carregando...
				</div>
			</div>
		</div>
	)
}
