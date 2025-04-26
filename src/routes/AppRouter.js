import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import EmpleadoListar from '../pages/EmpleadoListar';
import ClienteListar from '../pages/ClienteListar';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/empleado' element={<EmpleadoListar />} />
      <Route path='/cliente' element={< ClienteListar/>}/>
    </Routes>
  );
}

export default AppRouter;
