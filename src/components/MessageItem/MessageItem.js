import React from "react";
import "./MessageItem.css";

export default function MessageItem({ data, user }) {
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
        <div className="messageDate">23:59</div>
      </div>
    </div>
  );
}
