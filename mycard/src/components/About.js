import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

export default function Info() {
    return (
        <div className='about'>
            <h1> Yugal Patidar</h1>
            <h3 className='title'>Frontend Developer</h3>
            <h2>Thunder.com</h2>
            <button className='button'><span><AiOutlineMail /></span>  Email</button>
            <h3 className='header'>About</h3>
            <p className='text'>
                Rightnow I am learning Reactjs from freecodecamp.org , feeling very excited to work on varies practice project.
                i have already learned about html , css and javascripts .
            </p>
            <h3 className='header'>Interests</h3>
            <p className='text'>
                Especially having Interested in Web development , Gaming and sharing thoughts about  Web development on twitter .
                In future want to be FULL STACK Developer.
            </p>
        </div>
    )
}