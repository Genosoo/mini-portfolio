import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs';


function Skills() {
  return (
    <div className='skills-container'>
        <div className='skills-box'>
            <h3>Front-end developer</h3>

            <div className="skills-detail">
                <div className="skills-cube">
                    <h5><BsCheckCircleFill/> HTML</h5>
                    <span>Intermediate</span>
                </div>

                <div className="skills-cube">
                    <h5><BsCheckCircleFill/> CSS</h5>
                    <span>Intermediate</span>
                </div>


                <div className="skills-cube">
                    <h5><BsCheckCircleFill/> JavaScript</h5>
                    <span>Intermediate</span>
                </div>

                <div className="skills-cube">
                    <h5><BsCheckCircleFill/> React</h5>
                    <span>Intermediate</span>
                </div>

                <div className="skills-cube">
                    <h5><BsCheckCircleFill/> Boostrap</h5>
                    <span>Intermediate</span>
                </div>

                <div className="skills-cube">
                    <h5><BsCheckCircleFill/> Django</h5>
                    <span>Intermediate</span>
                </div>

            </div>

        </div>
        <div className='skills-box'>
            <h3>Backend-end developer</h3>

            <div className="skills-detail">
                <div className="skills-cube">
                    <h5><BsCheckCircleFill/> Nodejs</h5>
                    <span>Basic</span>
                </div>

                <div className="skills-cube ">
                    <h5><BsCheckCircleFill/> MongoDB</h5>
                    <span>Basic</span>
                </div>


              

               
                <div className="skills-cube">
                    <h5><BsCheckCircleFill/> Python</h5>
                    <span>Intermediate</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills