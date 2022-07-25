import { StyledContainer } from "./Components/Style";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Router>
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
    </Router>

  );
}

export default App;
