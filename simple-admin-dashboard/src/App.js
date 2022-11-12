
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Upload from "./AdminDashboard/Upload/Upload";
import Delete from "./AdminDashboard/Delete/DeleteFile";
import DashBoard from "./AdminDashboard/DasbBody/DashBoard";
import Login from "./AdminDashboard/LogIn/Login";


function App() {
  return (
    <>
      
     <Router>

      

       <Routes>
       
            <Route path="/login" element={<DashBoard/>}/>
            <Route path='/dashboard' element={<DashBoard/>}/>
            <Route path='upload' element={<Upload/>}/>
            <Route path='delete' element={<Delete/>}/>
            <Route path="/logout" element={<Login/>}/>
            

       </Routes>

    </Router> 
     
    </>
  );
}

export default App;
