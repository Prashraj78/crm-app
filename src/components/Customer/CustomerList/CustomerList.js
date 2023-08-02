import './CustomerList.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function CustomerList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/customer') 
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>

      <Link to='/form'>
        <button className='btn btn-success ' style={{ marginTop: "36px", marginLeft: "15px" }}>New Customer</button>
      </Link>
      {
        data.length === 0 ? <div className="alert alert-primary mt-3" role="alert">
          No customer avaliable in systeam
        </div> : null
      }
      {data.length > 0 &&
        <div className="container">
          <table className="table">

            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Website</th>
                <th scope="col">Turnover</th>
                <th scope="col">NumberOfEmployees</th>
                <th scope="col">CEO</th>
                <th scope="col">Established Year</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.website}</td>
                  <td>{item.turnover}</td>
                  <td>{item.employees}</td>
                  <td>{item.ceo}</td>
                  <td>{item.year}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      }

    </>

  );
}

export default CustomerList;
