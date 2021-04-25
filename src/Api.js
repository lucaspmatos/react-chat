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
};
