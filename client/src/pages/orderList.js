import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Row, Col} from 'react-bootstrap';


const OrderList=()=>{
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState(false);

    useEffect(() => {
        const userEmail = localStorage.getItem("email");
        axios.get('http://localhost:4000/auth/ListOrder')
            .then(res => {
                setOrders(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    const logOut = () => {
        localStorage.removeItem("email");
        setUser(false);

    }

    return(
        <div>
            <h2>Gestion de paquetes - Listado de ordenes</h2>
            <Row className="mb-4">
                <Col className="md-8">
                    <Link className="d-flex justify-content-start" to="/login" onClick={logOut}>Cerrar sesión</Link>
                </Col>
                <Col className="md-4">
                    <Link className="d-flex justify-content-end" to="/new-order">Crear Orden</Link>  
                </Col>
            </Row>
            
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col"># Servicio</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Ciudad Entrega</th>
                        <th scope="col">Direccion de Entrega</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        orders.map((order, idx) => {
                            <tr key={idx}>
                                <th scope="row" ><Link className="d-flex justify-content-center" to="/edit-order">{idx+1}</Link></th>
                                <td>{order.fecha}</td>
                                <td>{order.ciudadEntr}</td>
                                <td>{order.direcEntr}</td>
                                <td>{order.estado}</td>
                            </tr>    
                        })
                    }
                    {/* <tr>
                        <th scope="row" ><Link className="d-flex justify-content-center" to="/edit-order">1</Link></th>
                        <td>01/01/2022</td>
                        <td>Santa Marta</td>
                        <td>Cll 1-151-30</td>
                        <td>Guardado</td>
                    </tr>
                    <tr>
                        <th scope="row"><Link className="d-flex justify-content-center" to="/edit-order">2</Link></th>
                        <td>01/01/2022</td>
                        <td>Santa Marta</td>
                        <td>Cll 1-151-30</td>
                        <td>Guardado</td>
                    </tr>
                    <tr>
                        <th scope="row"><Link className="d-flex justify-content-center" to="/edit-order">3</Link></th>
                        <td>01/01/2022</td>
                        <td>Santa Marta</td>
                        <td>Cll 1-151-30</td>
                        <td>Guardado</td>
                    </tr> */}
                </tbody>
            </table>
        </div>

    );
};

export default OrderList;