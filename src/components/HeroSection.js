import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src = "/videos/video-home.mp4" autoPlay loop muted={true} seekTo={30} />
            <h1>Modular Clinton Global</h1>
            <p>Creative solutions, Creative results</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
                
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('Hey')}>
                    Watch trailer <i className='far fa-play-circle' />
                </Button>
            </div>
            
        </div>
    );
}

export default HeroSection;
