import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Hora2 from './Time';
import Fecha2 from './Date';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function FormEdit() {
  return (
      
    <>
    <Container>
      <Card border="dark" card-expand-lg>
        <Card.Header>
        <Card.Title id="cardT" >GESTION DE PAQUETES - Actualización de Órdenes (Recogida) </Card.Title>
          </Card.Header>
        <Card.Body>
        <Card.Text>
          <Form>
            <Form.Group as={Row} className="mb-3 justify-content-end" controlId="formEditDim">
              <Col md="auto">
              <Link className="d-flex justify-content-end" to="/Login">Cerrar sesión</Link>
              
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formEditDirRec">
              <Col md="auto">
              <Form.Label> Fecha : <Fecha2/> </Form.Label>
              </Col>                        
              <Col md="auto">
              <Form.Label> Hora : <Hora2/> </Form.Label>
              </Col>
              
              </Form.Group>
            <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formEditDim">
              <Form.Label column md="auto">Ancho (mts):</Form.Label>
              <Col md="1">
              <Form.Control id="editAncho" placeholder="00,00" />
              </Col>
              <Form.Label column md="auto">Largo (mts):</Form.Label>
              <Col md="1">
              <Form.Control id="editLargo" placeholder="00,00" />
              </Col>
              <Form.Label column md="auto">Alto (mts):</Form.Label>
              <Col md="1">
              <Form.Control id="editAlto" placeholder="00,00" />
              </Col>
            </Form.Group>
          
          
            <Form.Group as={Row} className="mb-4 align-items-center justify-content-center" controlId="formEditPME">
              <Form.Label column md="auto">Peso (grs):</Form.Label>
              <Col md="1">
              <Form.Control id="editPeso" placeholder="00,00" />
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
          
            <Form.Group as={Row} className="mb-4 justify-content-center" controlId="formEditDirRec">
              <Form.Label column md="2">Dirección de recogida</Form.Label>
              <Col md="6">
              <Form.Control id="editDirRec" />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" controlId="formEditCiuRec">
              <Form.Label column md="2">Ciudad de recogida</Form.Label>
              <Col md="6">
              <Form.Control id="editCiuRec" />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" controlId="formEditNomDest">
              <Form.Label column md="auto">Nombre del destinatario</Form.Label>
              <Col md="6">
              <Form.Control id="editNomDest" />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" controlId="formEditIdDest">
              <Form.Label column md="auto">Cédula/Nit del destinatario</Form.Label>
              <Col md="6">
              <Form.Control id="editIdDest" />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" controlId="formEditDirEnt">
              <Form.Label column md="auto">Dirección de entrega</Form.Label>
              <Col md="6">
              <Form.Control id="editDirRec" />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-4 justify-content-center" controlId="formEditCiuEnt">
              <Form.Label column md="auto">Ciudad de entrega</Form.Label>
              <Col md="6">
              <Form.Control id="editCiuRec" />
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
    </>
    
  );
}

export default FormEdit;