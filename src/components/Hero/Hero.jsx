import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from './../../assets/hero_image.png';
import hero_image_back from './../../assets/hero_image_back.png';
import Heart from './../../assets/heart.png';
import Calories from './../../assets/calories.png';

const Hero = () => {
  return (
    <div className="hero">
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>
            {/* The best add */}
            <div className="the-best-ad">
                <div></div>
                <span>BodyFit Gym - Seasons, Kasarani, Nairobi</span>
            </div>
            {/* The hero heading */}
        <div className="hero-text">
          <div><span className='stroke-text'>Shape </span><span>Your</span></div>
          <div><span>Ideal body</span></div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to the fullest</span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness program</span>
          </div>
        </div>
        {/* Hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>
          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
          </div>
          {/* hero images */}
          <img src={hero_image} alt="" className='hero_image' />
          <img src={hero_image_back} alt="" className='hero_image_back' />
          {/* Calories */}
          <div className="calories">
            <img src={Calories} alt="" />
            <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Hero
