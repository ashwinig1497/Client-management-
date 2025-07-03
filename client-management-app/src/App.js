import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientForm from "./components/ClientForm";
import ClientList from "./components/ClientList";
import MeetingForm from "./components/MeetingForm";
import MeetingList from "./components/MeetingList";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Client Management Application</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients/new" element={<ClientForm />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/meetings/new" element={<MeetingForm />} />
          <Route path="/meetings" element={<MeetingList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
