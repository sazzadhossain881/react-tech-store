// register user
import axios from 'axios';
import { url } from '../utils/URL';

async function registerUser({ username, email, password }) {
    const response = await axios.post(`${url}/auth/local/register`, {
        username,
        email,
        password
    }).catch(error => console.log(error));
    return response;
}

export default registerUser;
