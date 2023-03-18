import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {
    faNodeJs,
    faCss3,
    faJava,
    faPython,
    faGithub,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
    return (
        <>
          <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
              I'm currently a computer science student 
                looking for a role or internship with the 
                opportunity to work and tinker with the latest
                tech on projects.
              </p>
              <p align="LEFT">
              I'm a curious individual, always pursuing new ideas, and am always working on
                improving my skills one by one.
              </p>
              <p>
              Please check out my Github for my projects. Creation
                has been always one of my driving inspirations. I want to make something I can be proud of one day.
              </p>
            </div>
    
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faPython} color="#3776AB" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faGithub} color="#fff" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faJava} color="#f89820" />
                </div>
              </div>
            </div>
          </div>
          <Loader type = "pacman"/>
        </>
      )
    }

export default About