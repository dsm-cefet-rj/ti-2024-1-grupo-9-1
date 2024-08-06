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
import Contato from "./components/Contato"
import Receita1 from "./components/Receita1"
import Receita2 from "./components/Receita2"
import Receita3 from "./components/Receita3"


function App() {
  return (
      <div className="container">
          <Routes>
              <Route path='/' element={[<Navbar/>,<Home/>,<UR/>,<Contato/>,<Footer/>]}/>
              <Route path='/perfil' element={[<Navbar/>,<NU/>]}/>
              <Route path='/login' element={[<Navbar/>,<Login/>]}/>
              <Route path='/cadastro' element={[<Navbar/>,<Cadastro/>]}/>
              <Route path='/receita1' element={[<Navbar/>,<Receita1/>, <Footer/>]}/>
              <Route path='/receita2' element={[<Navbar/>,<Receita2/>, <Footer/>]}/>
              <Route path='/receita3' element={[<Navbar/>,<Receita3/>, <Footer/>]}/>
          </Routes>
      </div>

  );
}

export default App;
