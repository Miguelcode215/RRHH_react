import { useEffect, useState } from 'react';
import { getCliente } from '../services/clienteService';
import DataTableCliente from '../components/DataTableCliente';

const ClienteListar = () => {
  const [cliente, setCliente] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCliente()
      .then(data => {
        setCliente(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Listado de Clientes</h2>
      {loading ? <p>Cargando Clientes...</p> : <DataTableCliente data={cliente} />}
    </div>
  );
};

export default ClienteListar;
