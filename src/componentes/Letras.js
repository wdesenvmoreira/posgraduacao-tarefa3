import React , { useState, useEffect } from 'react'

function Letras(props) {
  const [letras, setLetras] = useState('');


  useEffect(()=>{
    
  },[letras])


function handlechangeLetras(event){
          setLetras(event.target.value);
           event.preventDefault();
           
      }
    return (
      <div className="">
          Texto: <input type='text' className="" onChange={handlechangeLetras}/>
    <p>Esse texto contem {letras.length} caracteres</p>
      </div>
    );
  }
  
  export default Letras;