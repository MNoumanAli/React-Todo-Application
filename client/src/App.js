
import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Start from './Components/Start';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Start/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;