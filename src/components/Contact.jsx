import React from 'react'
import "./Contact.css"

export default function Contact() {
    return (
        <div className='contacts'>
            <h1>HYDROPONIC FARMING! GET YOUR OWN FARM NOW!</h1>
            <div className="contact">
                <div className="left">
                    <p>FILL THIS SHORT FORM, WE WILL CALL YOU RIGHT AWAY</p>
                    <div className="form">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Contact No.' />
                        <input type="text" placeholder='Your City' />
                        <input type="text" placeholder='Size of Land' />
                        <textarea placeholder='Comments'></textarea>
                        <button>Submit</button>
                    </div>
                </div>
                <div className="right">
                    <img src="images/robot.jpg" alt="plants" />
                </div>
            </div>
        </div>
    )
}
