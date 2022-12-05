import React from 'react';
import {Form, Button, Row, Col, Container, Card} from 'react-bootstrap';
import Hora2 from './Time';
import Fecha2 from './Date';
import {useState} from "react";


const FormEdit = () => {
    const [state, setState] = useState({
          editAncho:"",
          editLargo:"",
          editAlto:"",
          editPeso:"",
          editDirRec:"",
          editCiuRec:"",
          editNomDest:"",
          editIdDest:"",
          editDirDest:"",
          editCiuDest:"",

        })
    
    const handleOnChange = ({ target}, attributte) => {
      const value = target.value;
      const cloneState = {...state};
      cloneState[attributte] = value;
      console.log("status =>", state);
      setState(cloneState);
    }
  
  return (
      
    
    <Container>
      <Card border="dark" >
        <Card.Header>
        <Card.Title id="cardT" >GESTION DE PAQUETES - Actualización de Órdenes (Recogida) </Card.Title>
          </Card.Header>
        <Card.Body>
        <Card.Text>
          <Form>
            
            <Form.Group as={Row} className="mb-3 justify-content-center" >
              <Col md="auto">
              <Form.Label> Fecha : <Fecha2/> </Form.Label>
              </Col>                        
              <Col md="auto">
              <Form.Label> Hora : <Hora2/> </Form.Label>
              </Col>
              
              </Form.Group>
            <Form.Group as={Row} className="mb-3 justify-content-center" >
              <Form.Label column md="auto">Ancho (mts):</Form.Label>
              <Col md="1">
              <Form.Control placeholder="00,00" type="text" value={state.editAncho} onChange={(event)=> handleOnChange(event, "editAncho") } />
              </Col>
              <Form.Label column md="auto">Largo (mts):</Form.Label>
              <Col md="1">
              <Form.Control placeholder="00,00" type="text" value={state.editLargo} onChange={(event)=> handleOnChange(event, "editLargo") } />
              </Col>
              <Form.Label column md="auto">Alto (mts):</Form.Label>
              <Col md="1">
              <Form.Control placeholder="00,00" type="text" value={state.editAlto} onChange={(event)=> handleOnChange(event, "editAlto") } />
              </Col>
            </Form.Group>
          
          
            <Form.Group as={Row} className="mb-4 align-items-center justify-content-center" >
              <Form.Label column md="auto">Peso (grs):</Form.Label>
              <Col md="1">
              <Form.Control placeholder="00,00" type="text" value={state.editPeso} onChange={(event)=> handleOnChange(event, "editPeso") }/>
              </Col>
              <Form.Label column md="auto">Mercancía delicada</Form.Label>
              <Col md="auto">
              <Form.Check id="editMDel" inline/>
              </Col>
              <Form.Label column md="auto">Estado</Form.Label>
              <Col md="auto">
              <Form.Select>
                <option value="Guardado">Guardado</option>
                <option value="Cancelado">Cancelado</option>
              </Form.Select>
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" >
              <Form.Label column md="2">Dirección de recogida</Form.Label>
              <Col md="6">
              <Form.Control type="text" value={state.editDirRec} onChange={(event)=> handleOnChange(event, "editDirRec") }  />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" >
              <Form.Label column md="2">Ciudad de recogida</Form.Label>
              <Col md="6">
              <Form.Control type="text" value={state.editCiuRec} onChange={(event)=> handleOnChange(event, "editCiuRec") } />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" >
              <Form.Label column md="auto">Nombre del destinatario</Form.Label>
              <Col md="6">
              <Form.Control type="text" value={state.editNomDest} onChange={(event)=> handleOnChange(event, "editNomDest") } />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" >
              <Form.Label column md="auto">Cédula/Nit del destinatario</Form.Label>
              <Col md="6">
              <Form.Control type="text" value={state.editIdDest} onChange={(event)=> handleOnChange(event, "editIdDest") } />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" >
              <Form.Label column md="auto">Dirección de entrega</Form.Label>
              <Col md="6">
              <Form.Control type="text" value={state.editDirDest} onChange={(event)=> handleOnChange(event, "editDirDest") } />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" >
              <Form.Label column md="auto">Ciudad de entrega</Form.Label>
              <Col md="6">
              <Form.Control type="text" value={state.editCiuDest} onChange={(event)=> handleOnChange(event, "editCiuDest") } />
              </Col>
            </Form.Group>
            <fieldset>
              <Row className="mb-4 justify-content-end">
                <Col md="auto">
                  <Button href="/order-list" type="cancelar">Cancelar</Button>
                </Col>
                <Col md="auto">
                  <Button href="/order-list" type="actualizar">Actualizar Orden</Button>
                </Col>
              </Row>
            </fieldset>
              
      </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    
    
  );
}

export default FormEdit;