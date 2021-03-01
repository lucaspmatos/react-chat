import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./ChatWindow.css";

import MessageItem from "../MessageItem/MessageItem";

import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

export default function ChatWindow(props) {
  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([{}, {}, {}]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setOpenEmoji(true);
  };

  const handleCloseEmoji = () => {
    setOpenEmoji(false);
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
  };

  const handleSendClick = () => {};

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

      <div className="chatWindow--body">
        {list.map((item, key) => (
          <MessageItem key={key} data={item} />
        ))}
      </div>

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
          <input
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow--footerRight">
          {text === "" && (
            <div onClick={handleMicClick} className="chatWindow--btn">
              <MicIcon style={{ color: listening ? "#009688" : "#919191" }} />
            </div>
          )}
          {text !== "" && (
            <div onClick={handleSendClick} className="chatWindow--btn">
              <SendIcon style={{ color: "#919191" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
