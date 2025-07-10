import React, { useState } from "react";
import axios from "axios";

function ClientForm() {
  const [client, setClient] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!client.name.trim()) errors.name = "Name is required";
    if (!client.email.includes("@")) errors.email = "Valid email is required";
    if (!client.phone.match(/^[0-9]{10}$/)) errors.phone = "Enter a 10-digit phone number";
    return errors;
  };

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        await axios.post("http://localhost:3001/clients", client);
        alert("Client added successfully!");
        setClient({ name: "", email: "", phone: "" });
      } catch (error) {
        alert("Error adding client");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={client.name}
        onChange={handleChange}
        placeholder="Name"
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input
        name="email"
        value={client.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        name="phone"
        value={client.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

      <button type="submit">Add Client</button>
    </form>
  );
}

export default ClientForm;
