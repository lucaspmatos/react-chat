/* eslint-disable import/no-anonymous-default-export */
import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
  fbPopUp: async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    let result = await firebaseApp.auth().signInWithPopup(provider);
    return result;
  },

  addUser: async (userInfo) => {
    await db.collection("users").doc(userInfo.id).set(
      {
        name: userInfo.name,
        avatar: userInfo.avatar,
      },
      { merge: true }
    );
  },

  getContactList: async (userId) => {
    let list = [];

    let results = await db.collection("users").get();
    results.forEach((result) => {
      let data = result.data();
      if (result.id !== userId) {
        list.push({ id: result.id, name: data.name, avatar: data.avatar });
      }
    });

    return list;
  },

  addNewChat: async (user, secondUser) => {
    let newChat = await db.collection("chats").add({
      messages: [],
      users: [user.id, secondUser.id],
    });

    db.collection("users")
      .doc(user.id)
      .update({
        chats: firebase.firestore.FieldValue.arrayUnion({
          chatId: newChat.id,
          title: secondUser.name,
          image: secondUser.avatar,
          with: secondUser.id,
        }),
      });

    db.collection("users")
      .doc(secondUser.id)
      .update({
        chats: firebase.firestore.FieldValue.arrayUnion({
          chatId: newChat.id,
          title: user.name,
          image: user.avatar,
          with: user.id,
        }),
      });
  },

  onChatList: (userId, setChatList) => {
    return db
      .collection("users")
      .doc(userId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let data = doc.data();

          if (data.chats) {
            setChatList(data.chats);
          }
        }
      });
  },

  onChatContent: (chatId, setList, setUsers) => {
    return db
      .collection("chats")
      .doc(chatId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let data = doc.data();
          setList(data.messages);
          setUsers(data.users);
        }
      });
  },

  sendMessage: async (chatData, userId, type, body, users) => {
    let currentDate = new Date();

    db.collection("chats")
      .doc(chatData.chatId)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          type,
          author: userId,
          body,
          date: currentDate,
        }),
      });

    for (let i in users) {
      let user = await db.collection("users").doc(users[i]).get();
      let userData = user.data();

      if (userData.chats) {
        let chats = [...userData.chats];

        for (let j in chats) {
          if (chats[j].chatId == chatData.chatId) {
            chats[j].last_message = body;
            chats[j].last_message_date = currentDate;
          }
        }

        await db.collection("users").doc(users[i]).update({ chats });
      }
    }
  },
};
