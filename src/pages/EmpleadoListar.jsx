import { useEffect, useState } from 'react';
import { getUsuarios, guardarEmpleado } from '../services/empleadosService';
import DataTable from '../components/DataTableEmpleados';
import Button from '../components/Button';
import ModalEmpleado from '../components/ModalEmpleado';


const EmpleadoListar = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);

  const mostrarEpleado = () =>{
    setLoading(true);
    getUsuarios()
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
        setLoading(false);
      });
  }

  useEffect(() => {
    mostrarEpleado();
  }, []);

  return (
    <div>
      <h2>Listado de Empleados</h2>
      <Button
      text="Nuevo Empleado"
      onClick={() =>{setMostrarModal(true)}}
      className="mb-3"/>
      {loading ? <p>Cargando Empleados...</p> : <DataTable data={usuarios} />}

      <ModalEmpleado 
      visible={mostrarModal}
      onClose={()=> setMostrarModal(false)}
      onSubmit={async (data)=>{
        await guardarEmpleado(data);
        setMostrarModal(false);
        mostrarEpleado();
      }}/>
    </div>
  );
};

export default EmpleadoListar;
