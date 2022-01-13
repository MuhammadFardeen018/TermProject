import React from 'react'
import styled from 'styled-components'

import video from '../videos/home.mp4'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaBusinessTime } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { Button } from './Button';
import AboutUs from './AboutUs/AboutUs';
const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <HeroBg>
          <VideoBg src={video} type="video/mp4" autoPlay loop
            muted playsInline></VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroItems>
            <HeroH1>Get All products at one place </HeroH1>
            <HeroP>We deal in all neccessary products of daily life</HeroP>
            <Button primary="true" big="true" round="true" href="#" target="_blank">Shop Now</Button>
          </HeroItems>

        </HeroContent>
      </HeroContainer>

      <div className='container mb-5 mt-5'>
        <HeroH1>What our customers say </HeroH1>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">

            <div className="carousel-item active">
              <HeroP>All the Products are geniune and priced fairly.</HeroP>
              <HeroP>.Lorem Ipsum.</HeroP>
            </div>
            <div className="carousel-item">
              <HeroP>All the Products are geniune and priced fairly.</HeroP>
              <HeroP>.Lorem Ipsum.</HeroP>
            </div>
            <div className="carousel-item">
              <HeroP>All the Products are geniune and priced fairly.</HeroP>
              <HeroP>.Lorem Ipsum.</HeroP>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <AboutUs/>
    </div>
  )
}

export default Hero


const HeroContainer = styled.div`

background: #0c0c0c;
display: flex;
justify-content : center;
color : #fff; 
height: 100vh;
padding : 0 1rem;
position: relative;
margin-top : -80px;

:before{

    content: "";
    position: absolute;
    top: 0;
    bottom : 0;
    right : 0;
    left : 0;
    z-index: 2;
    background: linear-gradient(
     180deg,
     rgba(0,0,0,0.2) 0%,
     rgba(0,0,0,0.6) 100%
    ),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%,  transparent 100%);
}

`

const HeroBg = styled.div`
position : absolute;
top: 0;
bottom : 0;
right : 0;
left : 0;
width : 100%;
height : 100%;
overflow: hidden;
`

const VideoBg = styled.video`
width : 100%;
height: 100%;
-o-object-fit : cover;
object-fit: cover;
`

const HeroContent = styled.div`
z-index  : 3;
height : calc(100vh - 80px);
max-height : 100%;
padding : 0rem calc((100vw - 1300px)/2);

`

const HeroItems = styled.div`
display : flex;
flex-direction: column;
justify-content: center;
align-items : center;
text-align : center;
height: 100vh;
max-height: 100%;
padding : 0;
color : #fff;
line-height: 1.1;
font-weight : bold;     

`


const HeroH1 = styled.h1`
font-size: clamp(1.2rem, 4vw , 3rem);
margin-bottom: 1.5rem;
letter-spacing: 3px;
padding: 0 1rem;
font-family : 'Poppins';
`


const HeroP = styled.p`
font-size: clamp(0.5rem, 2vw , 2rem);
margin-bottom: 2rem;
font-weight: 400;
font-family : 'Poppins';

`