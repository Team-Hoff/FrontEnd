import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Program from './Pages/Program';
import Course from './Pages/Course';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>

    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home/:id" element={<Program/>}/>
        <Route path="/home/:id/:id" element={<Course/>}/>
      </Routes>
    </Router>

    
    </div>


 )
}

export default App;
