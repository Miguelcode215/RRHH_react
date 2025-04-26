import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="d-flex">
    {/* Sidebar */}
    <div className="bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
      <div className="p-3">
        <h4>APP RR.HH</h4>
      </div>
      <ul className="nav flex-column p-3">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/empleado">Empleados</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/cliente">Clientes</Link>
        </li>
      </ul>
    </div>

    {/* Contenido principal */}
    <div className="flex-grow-1 p-3">
      {/* Aquí se renderiza el contenido de las rutas */}
    </div>
  </div>
  );
};

export default Navbar;
