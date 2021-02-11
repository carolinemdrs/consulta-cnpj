import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cnpjs from '../Cnpjs/cnpjs';
import CnpjDetails from '../CnpjDetails/cnpjDetails';
import LoginForm from './loginForm';



export const Login = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='cnpjs' element={<Cnpjs />}/>
        <Route path='detalhes' element={<CnpjDetails />}/>
      </Routes>
    </div>
  )
}

export default Login
