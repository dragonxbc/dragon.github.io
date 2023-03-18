import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['B','r','a','n','d','o','n']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])
      
    
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />   
                <span className={`${letterClass} _12`}>I</span>
                <span className={`${letterClass} _12`}>'m  </span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx = {15} />
                </h1>
                <h2>Computer Science Student / Aspiring Game Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT</Link>
            </div>
            <Logo />

        </div>
        <Loader type = "pacman"/>
        </>
    );
}

export default Home