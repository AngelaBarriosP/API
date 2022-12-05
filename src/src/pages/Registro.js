import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {useState} from "react";

const FormRegister = () => {
    const [state, setState] = useState({
          userName:"",
          userID:"",
          userNickname:"",
          userPass:"",
          userEmail:"",
        })
    
    const handleOnChange = ({ target}, attributte) => {
      const value = target.value;
      const cloneState = {...state};
      cloneState[attributte] = value;
      console.log("status =>", state);
      setState(cloneState);
    }
      
    
    return(
      <Container>
      <Card border="dark" >
        <Card.Header>
          <Card.Title id="cardT" >REGISTRO DE USUARIO</Card.Title>
        </Card.Header>
        <Card.Body>
        <Card.Text>
        <Form>
          
            
          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formUserName">
            <Form.Label column md="2">Nombre:</Form.Label>
            <Col md="6">
            <Form.Control placeholder="Ingrese su nombre completo" type="text" value={state.userName}  onChange={(event)=> handleOnChange(event, "userName") }  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formUserID">
            <Form.Label column md="2">Documento:</Form.Label>
            <Col md="6">
            <Form.Control placeholder="Ingrese su número de documento" type="text" value={state.userID}  onChange={(event)=> handleOnChange(event, "userID") }/>
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formUserNickname">
            <Form.Label column md="2">Usuario:</Form.Label>
            <Col md="6">
            
            <Form.Control placeholder="Ingrese su usuario" type="text" value={state.userNickname}  onChange={(event)=> handleOnChange(event, "userNickname") } />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formUserPass">
            <Form.Label column md="2">Contraseña:</Form.Label>
            <Col md="6">
            <Form.Control type="password" placeholder="Ingrese su contraseña" value={state.userPass}  onChange={(event)=> handleOnChange(event, "userPass") }/>
            </Col>
          </Form.Group>
                    
          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formUserEmail">
            <Form.Label column md="2">Correo electrónico:</Form.Label>
            <Col md="6">
            <Form.Control placeholder="Ingrese su email" type="text" value={state.userEmail}  onChange={(event)=> handleOnChange(event, "userEmail") }/>
            </Col>
          </Form.Group>
          <Row className="mb-4 justify-content-center">
                <Col md="auto">
                  <Button href="/login" type="cancelar">Cancelar</Button>

                </Col>
                <Col md="auto">
                  <Button href="/login" variant="primary" type="submit">Crear</Button>

                </Col>
            </Row>



    </Form>
    </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    )
}
export default FormRegister;