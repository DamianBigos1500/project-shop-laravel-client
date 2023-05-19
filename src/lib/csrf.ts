import axios from './axios';

export const custom_csrf = () => axios.get('/getcsrf');

const csrf = () => axios.get('/sanctum/csrf-cookie');
export default csrf;
