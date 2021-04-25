import React, { useState, useEffect } from "react";
import "./MessageItem.css";

export default function MessageItem({ data, user }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    if (data.date > 0) {
      let date = new Date(data.date.seconds * 1000);
      let hours = date.getHours();
      let minutes = date.getMinutes();

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      setTime(`${hours}:${minutes}`);
    }
  }, [data]);

  return (
    <div
      className="messageLine"
      style={{
        justifyContent: user.id === data.author ? "flex-end" : "flex-start",
      }}
    >
      <div
        className="messageItem"
        style={{
          backgroundColor: user.id === data.author ? "#DCF8C6" : "white",
        }}
      >
        <div className="messageText">{data.body}</div>
        <div className="messageDate">{time}</div>
      </div>
    </div>
  );
}
