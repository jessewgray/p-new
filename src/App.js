import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login'


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';

function App() {

  return (
 
       <div className="App">
          <BrowserRouter>
            <Routes>
              <switch>
                <Route path="/" element={<Home />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/register/" element={<Register />} />
              </switch>
              <redirect to='/' />
            </Routes>
          </BrowserRouter>
        </div>

  );
}

export default App;
