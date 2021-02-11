import React from 'react';
import Input from '../components/forms/input';
import Button from '../components/forms/button';
import styles from './cnpjinfo.module.css';
import Search from '../imgs/search.jpg';



export const CnpjInfo = () => {
const [dataInput , setDataInput] = React.useState('');
const [dataResponse , setDataResponse] = React.useState('');
  async function handleSubmit(e){
    e.preventDefault();
    const URL = 'http://127.0.0.1:7360/cnpj/get/'
    const getData = await fetch(URL + dataInput)
    const data = await getData.json()
    setDataResponse(data)
  } 
  
  return (
    <div >
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.text}> <span className={styles.title}>Nome:</span> {dataResponse.nome}</p>
        <p className={styles.text}><span className={styles.title}>Nome Fantasia:</span>  {dataResponse.fantasia}</p>
        <p className={styles.text}><span className={styles.title}>CNPJ:</span>  {dataResponse.cnpj}</p>
        <Input 
            type='text'
            value={dataInput}
            onChange={({target})=>setDataInput(target.value)}
        />
          <Button >Buscar</Button>
      </form>
      <img src={Search} className={styles.imagem} />   
       </div>
  )}

export default CnpjInfo
