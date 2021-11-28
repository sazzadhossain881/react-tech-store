//login user

import { url } from "../utils/URL";
import axios from 'axios';

async function loginUser({ email, password }) {
    const response = await axios.post(`${url}/auth/local`, {
        identifier: email, password
    }).catch(error => console.log(error));
    return response;
}

export default loginUser;


