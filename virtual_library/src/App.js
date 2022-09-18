
import { BrowserRouter as Router} from 'react-router-dom';


import { AuthProvider } from './Pages/hooks/useAuth';
import ProtectedRoutes from './Pages/utils/ProtectedRoutes';
import ScrollToTop from './Components/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>
      <AuthProvider>
      <Router>
        <ScrollToTop/>
        <ProtectedRoutes />
      </Router>
      </AuthProvider>


    </div>


  )
}

export default App;
