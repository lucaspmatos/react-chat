import React, { useState, useEffect } from "react";
import "./NewChat.css";

import Api from "../../Api";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function NewChat({ user, chatList, show, setShow }) {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    if (user !== null) {
      const getList = async () => {
        if (user !== null) {
          let results = await Api.getContactList(user.id);
          setContactList(results);
        }
      };

      getList();
    }
  }, [user]);

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
