/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./App.css";

import ChatItem from "./components/ChatItem/ChatItem";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import NewChat from "./components/NewChat/NewChat";
import Login from './components/Login/Login';

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

export default () => {
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      title: "Contato 1",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 2,
      title: "Contato 2",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 3,
      title: "Contato 3",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 4,
      title: "Contato 4",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 5,
      title: "Contato 5",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 6,
      title: "Contato 6",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 7,
      title: "Contato 7",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 8,
      title: "Contato 8",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 9,
      title: "Contato 9",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 10,
      title: "Contato 10",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 11,
      title: "Contato 11",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 12,
      title: "Contato 12",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ]);

  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  const handleLoginData = async (userInfo) => {
    let newUser = {
      id: userInfo.uid,
      name: userInfo.displayName,
      avatar: userInfo.photoURL,
    };
    //
    setUser(newUser);
  }

  if (user === null) {
    return (<Login onReceive={handleLoginData} />);
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div onClick={handleNewChat} className="header--btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>

        <div className="chat-list">
          {chatList.map((item, key) => (
            <ChatItem
              key={key}
              number={key + 1}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className="content-area">
        {activeChat.chatId && (
          <ChatWindow user={user} number={activeChat.chatId} />
        )}
        {!activeChat.chatId && <ChatIntro />}
      </div>
    </div>
  );
};
