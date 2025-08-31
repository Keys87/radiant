import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, set, get } from "firebase/database";
// import { v4 } from "uuid"
// https://firebase.google.com/docs/web/setup#available-libraries

import { auth, db } from "./config";
import { Navi } from "./nav/nav"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./output.css"
import { Authenticate } from "./auth/auth";
import { AuthInstanceContext, UserObjectContext, DBInstanceContext } from "./contexts";

function App() {
  const [user, setUser] = useState(null)

  useEffect(
    () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user)
        console.log(`unsubscribed from a listener[onAuthStateChanged]; user-name-b4-render: ${user} `)
      })

      return unsubscribe
    }, []
  )

  return (
    <section role="main" className="grid grid-cols-3 grid-rows-1">
         { user ? (
            <DBInstanceContext.Provider value={db}>
              <UserObjectContext.Provider value={user}>
                <AuthInstanceContext.Provider value={auth}>
                  <Navi />
                </AuthInstanceContext.Provider>
              </UserObjectContext.Provider>
            </DBInstanceContext.Provider>
          ) : (
            <Authenticate/>
          )
        }
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
