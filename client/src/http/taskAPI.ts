import axios from 'axios';
import { $host } from './index';


export const createTask = async (title: string, date: string) => {
	const response = await $host.post('api/auth/registration', { title, date });
	return response;
};

export const fetchTask = async (title: string, date: string) => {
	const response = await $host.post('api/auth/login', { title, date });
	return response;
};

export const check = async () => {
	const response = await $host.post('api/auth/auth');
	return response;
}