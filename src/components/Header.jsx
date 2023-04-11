import React from 'react'
import ProfilePic from '../assets/pic.jpg'
import { FaFacebookSquare,FaInstagramSquare,FaGithub } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import resume from '../pdf/cv.pdf'

function header() {


  return (
    <div className='header-container'>
        <img src={ProfilePic} alt="" />
       
        <div className='profile-detail'>
            <h2>Geno Ureta</h2>
            <p>Software Developer</p>
            <div className='socmed-box'>
              <a href="https://www.facebook.com/genojo.ureta">
               <FaFacebookSquare/>
              </a>
                <FaInstagramSquare />
                <FaGithub/>
            </div>

            <div className='btn-cv-wrapper'>
                <button className='btn-cv' >
                  <a href={resume} download='Geno Ureta'>
                      Download CV
                      <MdDownload />
                  </a>
                </button>
            </div>
            
        </div>
       
    </div>
  )
}

export default header