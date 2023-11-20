import "./styles.css"

import audioOff from "../../Assets/icons/audio-off.svg"
import audioOn from "../../Assets/icons/audio.svg"
import videoOff from "../../Assets/icons/video-off.svg"
import videoOn from "../../Assets/icons/video.svg"

import React from 'react'

function ParticipantsBox({ userList }) {
    return (
        <div className="participants-box">
            <div className="participants-box-header">
                <span className="participants-box-title">Participants</span>
            </div>
            {userList.map((user, id) => <div className="participant-item">
                <span className="user-name">{user.name}</span>
                <div className="participants-user-icons">

                    <img src={user.video ? videoOn : videoOff}></img>
                    <img src={user.audio ? audioOn : audioOff}></img>
                </div>
            </div>)}
        </div>
    )
}

export default ParticipantsBox