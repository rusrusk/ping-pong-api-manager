import React from 'react'
import { useNavigate } from 'react-router-dom';



const TTPlayer = (props) => {
	const navigate = useNavigate();

	const updateTTPlayer = (e, id) => {
		e.preventDefault();
		navigate(`/updatePlayer/${id}`)
	}

  return (
	<tr key={props.player.id}>
	<td className='text-left py-4 px-6 whitespace-nowrap'>
		<div className='text-sm text-gray-600'>{props.player.firstName}</div>
	</td>
	<td className='text-left py-4 px-6 whitespace-nowrap'>
		<div className='text-sm text-gray-600'>{props.player.lastName}</div>
	</td>
	<td className='text-left py-4 px-6 whitespace-nowrap'>
		<div className='text-sm text-gray-600'>{props.player.email}</div>
	</td>
	<td className='text-right font-medium text-sm py-4 px-6 whitespace-nowrap'>
		<a 
			onClick={(e, id) => updateTTPlayer(e, props.player.id)}
			className='text-blue-500 hover:text-blue-900 px-5 hover:cursor-pointer'>
			Edit
		</a>
		<a
			onClick={(e, id) => props.deleteTTPlayer(e, props.player.id)}
			className='text-blue-500 hover:text-blue-900 hover:cursor-pointer'>
			Delete
		</a>
	</td>
</tr>
  )
}

export default TTPlayer