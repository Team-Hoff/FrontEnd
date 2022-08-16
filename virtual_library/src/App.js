import { StyledContainer } from "./Components/Style";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Program from './Pages/Program';
import Course from './Pages/Course';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Router>
      <Switch>
      <Route path="/home/program/course">
            <Course/>
      </Route>
      <Route path="/home/program">
            <Program/>
      </Route>
      <Route path="/home">
            <Home/>
      </Route>
      <StyledContainer>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </StyledContainer>
      </Switch>
    </Router>
    
    </div>

  );
}

export default App;
