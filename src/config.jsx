import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB8swM0urwNrYhu4kEFRU9qSydW97ErnRg",
  authDomain: "new-chat-cdc8f.firebaseapp.com",
  databaseURL: "https://new-chat-cdc8f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "new-chat-cdc8f",
  storageBucket: "new-chat-cdc8f.appspot.com",
  messagingSenderId: "454859653674",
  appId: "1:454859653674:web:5a5162167a7ab19d577953",
  measurementId: "G-4DZV5R297T"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app)