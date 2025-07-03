import React, { useState, useEffect } from "react";
import axios from "axios";

function MeetingList() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/meetings").then((res) => {
      setMeetings(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Meeting List</h2>
      <ul>
        {meetings.map((m) => (
          <li key={m.id}>{m.date} - {m.purpose}</li>
        ))}
      </ul>
    </div>
  );
}

export default MeetingList;
