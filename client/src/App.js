import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import OrderList from './pages/orderList';
import FormEdit from './pages/FormEdit';
import Login from './pages/Login';
import RegOrden from './pages/RegOrden';
import Registro from './pages/Registro';

function App() {
  return (
    <div className="App m-5">
        <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/order-list" element={<OrderList />}/>
          <Route path="/edit-order" element={<FormEdit/>}/>
          <Route path="/new-order" element={<RegOrden/>}/>
          <Route path="/register" element={<Registro/>}/>

        </Routes>
      </Router>

    
    </div>
  );
}



export default App;
