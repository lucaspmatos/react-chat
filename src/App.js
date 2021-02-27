/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./App.css";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default () => {
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src="https://espacomotosdf.com.br/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"
            alt=""
          />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>

        <div className="search">...</div>

        <div className="chat-list">...</div>
      </div>
      <div className="content-area">...</div>
    </div>
  );
};
