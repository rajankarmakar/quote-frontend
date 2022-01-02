import axios from "axios";

export async function login( email, password ) {
    return axios.post('/api/auth', { email, password }, { headers: { 'content-type': 'application/json' } });
}