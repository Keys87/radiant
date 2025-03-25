/* eslint-disable react/prop-types */
import { useState } from "react"
import { User } from "./user"
import { Settings } from "./setting"
import { ChatRoomsList } from "./chatRoomsList";
import { DBInstanceContext, UserObjectContext } from "../contexts";

export function Navi() {
    const [showChat, setShowChat] = useState(true);
    const [showSettings, setShowSettings] = useState(false);
    const [showUser, setShowUser] = useState(false);

    return (
        <nav className="flex flex-initial flex-row h-auto">
            <nav className="bg-black/40 flex flex-col justify-center align-top w-fit h-svh border-e-2">
                <div className="flex flex-1 basis-2 flex-col py-2 ps-2">
                    <button type="button" onClick={() => {
                        setShowChat(false)
                        setShowSettings(false)
                        setShowUser(true)
                    }}
                        className="pe-2 rounded-full">
                        <i className="bi bi-person-circle text-3xl text-white hover:text-gray-300"></i>
                    </button>
                    <button type="button" onClick={() => {
                        setShowChat(true)
                        setShowSettings(false)
                        setShowUser(false)
                    }} className="pe-2 pt-2 rounded-full">
                        <i className="bi bi-chat-left-text-fill text-3xl text-white hover:text-gray-300"></i>
                    </button>
                </div>
                <button type="button" onClick={() => {
                    setShowChat(false)
                    setShowSettings(true)
                    setShowUser(false)
                }} className="bottom-1 relative p-2 rounded-full">
                    <i className="bi bi-gear-fill text-3xl text-white hover:text-gray-300"></i>
                </button>
            </nav>
            {/* below is ChatList; before is nav*/}
            <ChatRoomsList show={showChat ? "block" : "hidden"}></ChatRoomsList>
            <Settings show={showSettings ? "block" : "hidden"}></Settings>
            <User show={showUser ? "block" : "hidden"}></User>
        </nav>
    )
}