import React, { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Form, Button, Row, Col, Container, Card} from 'react-bootstrap';
import './style.css';
import Hora2 from './Time';
import Fecha2 from './Date';
import {useState} from "react";



const RegOrden = () => {
  const navigate = useNavigate ();
  const [fecha, setFecha] = useState();
  const [state, setState] = useState({
    newAncho:"",
    newLargo:"",
    newAlto:"",
    newPeso:"",
    newDirRec:"",
    newCiuRec:"",
    newNomDest:"",
    newIdDest:"",
    newDirDest:"",
    newCiuDest:"",
    isDelicated: false,
    })

  const handleOnChange = ({ target}, attributte) => {
    const value = target.value;
    const cloneState = {...state};
    cloneState[attributte] = value;
    console.log("status =>", state);
    setState(cloneState);
  }

  const newOrder = () => {
    axios.post('http://localhost:4000/auth/regOrder', {
      fecha: new Date(fecha), 
      hora: new Date(),
      ancho: state.newAncho,
      largo: state.newLargo,
      alto: state.newAlto,
      peso: state.newPeso,
      mercDel: state.isDelicated,
      direcReco: state.newDirRec,
      ciudadReco: state.newCiuRec,
      nombreDest: state.newNomDest,
      cedulaNitDes: state.newIdDest,
      direcEntr: state.newDirDest,
      ciudadEntr: state.newCiuDest,
      estado: "Guardado",
    })
      .then((res) => {
        navigate("/order-list");
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (

    <Container >
          <Card border="dark" >
        <Card.Header>
        <Card.Title id="cardT" >GESTION DE PAQUETES - Registro de Ordenes (Recogida) </Card.Title>
          </Card.Header>
        <Card.Body>
        <Card.Text>
        <Form >
        <Container >
            <Form.Group id="Form" as={Row} className="mb-4" >
              <Col md="auto">
              <Form.Label> Fecha : <Fecha2 updateDate={setFecha}/> </Form.Label>
              </Col>                        
              <Col md="auto">
              <Form.Label> Hora : <Hora2/> </Form.Label>
              </Col>
              
              </Form.Group>
            <Form.Group id="Form" as={Row} className="mb-4" >
              <Form.Label  id="input2" column md="auto">Ancho (mts):</Form.Label>
              <Col md="auto">
              <Form.Control id="input1" placeholder="00,00" type="text" value={state.newAncho} onChange={(event)=> handleOnChange(event, "newAncho") } />
              </Col>
              <Form.Label id="input2" column md="auto">Largo (mts):</Form.Label>
              <Col md="auto">
              <Form.Control id="input1" placeholder="00,00" type="text" value={state.newLargo} onChange={(event)=> handleOnChange(event, "newLargo") } />
              </Col>
              <Form.Label id="input2" column md="auto">Alto (mts):</Form.Label>
              <Col md="auto">
              <Form.Control id="input1" placeholder="00,00" type="text" value={state.newAlto} onChange={(event)=> handleOnChange(event, "newAlto") } />
              </Col>                                 
              <Form.Label id="input2" column md="auto">Peso (grs):</Form.Label>
              <Col md="auto">
              <Form.Control id="input1" placeholder="00,00" type="text" value={state.newPeso} onChange={(event)=> handleOnChange(event, "newPeso") }/>
              </Col>
              </Form.Group>
              <Form.Group id="Form" as={Row} className="mb-4" >
              <Form.Label column md="auto">Mercancía delicada</Form.Label>
              <Col md="auto">
              <Form.Check type={"checkbox"}>
                <Form.Check.Input
                  type={"checkbox"}
                  onClick={(event) => {
                    setState({
                      ...state,
                      isDelicated: event.target.checked,
                    });
                  }}/>
              </Form.Check>
              </Col>
             
            </Form.Group>

          </Container>
          
          <Container >
            <Form.Group id="Form" as={Row} className="mb-4" >
              <Form.Label column sm="2">Dirección de recogida</Form.Label>
              <Col sm="6">
              <Form.Control type="text" value={state.newDirRec} onChange={(event)=> handleOnChange(event, "newDirRec") }  />
              </Col>
            </Form.Group>
          
            <Form.Group id="Form" as={Row} className="mb-4" >
              <Form.Label column sm="2">Ciudad de recogida</Form.Label>
              <Col sm="6">
              <Form.Control type="text" value={state.newCiuRec} onChange={(event)=> handleOnChange(event, "newCiuRec") } />
              </Col>
            </Form.Group>
          
            <Form.Group id="Form" as={Row} className="mb-4" >
              <Form.Label column sm="2">Nombre del destinatario</Form.Label>
              <Col sm="6">
              <Form.Control type="text" value={state.newNomDest} onChange={(event)=> handleOnChange(event, "newNomDest") } />
              </Col>
            </Form.Group>
          

            <Form.Group id="Form" as={Row} className="mb-4" >
              <Form.Label column sm="2">Cédula/Nit del destinatario</Form.Label>
              <Col sm="6">
              <Form.Control type="text" value={state.newIdDest} onChange={(event)=> handleOnChange(event, "newIdDest") } />
              </Col>
            </Form.Group>
          

            <Form.Group id="Form" as={Row} className="mb-4" >
              <Form.Label column sm="2">Dirección de entrega</Form.Label>
              <Col sm="6">
              <Form.Control type="text" value={state.newDirDest} onChange={(event)=> handleOnChange(event, "newDirDest") } />
              </Col>
            </Form.Group>
          
            <Form.Group id="Form" as={Row} className="mb-4" >
              <Form.Label column sm="2">Ciudad de entrega</Form.Label>
              <Col sm="6">
              <Form.Control type="text" value={state.newCiuDest} onChange={(event)=> handleOnChange(event, "newCiuDest") } />
              </Col>
            </Form.Group>
            <fieldset>
              <Row className="mb-4 justify-content-end">
                <Col md="auto">
                  <Button href="/order-list" type="cancelar">Cancelar</Button>
                </Col>
                <Col md="auto">
                  <Button onClick={newOrder}>Crear Orden</Button>
                </Col>
              </Row>
            </fieldset>
            </Container>
        </Form>
      </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RegOrden;