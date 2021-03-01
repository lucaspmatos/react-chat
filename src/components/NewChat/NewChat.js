import React, { useState } from "react";
import "./NewChat.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function NewChat({ user, chatList, show, setShow }) {
  const [contactList, setContactList] = useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Contato",
    },
    {
      id: 456,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Contato",
    },
    {
      id: 789,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Contato",
    },
  ]);

  const handleBackButton = () => {
    setShow(false);
  };

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat--head">
        <div onClick={handleBackButton} className="newChat--backButton">
          <ArrowBackIcon style={{ color: "white" }} />
        </div>
        <div className="newChat--headTitle">Nova conversa</div>
      </div>
      <div className="newChat--list">
        {contactList.map((item, key) => (
          <div className="newChat--item" key={key}>
            <img src={item.avatar} alt="" className="newChat--itemAvatar" />
            <div className="newChat--itemName">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
