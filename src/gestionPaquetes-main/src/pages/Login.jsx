import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {

  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");
  const navigate = useNavigate ();

   function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("Complete Los Datos Faltantes!!");
    }else{
      if(usu === "admin" && pas==="123"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
        navigate("/order-list");
      }else{
        setMiLogin("false");
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
        
      }
    }
  }
 
  
  return (
    

    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
    <form id="form_login">
        <div>

            <h1 style={{color:"blue", textalign:"center"}}>Inicio de sesión</h1>
            <Link className="d-flex justify-content-end" to="/register">Regístrate AQUÍ</Link>
            <Form.Group as={Row} className="mb-4 justify-content-center" >
            <Form.Label column md="2" htmlFor="txtusu">Username</Form.Label>
              <Col md="6">
              <Form.Control id="txtusu" className="form-control" onChange={ (e)=>setUsu(e.target.value) }  required/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4 justify-content-center" >
            <Form.Label column md="2" htmlFor="txtpas">Password</Form.Label>
              <Col md="6">
              <Form.Control type="password" id="txtpas" className="form-control" onChange={ (e)=>setPas(e.target.value) }  required/>
              </Col>
            </Form.Group>
          </div><br/>
        <input type="submit"  className="btn btn-primary" value="Login" onClick={ iniciarSesion }/>
    </form>

    

</div>


  )
}

export default Login;