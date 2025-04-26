import axios from "axios";

const URLBACKEND = 'http://localhost:8080/api/cliente';

export const getCliente = async () =>{
    const response = await axios.get(URLBACKEND);
    return response.data;
}