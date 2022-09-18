
import { BrowserRouter as Router} from 'react-router-dom';


import { AuthProvider } from './Pages/hooks/useAuth';
import ProtectedRoutes from './Pages/utils/ProtectedRoutes'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>
      <AuthProvider>
      <Router>
        <ProtectedRoutes />
      </Router>
      </AuthProvider>


    </div>


  )
}

export default App;
