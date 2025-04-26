import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Nabvar";
import AppRouter from "./routes/AppRouter";


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Navbar/>
        <div className="flex-grow-1 p-3">
          <AppRouter/>
        </div>
      </div>
    </Router>
  );
  
}

export default App;
