import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClientForm from "./components/ClientForm";
import ClientList from "./components/ClientList";
import MeetingForm from "./components/MeetingForm";
import MeetingList from "./components/MeetingList";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Client Management App</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/clients">Client List</Link></li>
            <li><Link to="/clients/new">Add Client</Link></li>
            <li><Link to="/meetings">Meeting List</Link></li>
            <li><Link to="/meetings/new">Schedule Meeting</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/clients/new" element={<ClientForm />} />
          <Route path="/meetings" element={<MeetingList />} />
          <Route path="/meetings/new" element={<MeetingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
