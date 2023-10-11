import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login'


import {BrowserRouter, Routes, Route, Redirect} from 'react-router-dom'
import Register from './pages/Register';

function App() {

  return (
 
       <div className="App">
          {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/register/" element={<Register />} />
            </Routes>
          </BrowserRouter> */}
          <BrowseRouter>
            <switch>
                <Route path="/" component={<Home />} />
                <Route path="/login/" component={<Login />} />
                <Route path="/register/" component={<Register />} />

                <Redirect to="/" />
            </switch>
          </BrowseRouter>
        </div>

  );
}

export default App;
