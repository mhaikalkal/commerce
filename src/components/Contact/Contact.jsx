import React from 'react'
import './Contact.scss'

import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <div className="socialCaption">
                <p>Keep in Touch :</p>
            </div>
            <div className="socialMail">
                <input type="email" name="" id="" placeholder='Insert Your Email..'/>
                <button>Join Us</button>
            </div>
            <div className="social">
            

                <Link className="icon"><InstagramIcon style={{color:'white'}}/></Link>
                <Link className="icon"><GoogleIcon style={{color:'white'}}/></Link>
                <Link className="icon"><GitHubIcon style={{color:'white'}}/></Link>
                <Link className="icon"><LinkedInIcon style={{color:'white'}}/></Link>
            </div>
        </div>
    </div>
  )
}

export default Contact