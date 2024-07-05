import React from 'react'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
            <div className='socialMedia'>
            <a href="https://github.com/ChandrasoodanRaman" target="_blank" rel="noopener noreferrer">
            <GithubIcon></GithubIcon>
            </a>
            <a href='https://www.linkedin.com/in/chandrasoodan/' target='_blank' rel='noopener no referrer'>
                <LinkedIcon></LinkedIcon>
            </a>
                <EmailIcon></EmailIcon>
                <EmailIcon></EmailIcon>
            </div>
    </div>
  )
}

export default Footer
