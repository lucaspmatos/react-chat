import React from "react";
import "./ChatItem.css";

export default function ChatItem({number, active, data, onClick}) {
  return (
    <div 
      className={`chatItem ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <img className="chatItem--avatar" src={data.avatar} alt="" />
      <div className="chatItem--lines">
        <div className="chatItem--line">
          <div className="chatItem--name">{data.title}</div>
          <div className="chatItem--date">00:00</div>
        </div>
        <div className="chatItem--line">
          <div className="chatItem--lastMsg">
            <p>Olá, tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
