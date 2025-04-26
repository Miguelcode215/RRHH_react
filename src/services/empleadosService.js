import axios from 'axios';

const API_URL = 'http://localhost:8080/api/empleados'; // Cambia esta URL por la tuya

export const getUsuarios = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarEmpleado = async (data) => {
    const resul = await axios.post(API_URL,data);
    return resul.data;
};
