import React, { useState } from "react";
import axios from "axios";

function MeetingForm() {
  const [meeting, setMeeting] = useState({ clientId: "", date: "", purpose: "" });

  const handleChange = (e) => {
    setMeeting({ ...meeting, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/meetings", meeting);
      alert("Meeting scheduled successfully!");
      setMeeting({ clientId: "", date: "", purpose: "" });
    } catch (error) {
      alert("Error scheduling meeting");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="clientId" value={meeting.clientId} onChange={handleChange} placeholder="Client ID" required />
      <input name="date" type="datetime-local" value={meeting.date} onChange={handleChange} required />
      <input name="purpose" value={meeting.purpose} onChange={handleChange} placeholder="Purpose" required />
      <button type="submit">Schedule Meeting</button>
    </form>
  );
}

export default MeetingForm;