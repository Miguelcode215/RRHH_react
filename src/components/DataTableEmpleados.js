const DataTable = ({ data }) => {
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Area</th>
            <th>Sueldo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(usuario => (
            <tr key={usuario.empleado_id}>
              <td>{usuario.empleado_id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.email}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.area}</td>
              <td>{usuario.sueldo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default DataTable;
  