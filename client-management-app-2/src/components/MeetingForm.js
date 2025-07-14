import React, { useState } from 'react';
import './Form.css';

function MeetingForm() {
  const [meetingData, setMeetingData] = useState({
    topic: '',
    people: '',
    startTime: '',
  });

  const handleChange = (e) => {
    setMeetingData({...meetingData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meeting Scheduled:', meetingData);
  };

  return (
    <div className="form-section">
      <h3>Create a Meeting Schedule</h3>
      <form onSubmit={handleSubmit}>
        <label>Meeting Topic</label>
        <input type="text" name="topic" placeholder="Enter Meeting Topic" onChange={handleChange} required />

        <label>Number of People</label>
        <input type="number" name="people" placeholder="Enter number of people" onChange={handleChange} required />

        <label>Start Time</label>
        <input type="datetime-local" name="startTime" onChange={handleChange} required />
      </form>
    </div>
  );
}

export default MeetingForm;
