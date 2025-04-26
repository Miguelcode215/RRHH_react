const DataTableCliente = ({ data }) => {
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {data.map(cliente => (
            <tr key={cliente.cliente_id}>
              <td>{cliente.cliente_id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellidos}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.direccion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default DataTableCliente;
  