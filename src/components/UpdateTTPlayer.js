import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TTPlayerService from '../services/TTPlayerService';

const UpdateTTPlayer = () => {

	const {id} = useParams();
	const navigate = useNavigate("");

	const [TTPlayer, setTTPlayer] = useState({
		id: id,
		firstName: "",
		lastName: "",
		email: ""
	})
	

	useEffect(() => {
		const fetchContent = async () => {
			try{
				const response = await TTPlayerService.getTTPlayer(id);
				setTTPlayer(response.data);
			} catch(err) {
				console.log(err);
			}
		}
		fetchContent();
	}, []);

	const updateTTPlayer = (e) => {
		e.preventDefault();
		TTPlayerService
			.updateTTPlayer(id, TTPlayer)
			.then((response) => {
				navigate("/playerList");
			})
			.catch((err) => {
				console.log(err);
			})
	}

	const handleInputChange = e => {
		const value = e.target.value;
		//destructure entire object with existing values alongside update target.name
		setTTPlayer({...TTPlayer, [e.target.name]: value});
	}


  return (
	<div className='flex max-w-2xl shadow border-b mx-auto'>
		<div className='px-8 py-8'>
			<div className='font-thin-text-2xl tracking-wider'>
				<h1>Update TTPlayer</h1>
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
			<div className='items-center justify-center h-14 w -full space-x-4 my-4 pt-5'>
				<button 
					className='rounded text-white font-semibold bg-blue-300 hover:bg-blue-600 py-2 px-6'
					onClick={updateTTPlayer}
				>
					Update
				</button>
				<button 
					className='rounded text-white font-semibold bg-red-300 hover:bg-red-600 py-2 px-6'
					onClick={() => navigate("/TTPlayerList")}
					>
					Cancel
				</button>
			</div>
		</div>
	</div>
  )
}

export default UpdateTTPlayer