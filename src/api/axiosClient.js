import axios from 'axios';
import { getToken } from '../utils';
const token = getToken()
export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
})