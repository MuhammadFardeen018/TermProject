import React, { Component } from 'react'
import './Aboutus.css';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import {FaBusinessTime } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';



export default class AboutUs extends Component {
    render() {
        return (
            <div className='aboutus'>
                <div className="AU-main">
                    <div className='main-text'>
                        <h5>Our Company</h5>
                        <p>About Khareedlo | Missions and Values | Our Story | Leadership</p>    
                    </div>                    
                </div>
                <div className='about-tt'>About Khareedlo</div>
                <div className='container'>
                    <div className='row'>
                        <div className='col md-6 me-2'>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className='col-md-6 ms-2'>
                            <img src={img1} class="card-img-top" alt="..."/>
                        </div>
                    </div>

                    <div className='row mt-5 me-2'>
                        <div className='col-md-6 mt-5'>
                            <img src={img2} class="card-img-top" alt="..."/>
                        </div>

                        <div className='col md-6 mt-5 ms-2'>
                            <p className='text-right'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>

                    <div className='storelocations'>
                    <div className="row mt-5">
                        <div className="col-md-3 fs-2" ><FaPhoneAlt /><br /> PHONE <br /><span className='fs-6'>+01-3-8888-6868</span></div>
                        <div className="col-md-3 fs-2" ><FaLocationArrow /><br /> ADDRESS <br /><span className='fs-6'>60-49 Road 11378 New York</span></div>
                        <div className="col-md-3 fs-2" ><FaBusinessTime /><br /> OPEN TIME <br /><span  className='fs-6'>10:00 am to 23:00 pm</span></div>
                        <div className="col-md-3 fs-2" ><FaMailBulk /><br /> EMAIL <br /><span className='fs-6'>hello@ogani.com</span></div>
                    </div>
                    </div>
                    

                </div>
             
            </div>
        )
    }
}