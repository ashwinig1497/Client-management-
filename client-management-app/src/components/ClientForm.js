import React, { useState } from "react";
import axios from "axios";

function ClientForm() {
  const [client, setClient] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/clients", client);
      alert("Client added successfully!");
      setClient({ name: "", email: "", phone: "" });
    } catch (error) {
      alert("Error adding client");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={client.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={client.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={client.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">Add Client</button>
    </form>
  );
}

export default ClientForm;
