import React from 'react'
import emailjs from 'emailjs-com'

import './Slider.css'

export default function Slider(){
    const onSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm('gmail', 'template_pyhznbh', e.target, 'HMgL6FsMr91-Vm5X9')
        .then(result => {
        alert('Message Sent, I\'ll get back to you shortly', result.text);
        },
        error => {
        alert( 'An error occured, Plese try again',error.text)
        })
        }
    return(
        <>
        <div className="s-container" >
            <div className="i-about">
                <p className='i-abou' id="slider">
                    Contact Me
                </p>
            </div>
            <div className="i-slider">
                <span className="i-box">
                    <div className="email">
                    <form className="formdesign" onSubmit = {onSubmit}>
                        <p className="i-text">Name:</p>
                        <div><input name='name' type="text" placeholder="Name…" className="form__input" required/></div>
                        <p className="i-text">Email:</p>
                        <div><input name='subject' type="text" placeholder="Email…" className="form__input" required /></div>
                        <p className="i-text">Message:</p>
                        <p><textarea name='message' type="text" placeholder="Your Message…" className="form__input-message" required ></textarea></p>
                        <button className="i-a-button">Send Message</button>
                    </form>
                    </div>
                    
                </span>
            </div>
            <hr />
            djn
        </div>
        
        </>
    );
}