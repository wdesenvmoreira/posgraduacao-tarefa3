import React , { useState, useEffect } from 'react'
import desconectado from './img/desconectado.png';
import conectado from './img/conectado.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Login(props) {
  const [isLogin, setLogin]     = useState(false);
  const [status, setStatus ]    = useState(desconectado);
  const [mensagem, setMensagem] = useState('Desconectado')
  const [entrasai, setEntraSai] = useState('Entrar')

  useEffect(()=>{
     console.log('isLogin',isLogin)
      if (isLogin) {
          console.log('islogin false: ',isLogin)
         setStatus(conectado)
        setMensagem('Conectado')
      }else{
        console.log('islogin true: ',isLogin)
        setMensagem('Desconectado')
        setStatus(desconectado)
      }
    
  },[isLogin])
  useEffect(()=>{
    if(!isLogin){
      setEntraSai('Entrar')
    }else{
      setEntraSai('Sair')
    }
  
  },[isLogin])

 
      function logar(event){
            console.log('logar')
            console.log('status: ', isLogin)
          setLogin(!isLogin);
           event.preventDefault();
           
      }

    return (
      <div className="">    
        <Container>
          <Row md={4}>
            <Col><img width="50" src={status} onClick={logar}/></Col>
            <Col ><div id='mensagem'>{mensagem}</div> </Col>
    <Col><button type="button" onClick={logar}>{entrasai}</button>  </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Login;