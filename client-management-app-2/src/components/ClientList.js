import React, { useState, useEffect } from "react";
import axios from "axios";

function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/clients").then((res) => {
      setClients(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Client List</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.name} ({client.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;
