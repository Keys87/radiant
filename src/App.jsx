import { useState } from "react";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get } from "firebase/database";
import { Navi } from "./nav/nav"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./output.css"
import { v4 } from "uuid"
import { Authenticate } from "./auth/login";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

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
// const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app)

function App() {
  const [input, setInput] = useState("")
  const [dev, setDev] = useState(false)
  const [user, setUser] = useState()
  const [chatRoom, setChatRoom] = useState("")

  function handleAfterAuth(result) {
      //const credentials = GoogleAuthProvider.credentialFromResult(result)
      // const token = credentials.accessToken
  
      setUser(result.user)
      set(ref(db, ))
  }

/*  function handleOnSend() {

    const now = new Date();
    let day = toString(now.getDate())
    let month = toString(now.getMonth() + 1)
    let year = now.getFullYear(); 
    let hour = toString(now.getHours)
    let minute = toString(now.getMinutes)
    let fullDate = `${day}/${month}/${year}:${hour}:${minute}`;
    let id = v4()

    let lastMessage = get(ref(db, ``)) // need to get the chatrooms in rn
    let name = user.name

    let message = {
      id: {
        "id": id,
        "sender": name, // handle this later | RESOLVED
        "content": input,
        "timeStamp": fullDate,
        "messageNumber": 0
      }
    }     
    set(ref(db), message)
    
  } */

  /* if (user != null) {
    return (
      <section role="dev mode" className="absolute h-0.5 w-1 right-60">
      <button type="button" onClick={() => setDev(!dev)} className="border bg-white w-max hover:bg-zinc-300">toggle dev mode</button>
        <div className={`${dev ? "hidden" : "block"} flex flex-1 flex-row`}>
          <input type="text" onChange={(event) => setInput(event.target.value)} className="border bg-white grow"/>
          <button type="button" onClick={() => {handleOnSend()}} className="border bg-white grow hover:bg-zinc-300">send</button>
        </div> 
        <Navi></Navi>
      </section>
    )
  } else {
    return (
      <section role="dev mode" className="absolute h-0.5 w-1 right-60">
      <button type="button" onClick={() => setDev(!dev)} className="border bg-white w-max hover:bg-zinc-300">toggle dev mode</button>
        <div className={`${dev ? "hidden" : "block"} flex flex-1 flex-row`}>
          <input type="text" onChange={(event) => setInput(event.target.value)} className="border bg-white grow"/>
          <button type="button" onClick={() => {handleOnSend()}} className="border bg-white grow hover:bg-zinc-300">send</button>
        </div> 
        <Authenticate></Authenticate>
      </section>
    )
  } */
}

export default App

/*

image uploded to firestore

*/