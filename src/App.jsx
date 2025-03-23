import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, set, get } from "firebase/database";
// import { v4 } from "uuid"
// https://firebase.google.com/docs/web/setup#available-libraries

import { auth } from "./config";
import { Navi } from "./nav/nav"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./output.css"
import { Authenticate } from "./auth/auth";
import { AuthInstanceContext } from "./contexts";

function App() {
  const [user, setUser] = useState(null)
  let nonStaticUser // iykyk; this variable will let us see instantly what does the user state is since it doesn't need to wait fora re-render
  // try replacing monitorAuthState to useEffect

  useEffect(
    () => {
      const unsubscribe = onAuthStateChanged(auth, () => {
        setUser(user)
        nonStaticUser = user
        console.log(`unsubscribed from a listener[onAuthStateChanged]; verbose-data: ${nonStaticUser} `)
      })

      return unsubscribe
    },[]
  )

  function handleAfterAuth(userObject) {
    setUser(userObject)
    nonStaticUser = userObject
    console.log(nonStaticUser)
  }
  
  

  return (
    <section role="main">
      {user ? (
        <AuthInstanceContext.Provider value={auth}>
          <Navi />
        </AuthInstanceContext.Provider>
      ) : (
        <Authenticate handleAfterAuth={handleAfterAuth} />
      )}
    </section>
  );
  
}

export default App

/*

image uploded to firestore

*/

// return (
//   <section role="main">
//     <Authenticate handleAfterAuth={handleAfterAuth}></Authenticate>
//   </section>
// )
// } else {
// return (
//   // <section role="dev mode" className="absolute h-0.5 w-1 right-60">
//   // <button type="button" onClick={() => setDev(!dev)} className="border bg-white w-max hover:bg-zinc-300">toggle dev mode</button>
//   //   <div className={`${dev ? "hidden" : "block"} flex flex-1 flex-row`}>
//   //     <input type="text" onChange={(event) => setInput(event.target.value)} className="border bg-white grow"/>
//   //     <button type="button" onClick={() => {handleOnSend()}} className="border bg-white grow hover:bg-zinc-300">send</button>
//   //   </div> 
//   // </section>
//   <section role="main">
//     <AuthInstanceContext.Provider value={auth}>
//       <Navi></Navi>
//     </AuthInstanceContext.Provider>
//   </section>