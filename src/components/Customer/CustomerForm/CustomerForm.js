import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CustomerForm() {
  // const [customer, setCustomer] = useState({});
  const [updateCustomer, setUpdateCustomer] = useState({});
  const { customerName } = useParams();





  // console.log(customerName);
  useEffect(() => {
    if (customerName) {
      fetch("http://localhost:4000/api/customer")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let result = res.find((c) => c.name === customerName);
          if (result) {
            setUpdateCustomer(result);
          }
        });
    }
  }, []);
 


  const navigate = useNavigate();


  const backToList = () => {
    navigate("/")
  }

  function handleFormSubmit() {
    console.log(updateCustomer);
    fetch("http://localhost:4000/api/customer", {
      method: "POST",
      body: JSON.stringify(updateCustomer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  }
  // console.log(customer)/

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          value={updateCustomer.name}
          onInput={(e) => {
            setUpdateCustomer({ name: e.target.value });
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Website
        </label>
        <input
          value={updateCustomer.website}
          onInput={(e) => {
            setUpdateCustomer({ website: e.target.value });
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Turnover
        </label>
        <input
          value={updateCustomer.turnover}
          onInput={(e) => {
            setUpdateCustomer({ turnover: e.target.value });
          }}
          type="number"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          No Of Employees
        </label>
        <input
          value={updateCustomer.employees}
          onInput={(e) => {
            setUpdateCustomer({ employees: e.target.value });
          }}
          type="number"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          CEO
        </label>
        <input
          value={updateCustomer.ceo}
          onInput={(e) => {
            setUpdateCustomer({ ceo: e.target.value });
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Established In
        </label>
        <input
          value={updateCustomer.year}
          onInput={(e) => {
            setUpdateCustomer({ year: e.target.value });
          }}
          type="number"
          className="form-control"></input>
      </div>
      <button
        onClick={handleFormSubmit}
        className="btn btn-primary float-end"
        type="button">
        Create New Customer
      </button>

      <button type="button" className="btn btn-outline-warning" style={{ marginLeft: '10px' }}
        onClick={backToList}
      >Back to List</button>




    </div>
  );
}

export default CustomerForm;