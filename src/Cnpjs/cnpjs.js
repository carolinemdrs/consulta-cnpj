import React from 'react';

export const Cnpjs = () => {
  const [dataCnpj, setDataCnpj] = React.useState([]);

  async function handleSubmitAll(e){
    e.preventDefault();
    const getData = await fetch('http://127.0.0.1:7360/cnpj/get-all')
    const data = await getData.json()
    console.log(data);
    setDataCnpj(data)
  } 


  return ( 
    <div>
      <form onSubmit={handleSubmitAll} >
       <button>CNPJS todos</button>
      </form>
      {dataCnpj.map(cnpj => (<ul><li>{cnpj}</li></ul> ))}
    </div>
  )
}
export default Cnpjs