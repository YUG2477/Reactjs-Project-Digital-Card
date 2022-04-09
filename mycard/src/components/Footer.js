import React from 'react';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';


export default function Info() {
    return (
        <div className='footer'>
            <span><FaTwitterSquare  className='icon'/></span>
            <span><FaFacebookSquare className='icon'/></span>
            <span><AiFillInstagram  className='icon'/></span>
            <span><AiFillGithub  className='icon'/></span>
           
            
        </div>
    )
}