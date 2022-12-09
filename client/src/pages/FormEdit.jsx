import React from 'react';
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RegOrden from "./RegOrden";

const FormEdit = () => {
    const { id } = useParams()
    const [state, setState] = useState(null)
    useEffect(() => {
      axios.get('http://localhost:4000/auth/orderEdit/'+ id)
        .then((response) => {
          setState(response.data)
        })
        .catch((error) => {
          console.error(error);
        })
    }, [])
  


  return (
    <>
      {state ? (
                <>
                    <h1>Estas editando la orden # {id}</h1>
                    <RegOrden data={state} orderId={id} />
                </>
            ) : ''}
    </>
  ); 
};

export default FormEdit;