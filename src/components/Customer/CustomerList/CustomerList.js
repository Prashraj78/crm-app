import "./CustomerList.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


function CustomerList() {
  // Storing data in state
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/api/customer")
      .then((res) => res.json())
      .then((res) => setCustomers(res.map(c => ({ ...c, id: uuidv4() })))); // Generate a unique id for each customer
  }, []);

  function handleNewCustomerClick() {
    navigate("form");
  }

  function handleEditClick(name) {
    console.log(name);
    navigate("/form/" + name);
  }

  return (
    <div className="container">
      <button onClick={handleNewCustomerClick} className="btn btn-success">
        New Customer
      </button>

      {customers.length === 0 && (
        <div className="alert alert-primary mt-3" role="alert">
          No Customers are available im system.
        </div>
      )}
      {customers.length > 0 && (
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
            {/* rendering data in table rows. */}
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.website}</td>
                <td>{c.turnover}</td>
                <td>{c.employees}</td>
                <td>{c.ceo}</td>
                <td>{c.year}</td>
                <td>
                  <button
                    onClick={() => handleEditClick(c.name)}
                    className="btn btn-warning">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CustomerList;