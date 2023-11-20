import React from 'react'
import "./styles.css"
import chat from "../../Assets/icons/chat.svg"
import participants from "../../Assets/icons/participantes.svg"
import screenShare from "../../Assets/icons/screen-share.svg"


function Tools({ setActiveMenu }) {
  return (
    <div className="tools-container">
      <img src={participants} onClick={() => setActiveMenu("participants")}></img>
      <img src={chat} onClick={() => setActiveMenu("chat")}></img>
      <img src={screenShare}></img>
      <button className='end-call' onClick={() => window.location.href = "/"}>End</button>
    </div>
  )
}

export default Tools