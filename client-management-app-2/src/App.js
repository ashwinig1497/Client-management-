import React from 'react';
import ClientForm from './components/ClientForm';
import MeetingForm from './components/MeetingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Outputs</h1>
      <div className="form-layout">
        <ClientForm />
        <MeetingForm />
      </div>
    </div>
  );
}

export default App;
