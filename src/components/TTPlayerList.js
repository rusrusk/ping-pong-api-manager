import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TTPlayerService from '../services/TTPlayerService';
import TTPlayer from './TTPlayer';

const TTPlayerList = () => {
	//get all content from db and set to state
	const [TTPlayers, setTTPlayers] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	//defines the waiting state until loading state is changed 

	useEffect(() => {
		const fetchingContent = async () => {
			setIsLoading(false)
			try {
				const response = await TTPlayerService.getAllTTPlayers();
				setTTPlayers(response.data) 
			} catch(err) {
				console.log(err);
			}
			setIsLoading(true);
		}
		fetchingContent();
	}, [])

	const navigate = useNavigate();

	const deleteTTPlayer = (e, id) => {
		e.preventDefault();
		TTPlayerService.deleteTTPlayer(id)
			.then((res) => {
				console.log(res.data);
				if (TTPlayers) {
					setTTPlayers((prevItem) => {
						return prevItem.filter((TTPlayer) => TTPlayer.id !== id);
					})
				}
			})

		
	}

  return (
	<div className='container mx-auto my-10'>
		<div className='h-15'>
			<button
			onClick={() => navigate("/addPlayer")} 
			className='rounded bg-slate-500 text-blue-100 py-2 px-6 font-semibold hover:text-blue-900'>
				Add Table Tennis Player
			</button>
		</div>
		<div className='flex shadow border-b'>
			<table className='min-w-full'>
				<thead className='bg-gray-100'>
					<tr>
						<th className='text-left font-medium text-gray-400 uppercase tracking-wider py-3 px-5'>
							First Name
						</th>
						<th className='text-left font-medium text-gray-400 uppercase tracking-wider py-3 px-5'>
							Last Name
						</th>
						<th className='text-left font-medium text-gray-400 uppercase tracking-wider py-3 px-5'>
							Email Id
						</th>
						<th className='text-right font-medium text-gray-400 uppercase tracking-wider py-3 px-5'>
							Actions
						</th>
					</tr>
				</thead>
				{isLoading && (
				<tbody className='bg-white'>
					{TTPlayers.map(player => (
						<TTPlayer 
						key={player.id} 
						deleteTTPlayer={deleteTTPlayer} 
						player={player}
						/>
					))}
				</tbody>
				)}
			</table>
		</div>

	</div>
  )
}

export default TTPlayerList