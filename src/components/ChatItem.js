import React from "react";
import "./ChatItem.css";

export default function ChatItem(props) {
  return (
    <div className="chatItem">
      <img
        className="chatItem--avatar"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt=""
      />
      <div className="chatItem--lines">
        <div className="chatItem--line">
          <div className="chatItem--name">Contato {props.number}</div>
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
