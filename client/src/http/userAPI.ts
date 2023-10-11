import axios from 'axios';
import { $host } from './index';


export const registration = async (email: string, password: string) => {
	const response = await $host.post('api/auth/registration', { email, password });
	return response;
};

export const login = async (email: string, password: string) => {
	const response = await $host.post('api/auth/login', { email, password });
	return response;
};

export const check = async () => {
	const response = await $host.post('api/auth/auth');
	return response;
}