import React, { useState } from 'react';
import './ClientForm.css';

function ClientForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Client Data:', formData);
    // Add API call here
    setFormData({
      name: '',
      email: '',
      address: '',
      password: '',
      repeatPassword: '',
    });
  };

  return (
    <div className="client-form">
      <h2>Create a Client</h2>
      <p>Please fill in this form to create a client.</p>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Repeat Password</label>
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password"
          value={formData.repeatPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default ClientForm;
