import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MeetingList() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/meetings')
      .then(res => setMeetings(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Meeting List</h2>
      <ul>
        {meetings.map(meeting => (
          <li key={meeting.id}>
            🕒 {meeting.date} — 📌 {meeting.purpose} — 👤 Client ID: {meeting.clientId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeetingList;
