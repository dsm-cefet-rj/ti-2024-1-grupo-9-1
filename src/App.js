import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import UR from "./components/UR";
import NU from "./components/NU";
import Footer from "./components/Footer";
import Perfil from "./components/Perfil";
import Login from "./components/Login"
import Cadastro from "./components/Cadastro"


function App() {
  return (
      <div className="container">
          <Routes>
              <Route path='/' element={[<Navbar/>,<Home/>,<UR/>,<NU/>,<Footer/>]}/>
              <Route path='/perfil' element={[<Navbar/>,<Perfil/>]}/>
              <Route path='/login' element={[<Navbar/>,<Login/>]}/>
              <Route path='/cadastro' element={[<Navbar/>,<Cadastro/>]}/>
          </Routes>
      </div>

  );
}

export default App;
