import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Program from './Pages/Program';
import Computer from './Pages/Programs/Computer';
import Electrical from './Pages/Programs/Electrical';
import Course from './Pages/Course';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>
    <Router>
      <Switch>
      <Route path="/home/program/:id">
            <Course/>
      </Route>
      <Route path="/home/electrical">
            <Electrical/>
      </Route>
      <Route path="/home/computer">
            <Computer/>
      </Route>
      <Route path="/home">
            <Home/>
      </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Login />
          </Route>
      
      
      </Switch>
    </Router>
    
    </div>


    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Login} />
    //     <Route path="/signup" component={Signup} />
    //     <Route path="/home" component={Home} />
    //     <Route path="/home/program" component={Program} />
    //     <Route path="/home/program/course/:id" component={Course} />
    //     <Route path="*" component={'NOT FOUND'} />

    //   </Switch>
    // </Router>
  );
}

export default App;
