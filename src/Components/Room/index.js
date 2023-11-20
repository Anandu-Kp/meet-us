import "./styles.css"

import React, { useState } from 'react'
import pic1 from "../../Assets/images/pic1.jpg"
import pic2 from "../../Assets/images/pic2.jpg"
import pic3 from "../../Assets/images/pic3.jpg"
import pic4 from "../../Assets/images/pic4.jpg"
import pic5 from "../../Assets/images/pic5.jpg"
import pic6 from "../../Assets/images/pic6.jpg"
import pic7 from "../../Assets/images/pic7.jpg"
import HomeBottomSlider from "../HomeBottomSlider"
import MenuBox from "../MenuBox"
import audioOff from "../../Assets/icons/audio-off.svg"
import audioOn from "../../Assets/icons/audio.svg"
import videoOff from "../../Assets/icons/video-off.svg"
import videoOn from "../../Assets/icons/video.svg"
import Tools from "../Tools"


function Room() {

    const userList = [{
        name: "anandu",
        video: true,
        audio: false,
        image: pic1
    }, {
        name: "kartik",
        video: false,
        audio: true,
        image: pic2
    }, {
        name: "aswanth",
        video: true,
        audio: true,
        image: pic3
    }, {
        name: "aju",
        video: false,
        audio: false,
        image: pic4
    }, {
        name: "elon",
        video: true,
        audio: false,
        image: pic5
    }, {
        name: "zuck",
        video: true,
        audio: false,
        image: pic6
    }, {
        name: "user",
        video: false,
        audio: true,
        image: pic7
    }]
    const [currentUser, setCurrentUser] = useState(0)
    const [activeMenu, setActiveMenu] = useState("participants")



    return (
        <div className='room-container'>
            <div className="room-main">
                <div className="room-left">
                    <div className="current-user">
                        <img className="current-user" src={userList[currentUser].image}></img>
                        <div className="user-icons">
                            <img src={userList[currentUser].video ? videoOn : videoOff}></img>
                            <img src={userList[currentUser].audio ? audioOn : audioOff}></img>
                        </div>
                    </div>
                    <HomeBottomSlider userList={userList} currentUser={currentUser} setCurrentUser={setCurrentUser} />

                </div>
                <div className="room-right" >
                    <MenuBox userList={userList} activeMenu={activeMenu} />
                </div>
            </div>
            <Tools setActiveMenu={setActiveMenu} />
        </div>
    )
}

export default Room