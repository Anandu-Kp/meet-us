import "./styles.css"
import React, { useState } from 'react'
import { IoSendOutline } from "react-icons/io5";

function ChatBox() {

    let [message, setMessage] = useState()

    const sentMessage = () => {
        const messageItem = document.createElement("div");
        messageItem.className = "message-container sent";
        messageItem.innerHTML = `<span class="message-sender-name">me</span>
       <span class="message">${message}</span>`
        document.getElementById("message-box").appendChild(messageItem)
        setMessage("");

    }

    return (
        <div className="chat-box">
            <div className="chat-box-header">
                <span className="chat-box-title">Chat Room</span>
            </div>
            <div className="chat-box-main" id="message-box">
                <div className="message-container recieved">
                    <span className="message-sender-name">john</span>
                    <span className="message ">hello</span>
                </div>
                <div className="message-container sent">
                    <span className="message-sender-name">me</span>
                    <span className="message">hello</span>
                </div>
                <div className="message-container recieved">
                    <span className="message-sender-name">john</span>
                    <span className="message ">good morning</span>
                </div>
                <div className="message-container recieved">
                    <span className="message-sender-name">john</span>
                    <span className="message ">how are you.........efvefvfvfve?</span>
                </div>
            </div>
            <div className="chat-footer">
                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type your message here..." ></input>
                <button className="message-send-btn" onClick={sentMessage}>Send</button>
            </div>

        </div>
    )
}

export default ChatBox