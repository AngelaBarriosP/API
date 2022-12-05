import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Registro (props){
    return(
        <Form>
            <h1 className='pb-5'>{props.title}</h1>
            
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="input" placeholder="Ingresar nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="documento">
        <Form.Label>Documento</Form.Label>
        <Form.Control type="input" placeholder="Ingresar documento" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="usuario">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="input" placeholder="Ingresar usuario" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="input" placeholder="Ingresa email" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>

    )
}
export default Registro