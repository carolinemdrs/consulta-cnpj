import React from 'react';
import './App.css'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Signup from './SignUp/signup';
import Login from './Login/login';
import Cnpjs from './Cnpjs/cnpjs'; 
import CnpjInfo from './CnpjInfo/cnpjInfo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path= "/login/*" element={<Login />} />
          <Route path= "/cnpjs" element={<Cnpjs />} />
          <Route path= "/cnpjInfo" element={<CnpjInfo />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
