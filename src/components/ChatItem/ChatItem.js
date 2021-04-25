import React, { useState, useEffect } from "react";
import "./ChatItem.css";

export default function ChatItem({ active, data, onClick }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    if (data.last_message_date > 0) {
      let date = new Date(data.last_message_date.seconds * 1000);
      let hours = date.getHours();
      let minutes = date.getMinutes();

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      setTime(`${hours}:${minutes}`);
    }
  }, [data]);

  return (
    <div className={`chatItem ${active ? "active" : ""}`} onClick={onClick}>
      <img className="chatItem--avatar" src={data.avatar} alt="" />
      <div className="chatItem--lines">
        <div className="chatItem--line">
          <div className="chatItem--name">{data.title}</div>
          <div className="chatItem--date">{time}</div>
        </div>
        <div className="chatItem--line">
          <div className="chatItem--lastMsg">
            <p>{data.last_message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
