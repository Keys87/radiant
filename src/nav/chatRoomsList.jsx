import { useContext } from "react"
import { DBInstanceContext, UserObjectContext } from "../contexts"
import { get, ref } from "firebase/database"

function chatRoomListElement({chatRoomId}) {
    const db = useContext(DBInstanceContext)

    const chatRoomDataObject = get(ref(db, `/chatRooms/${chatRoomId}`))
    return (
        <div className="flex flex-1 hover:bg-black/20 hover:text-white/80 text-white ">
            <h4 className="text-lg">{chatRoomDataObject.name}</h4>
            <p className="text-sm text-white/90">{chatRoomDataObject.lastMessage}</p>
        </div>
    )
}

export function ChatRoomsList({show}) {
    const userObject = useContext(UserObjectContext)

    return (
        <section role="" className={`bg-black/40 w-52 flex-initial flex-col justify-center align-top border-e-2 ${show}`}>
            <h3 className="font-bold text-2xl text-white ms-2 mt-2 text-center">Chats</h3>
            {/* 
            since this is going to be a list of chatrooms, make a js list of
            this user's chatrooms' id
            */}
        </section>
    )
}