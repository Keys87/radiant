import { useContext, useEffect, useRef, useState } from "react"
import { DBInstanceContext, UserObjectContext } from "../contexts"
import { child, get, onValue, push, ref, set } from "firebase/database"
import { v4 } from "uuid"

function ChatRoomListElement({chatRoomId}) {
    const db = useContext(DBInstanceContext)
    const chatRoomDataObject = get(ref(db, `/chatRooms/${chatRoomId}`))
    return (
        <div className="flex flex-1 hover:bg-black/20 hover:text-white/80 text-white ">
            <h4 className="text-lg">{chatRoomDataObject.name}</h4>
            <p className="text-sm text-white/90">{chatRoomDataObject.lastMessage}</p>
        </div>
    )
}

function NewChatroom() {
    const [toggle, setToggle] = useState(false)
    const [message, setMessage] = useState(undefined)
    const db = useContext(DBInstanceContext)
    let nameInputValue = useRef(undefined)
    let membersInputValue = useRef(undefined)

    function handleCreateNewChatroom(name="", members="") {
        /*
        make json
        toArray members
        json editAdd name
        json editAdd members
        */

        if (name == "" || members == "") {
            setToggle(true)
            setMessage("Please fill out every field")
        } else {
            setToggle(false)
            setMessage(undefined)
        }
       
        const id = v4()
        const membersArray = String(members).split(",")
        const chatroomObject = {
            [id]: {
                "name": name,
                "id": id,
                "members": membersArray,
                "lastSessionNumber": 0,
                "lastMessageId": ""
            }
        }
        const newChatroomRef = child(ref(db), "chatRooms") // same case as auth.jsx here

       push(newChatroomRef, chatroomObject)
       removeEventListener("keydown")
    }

    return (
    <>
        { toggle ? 
        (
            <div className="flex flex-auto w-screen h-screen items-center justify-center bg-black/50 absolute top-0 left-0" onKeyDown={(e) => {if (e.key == "Escape") {
                setToggle(false)
            }}}>
                <form className="border-2 rounded-3xl border-white bg-transparent w-auto flex flex-initial flex-col p-2">
                    <h3 className="font-bold text-lg text-white text-center">Create New Chatroom</h3>
                    <label htmlFor="name" className="text-white mt-6">Chatroom Name</label>
                    <input type="text" placeholder="name" name="name" className="mt-2 rounded-2xl p-4 focus-visible:outline-none" spellCheck="false" autoCapitalize="off" autoCorrect="off" autoComplete="off" ref={nameInputValue}/>
                    <label htmlFor="members" className="text-white mt-6">Members UIDs (separate using commas)</label>
                    <input type="text" placeholder="UIDs of members" name="members" className="mt-2 rounded-2xl p-4 focus-visible:outline-none" spellCheck="false" autoCapitalize="off" autoCorrect="off" autoComplete="off" ref={membersInputValue}/>
                    <button type="button" className="p-2 rounded-2xl bg-white text-center hover:bg-gray-300 mt-2" onClick={() => handleCreateNewChatroom(nameInputValue.current, membersInputValue.current)}>
                        Create chatroom
                    </button>
                    <p role="contentinfo" className={`${message ? "block" : "hidden"}`}>{message}</p>
                </form>
            </div>
        ) : (
            <div className="bg-transparent w-screen h-fit z-10 flex justify-center items-center">
                <button type="button" className="p-2 rounded-2xl bg-transparent text-center absolute bottom-1 left-48" onClick={() => setToggle(true)}>
                    <i className="bi bi-plus-lg font-extrabold text-3xl text-white hover:text-gray-300"></i>
                </button>
            </div>
        )
        }
    </>
    )
}

export function ChatRoomsList({show}) {
    const [chatRoomListData, setChatRoomListData] = useState()
    const userObject = useContext(UserObjectContext)
    const db = useContext(DBInstanceContext)

    useEffect(() => {
        const unsubscribe =  onValue(ref(db, `/userData/${userObject.uid}/chatRoomsIn`), (snapshot) => {
            setChatRoomListData(snapshot.val())
            console.log(`snapshot.val()-data: ${snapshot.val()}`)
        })

        return () => unsubscribe()
    }, [])


    return (
        <section role="" className={`bg-black/40 w-52 flex-initial flex-col justify-center align-top border-e-2 ${show}`}>
            <h3 className="font-bold text-2xl text-white ms-2 mt-2 text-center">Chats</h3>
            {   
                chatRoomListData ? chatRoomListData.map((i) => {<ChatRoomListElement chatRoomId={i}/>}) : <p className="text-sm text-white/60 text-center">No Chatrooms yet</p>
            }
            <NewChatroom></NewChatroom>
            {/* 
            since this is going to be a list of chatrooms, make a js list of
            this user's chatrooms' id
            */}
        </section>
    )
}