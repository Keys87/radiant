import { signOut } from "firebase/auth"
import { AuthInstanceContext, DBInstanceContext, UserObjectContext } from "../contexts"
import { createRef, useContext, useRef, useState } from "react"
import { ref, update } from "firebase/database"

export function User({show}) {
    const authInstance = useContext(AuthInstanceContext)
    const userInstance = useContext(UserObjectContext)
    const db = useContext(DBInstanceContext)
    const [newName, setNewName] = useState(userInstance.displayName)

    function handleNewName(e) {
        setNewName(e.target.value)
        update(ref(db, `user/${userInstance.uid}/userName`), newName)
    }

    return (
      <section
        role=""
        className={`bg-black/40 flex-auto justify-center align-top flex-row border-e-2 border-white ${show}`}
      >
        <h3 className="font-bold text-2xl text-white ms-2 mt-2 text-center">
          Account
        </h3>
        <img
          src={`${userInstance.photoURL}`}
          alt="profile picture"
          className="rounded-2xl place-self-center"
        />
        <section className="flex flex-row items-center justify-center mt-2">
          <input
            type="text"
            placeholder="user name"
            name="user name"
            value={newName}
            onChange={(e) => handleNewName(e)}
            className="text-white rounded-2xl p-2 focus-visible:outline-none border-2 border-white"
            spellCheck="false"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
          />
        </section>
        <button
          type="button"
          className="p-2 rounded-2xl bg-white text-center hover:bg-gray-300"
          onClick={() => {
            console.log(`${authInstance}`);
            signOut(authInstance);
          }}
        >
          Log Out
        </button>
      </section>
    );
}