import axios from "axios";

export function getToken() {
	return localStorage.getToken('token')
}

export default function() {
	return axios.create({
		baseURL: 'https://guidr-2.herokuapp.com/api/',
		// headers: {
		// 	Authorization: getToken(),
		// },
	})
}