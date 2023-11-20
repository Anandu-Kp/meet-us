import React, { useEffect, useState } from 'react'
import "./styles.css"

import audioOff from "../../Assets/icons/audio-off.svg"
import audioOn from "../../Assets/icons/audio.svg"
import videoOff from "../../Assets/icons/video-off.svg"
import videoOn from "../../Assets/icons/video.svg"

function HomeBottomSlider({ userList, currentUser, setCurrentUser }) {
    const [selectedUser, setSelectedUser] = useState()
    useEffect(() => {
        setSelectedUser(document.getElementById(0))
        document.getElementById(0).style.border = "3px solid rgb(42, 117, 247)"
        document.getElementById(0).style.height = "96%;"

    }, [])
    const changeUser = (id) => {
        setCurrentUser(id);
        setSelectedUser(document.getElementById(id))

        // console.log(selectedUser);
        document.getElementById(id).style.border = "3px solid rgb(42, 117, 247)"
        document.getElementById(id).style.height = "96%;"

    }

    return (
        <div className='home-bottom-slider-container'>
            {userList.map((user, id) => <div className='bottom-user' key={id} id={id} onClick={() => { selectedUser.style.border = "none"; changeUser(id) }}><img src={user.image} ></img>
                <div className="home-bottom-user-icons">

                    <img src={user.video ? videoOn : videoOff}></img>
                    <img src={user.audio ? audioOn : audioOff}></img>
                </div>
            </div>
            )}

        </div >
    )
}

export default HomeBottomSlider