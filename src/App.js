// import logo from './logo.svg';
import './App.css';
import CustomerForm from './components/Customer/CustomerForm/CustomerForm';
import CustomerList from './components/Customer/CustomerList/CustomerList';

import Customer from './pages/Customer/Customer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<CustomerList/>}></Route>
    <Route path='form' element={<CustomerForm/>}></Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;