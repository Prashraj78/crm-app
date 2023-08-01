import React, { useState } from 'react';

function CustomerForm() {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    turnover: 0,
    employees: 0,
    ceo: '',
    establishedIn: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="website" className="form-label">
          Website
        </label>
        <input
          type="text"
          name="website"
          value={formData.website}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="turnover" className="form-label">
          Turnover
        </label>
        <input
          type="number"
          name="turnover"
          value={formData.turnover}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="employees" className="form-label">
          No Of Employees
        </label>
        <input
          type="number"
          name="employees"
          value={formData.employees}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ceo" className="form-label">
          CEO
        </label>
        <input
          type="text"
          name="ceo"
          value={formData.ceo}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="establishedIn" className="form-label">
          Established In
        </label>
        <input
          type="number"
          name="establishedIn"
          value={formData.establishedIn}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary float-end" type="button" onClick={handleSubmit}>
        Create New Customer
      </button>
    </div>
  );
}

export default CustomerForm;
