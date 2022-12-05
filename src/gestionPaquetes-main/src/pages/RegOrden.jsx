import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './style.css';
import Hora2 from './Time';
import Fecha2 from './Date';
import Card from 'react-bootstrap/Card';




function RegOrden() {
  return (
    
      
        
          
    <Container >
          <Card border="dark" card-expand-lg>
        <Card.Header>
        <Card.Title id="cardT" >GESTION DE PAQUETES - Registro de Ordenes (Recogida) </Card.Title>
          </Card.Header>
        <Card.Body>
        <Card.Text>
        <Form >
        <Container >
            <Form.Group id="Form" as={Row} className="mb-4" controlId="formEditDirRec">
              <Col md="auto">
              <Form.Label> Fecha : <Fecha2/> </Form.Label>
              </Col>                        
              <Col md="auto">
              <Form.Label> Hora : <Hora2/> </Form.Label>
              </Col>
              
              </Form.Group>
            <Form.Group id="Form" as={Row} className="mb-4" controlId="formEditEstado">
              <Form.Label  id="input2" column md="auto">Ancho (mts):</Form.Label>
              <Col md="auto">
              <Form.Control id="input1" placeholder="" />
              </Col>
              <Form.Label id="input2" column md="auto">Largo (mts):</Form.Label>
              <Col md="auto">
              <Form.Control id="input1" placeholder="" />
              </Col>
              <Form.Label id="input2" column md="auto">Alto (mts):</Form.Label>
              <Col md="auto">
              <Form.Control id="input1" placeholder="" />
              </Col>                                 
              <Form.Label id="input2" column md="auto">Peso (grs):</Form.Label>
              <Col md="auto">
              <Form.Control id="input1" placeholder="" />
              </Col>
              </Form.Group>
              <Form.Group id="Form" as={Row} className="mb-4" controlId="formEditEstado">
              <Form.Label column md="auto">Mercancía delicada</Form.Label>
              <Col md="auto">
              <Form.Check id="disabledTextInput" inline/>
              </Col>
             
            </Form.Group>

          </Container>
          
          <Container >
            <Form.Group id="Form" as={Row} className="mb-4" controlId="formEditDirRec">
              <Form.Label column sm="2">Dirección de recogida</Form.Label>
              <Col sm="6">
              <Form.Control id="disabledTextInput" placeholder="" />
              </Col>
            </Form.Group>
          
            <Form.Group id="Form" as={Row} className="mb-4" controlId="formEditCiuRec">
              <Form.Label column sm="2">Ciudad de recogida</Form.Label>
              <Col sm="6">
              <Form.Control id="disabledTextInput" placeholder="" />
              </Col>
            </Form.Group>
          
            <Form.Group id="Form" as={Row} className="mb-4" controlId="formEditNomDest">
              <Form.Label column sm="2">Nombre del destinatario</Form.Label>
              <Col sm="6">
              <Form.Control id="disabledTextInput" placeholder="" />
              </Col>
            </Form.Group>
          

            <Form.Group id="Form" as={Row} className="mb-4" controlId="formEditIdDest">
              <Form.Label column sm="2">Cédula/Nit del destinatario</Form.Label>
              <Col sm="6">
              <Form.Control id="disabledTextInput" placeholder="" />
              </Col>
            </Form.Group>
          

            <Form.Group id="Form" as={Row} className="mb-4" controlId="formEditDirEnt">
              <Form.Label column sm="2">Dirección de entrega</Form.Label>
              <Col sm="6">
              <Form.Control id="disabledTextInput" placeholder="" />
              </Col>
            </Form.Group>
          
            <Form.Group id="Form" as={Row} className="mb-4" controlId="formEditCiuEnt">
              <Form.Label column sm="2">Ciudad de entrega</Form.Label>
              <Col sm="6">
              <Form.Control id="disabledTextInput" placeholder="" />
              </Col>
            </Form.Group>
            <fieldset>
              <Row className="mb-4 justify-content-end">
                <Col md="auto">
                  <Button href="/order-list" type="cancelar">Cancelar</Button>
                </Col>
                <Col md="auto">
                  <Button href="/order-list" type="actualizar">Crear Orden</Button>
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