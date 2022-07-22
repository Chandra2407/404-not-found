import React from 'react'
import img from '../assets/Scarecrow.png'

const Main = () => {
    return (
        <div className='main'>
            <div className="img-container">
                <img src={img}alt="name" />
            </div>
            <div className="details">
                <div className="first">
                    <h3>I have bad news for you</h3>
                </div>
                <div className="second">
                    <p>The page you are looking for might be removed or is temporarily unavailable</p>
                </div>
                <div className="third">
                    <button>back to homepage</button>
                </div>
            </div>
        </div>
    )
}

export default Main