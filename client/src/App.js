
import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Start from './Components/Start';
import Home from './Components/Home'
import PrivateRoute from './PrivateRoute'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Start/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element = {
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;