import React, { useState } from 'react'
import TTPlayerService from '../services/TTPlayerService';
import { useNavigate } from 'react-router-dom';

const AddTTPlayer = () => {
	
	const [TTPlayer, setTTPlayer] = useState({
		id: "",
		firstName: "",
		lastName: "",
		email: ""
	});

	const handleInputChange = e => {
		const value = e.target.value;
		//destructure entire object with existing values alongside update target.name
		setTTPlayer({...TTPlayer, [e.target.name]: value});
	}

	const navigate = useNavigate();

	const createTTPlayer = e => {
		e.preventDefault();
		TTPlayerService
			.createTTPlayer(TTPlayer)
			.then(response => {
				// console.log(response.data);
				navigate("/playerList")
			}).catch((err) => {
				console.log(err);
			})	
	}

	const handleOnClickClear = e => {
		e.preventDefault();
		setTTPlayer({
			id: "",
			firstName: "",
			lastName: "",
			email: ""
		});
	}

  return ( 
	<div className='flex max-w-2xl shadow border-b mx-auto'>
		<div className='px-8 py-8'>
			<div className='font-thin-text-2xl tracking-wider'>
				<h1>Add Participant</h1>
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>First Name</label>
				<input 
				type='text'
				name='firstName'
				className='h-10 w-96 border mt-2 px-2 py-2'
				value={TTPlayer.firstName}
				onChange={(e) => handleInputChange(e)}
				></input>
			</div> 
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>Last Name</label>
				<input 
				type='text'
				name='lastName'
				className='h-10 w-96 border mt-2 px-2 py-2'
				value={TTPlayer.lastName}
				onChange={(e) => handleInputChange(e)}
				></input>
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>Email</label>
				<input 
				type='text' 
				name='email'
				value={TTPlayer.email}
				className='h-10 w-96 border mt-2 px-2 py-2'
				onChange={(e) => handleInputChange(e)}
				></input>
			</div>
			<div className='items-center justify-center h-14 w-full space-x-4 my-4 pt-5'>
				<button 
					className='rounded text-white font-semibold bg-blue-300 hover:bg-blue-600 py-2 px-6'
					onClick={createTTPlayer}
				>
					Create
				</button>
				<button 
					className='rounded text-white font-semibold bg-red-300 hover:bg-red-600 py-2 px-6'
					onClick={handleOnClickClear}
					>
					Clear
				</button>
			</div>
		</div>
	</div>
  )
}

export default AddTTPlayer