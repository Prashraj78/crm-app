import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function CustomerForm() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()

  const handleFormSubmit = () => {
    fetch("http://localhost:4000/api/customer", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json', 
      },
    })
      .then((res) => {
        return res.json
      })
      .then((res) => {
        console.log(res)
        navigate("/")
      })
      .catch((error) => {
        console.error("Error while submitting the form:", error);
      });
    console.log(formData)
  }


  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => {
            formData.name = e.target.value
            setFormData(formData)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="website" className="form-label">
          Website
        </label>
        <input
          onChange={(e) => {
            formData.website = e.target.value
            setFormData(formData)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="turnover" className="form-label">
          Turnover
        </label>
        <input
          onChange={(e) => {
            formData.turnover = e.target.value
            setFormData(formData)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="employees" className="form-label">
          No Of Employees
        </label>
        <input
          onChange={(e) => {
            formData.employees = e.target.value
            setFormData(formData)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ceo" className="form-label">
          CEO
        </label>
        <input
          onChange={(e) => {
            formData.ceo = e.target.value
            setFormData(formData)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="establishedIn" className="form-label">
          Established In
        </label>
        <input
          onChange={(e) => {
            formData.establisheIn = e.target.value
            setFormData(formData)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary float-end" type="button" onClick={handleFormSubmit}>
        Create New Customer
      </button>
    </div>
  );
}

export default CustomerForm;
