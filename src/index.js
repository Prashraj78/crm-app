import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerList from './components/Customer/CustomerList/CustomerList';
import CustomerForm from './components/Customer/CustomerForm/CustomerForm';
import SignUp from './components/SignUp/SIgnUp';
import SignIn from './components/SignIn/SignIn';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme CSS
import 'primereact/resources/primereact.min.css'; // PrimeReact CSS
import 'primeicons/primeicons.css'; // PrimeIcons CSS
import NavBar from './components/Navbar/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<CustomerList />}>
        </Route>
        <Route path='/signup' element={<SignUp />}>
        </Route>
        <Route path='/signin' element={<SignIn />}>
        </Route>
        <Route path='form' element={<CustomerForm />}>
        </Route>
        <Route path='form/:customerName' element={<CustomerForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
