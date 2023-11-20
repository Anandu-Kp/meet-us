import ChatBox from "../ChatBox"
import ParticipantsBox from "../ParticipantsBox"
import "./styles.css"
import React from 'react'

function MenuBox({ userList, activeMenu }) {
    return (
        <div className="menu-box">
            {activeMenu == "participants" ? <ParticipantsBox userList={userList} /> : <ChatBox />}

        </div>
    )
}

export default MenuBox