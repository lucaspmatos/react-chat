import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./ChatWindow.css";

import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

export default function ChatWindow(props) {
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleEmojiClick = () => {};

  const handleOpenEmoji = () => {
    setOpenEmoji(true);
  };

  const handleCloseEmoji = () => {
    setOpenEmoji(false);
  };

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerInfo">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
            className="chatWindow--avatar"
          />
          <div className="chatWindow--name">Contato {props.number}</div>
        </div>
        <div className="chatWindow--headerButtons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div className="chatWindow--body"></div>
      <div
        className="chatWindow--emojiArea"
        style={{ height: openEmoji ? "200px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--footerLeft">
          <div
            className="chatWindow--btn"
            onClick={handleCloseEmoji}
            style={{ width: openEmoji ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: openEmoji ? "#009688" : "#919191" }}
            />
          </div>
        </div>
        <div className="chatWindow--footerInput">
          <input type="text" placeholder="Digite uma mensagem" />
        </div>
        <div className="chatWindow--footerRight">
          <div className="chatWindow--btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
