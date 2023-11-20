import React from 'react'
import "./styles.css"
function Button({ value }) {
    return (
        <div className='btn-container'>
            <button className='btn'>{value}</button>
        </div >
    )
}

export default Button