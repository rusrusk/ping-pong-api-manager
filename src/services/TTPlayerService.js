import axios from "axios"

const ROOT_URL = process.env.REACT_APP_BASE_URL


const createTTPlayer = (TTPlayer) => {
	return axios
			.post(`${ROOT_URL}/add`, TTPlayer);
}

const getTTPlayer = id => {
	return axios
			.get(`${ROOT_URL}/player/${id}`);
}

const getAllTTPlayers = () => {
	return axios
			.get(`${ROOT_URL}/players`);
}

const deleteTTPlayer = (id) => {
	
	return axios
			.delete(`${ROOT_URL}/delete/${id}`);
}


const updateTTPlayer = (id, newTTPlayer) => {
	return axios
			.put(`${ROOT_URL}/update/${id}`, newTTPlayer);
}



export default {createTTPlayer, getTTPlayer, getAllTTPlayers, deleteTTPlayer, updateTTPlayer}