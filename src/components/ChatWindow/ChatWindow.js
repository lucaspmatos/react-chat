import React from "react";
import './ChatWindow.css';

import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function ChatWindow() {
  return <div className="chatWindow">
    <div className="chatWindow--header">
      <div className="chatWindow--headerInfo">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="chatWindow--avatar"/>
        <div className="chatWindow--name">Contato</div>
      </div>
      <div className="chatWindow--headerButtons">
        <div className="chatWindow--btn">
          <SearchIcon style={{ color: '#919191' }} />
        </div>
        <div className="chatWindow--btn">
          <AttachFileIcon style={{ color: '#919191' }} />
        </div>
        <div className="chatWindow--btn">
          <MoreVertIcon style={{ color: '#919191' }} />
        </div>
      </div>
    </div>
    <div className="chatWindow--body">

    </div>
    <div className="chatWindow--footer">

    </div>
  </div>
}
