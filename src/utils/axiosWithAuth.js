import axios from "axios";

export function getToken() {
	// console.log(localStorage.getItem('token'));
	return localStorage.getItem('token')
}

export default function() {
	return axios.create({
		baseURL: 'https://guidr-2.herokuapp.com/api/',
		headers: {
			authorization: getToken(),
		},
	})
}