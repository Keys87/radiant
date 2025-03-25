import { get } from "firebase/database"
import { useContext } from "react"
import { DBInstanceContext } from "./contexts"

export function message({chatRoomId, messageId}) {
    const db = useContext(DBInstanceContext)
    const messageObject = get(ref(db, `/messages/${chatRoomId}/${messageId}`))

    function handleHover() {
        return(
            <p className="justify-self-end">{messageObject.timeStamp}</p>
        )
    }

    return (
        <div className="flex flex-auto flex-row">
            <p className="justify-self-start" onMouseOver={handleHover}>{`${messageObject.sender}: ${messageObject.content}`}</p>
        </div>
    )
}