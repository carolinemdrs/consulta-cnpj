import React from 'react';
import Input from '../components/forms/input';
import Button from '../components/forms/button';
import {Link} from 'react-router-dom';
import '../../src/App.css'; 
import styles from '../Login/login.module.css';
import useForm from '../Hooks/useForm';
import { SignUp_POST} from '../api';
import Welcome from '../imgs/signup.jpg';



const SignUp = () => {
  const email = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      const {url, options} = SignUp_POST({
        email:email.value,
        password:password.value
      })
      const response = await fetch(url, options)
      const json = await response.json()
      console.log(json)
      window.sessionStorage.setItem('api_key', json);
    }
  }

  return(
    <div className={styles.container}> 
       <img src={Welcome} className={styles.imagem} /> 
       <div>
        <h1 className={styles.title}> SignUp</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input 
            label='Email'
            type='email'
            name='email'
            {...email}
            />
          <Input 
            label='Senha'
            type='password'
            name='password'
            {...password}
          />
            <Button ><Link to="/cnpjInfo">Cadastrar</Link></Button>
        </form>
      </div>
    </div>
  )
}

export default SignUp