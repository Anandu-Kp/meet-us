import React, { useState } from 'react'
import "./styles.css"
import Button from '../Common/Button'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"


function LandingMain() {
    const navigate = useNavigate();
    const [btnClicked, setBtnClicked] = useState(0)
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const fadeInVariants = {
        hidden: { opacity: 0, visibility: 'hidden' },
        visible: { opacity: 1, visibility: 'visible', transition: { duration: 1, delay: 1.5 } },
    };

    const login = () => {

        if (!name || !email) {
            alert("please give credentials")

        }
        else {
            navigate("/home")
        }

    }
    return (
        <div className='landing-main' >
            <motion.h2
                initial={{ y: 100 }}
                animate={{ y: -100 }}
                transition={{ duration: 1 }}
                className='title' >The Room</motion.h2>
            <motion.span
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                className='landing-quote'>"Your Space to Watch, Chat and Connect"</motion.span >
            {btnClicked == 0 && (<motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: 1.5 }}
                className='landing-moto'>At the room, we believe in the power of shared experience. Join us to enjoy movies, celebrate life and connect with friends and family.</motion.p>
            )}

            {btnClicked != 0 &&
                <div className="landing-form">
                    <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} ></input>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>}
            <div className='landing-btn' onClick={btnClicked == 1 ? login : (e) => { e.stopPropagation(); setBtnClicked(btnClicked + 1) }}><Button value={"Create Room"} /></div>
        </div>
    )
}

export default LandingMain