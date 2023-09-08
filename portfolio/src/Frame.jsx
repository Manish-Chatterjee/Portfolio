import React from "react";
import Name from './nameMov.json'
import Developer from './Developer.json'
import Lottie, { LottiePlayer } from 'lottie-react'
import ProfilePic from './images/desk.gif'
import AboutMeImage from './images/about_me_image.png'
import NameImg from './images/name.png'
import {FlippingCardGraphic, FlippingCardUx, FlippingCardWebDev} from "./component/FlippingCard";
import Work from "./component/Work";
import Certificate from "./component/Certificate";
import weatherApp from './images/weatherApp.png'
import todoListApp from './images/todoList.png'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi'
import { BsDiscord } from 'react-icons/bs'
import { Nav, NavLink } from "react-bootstrap";

const Frame = () => {
    return (
        <div className="portfolio-web">
            <div className="div">
                <div className="resume"><a href="https://drive.google.com/drive/folders/1vswDF68NisnfYedZeOErIWBaH69Eg9TC?usp=sharing" target="_blank">Resume</a></div>
                <header className="header">
                    <div className="div-wrapper">
                        <div className="text-wrapper-8">
                        <NavLink href="#certificate">Certificates</NavLink>
                        </div>
                    </div>
                    <div className="work-wrapper">
                        <div className="text-wrapper-8">
                        <NavLink href="#work">Work</NavLink>
                        </div>
                    </div>
                    <div className="skills-wrapper">
                        <div className="text-wrapper-8">
                        <NavLink href="#skills">Skills</NavLink>
                        </div>
                    </div>
                    <div className="about-wrapper">
                        <div className="text-wrapper-8">
                        <NavLink href="#about">About</NavLink>
                        </div>
                    </div>
                    <div className="home-wrapper">
                        <div className="text-wrapper-8">
                        <NavLink href="#home">Home</NavLink>
                        </div>
                    </div>
                    <div className="text-wrapper-9">PORTFOLIO</div>
                </header>
                <footer className="footer">
                    <div className="text-wrapper">Manish Chatterjee</div>
                    <div className="text-wrapper-2">Personal Portfolio Website</div>
                    <div className="socials">
                        <div className="text-wrapper-3">Ways to connect</div>
                        <div className="insta">
                            <a href='https://instagram.com/_manish_._chatterjee_?igshid=ogq5zdc2odk2za==' target='_blank'><AiFillInstagram /></a>
                        </div>
                        <div className="linked-in">
                           <a href='http://linkedin.com/in/manish-chatterjee1602' target='_blank'><AiFillLinkedin /></a>
                        </div>
                        <div className="discord">
                            <a href='https://discord.gg/A2kzHsGr' target='_blank'><BsDiscord /></a>
                        </div>
                    </div>
                </footer>
                <div className="overlap">
                    <div className="certificate" id="certificate">
                        <div className="text-wrapper-4">Certificates</div>
                        <div className="certificate-section" data-aos="flip-up">
                            <Certificate/>
                        </div>
                    </div>
                    <div className="work" id="work">
                        <div className="text-wrapper-5">Work</div>
                        <div className="weather-app" data-aos="fade-right">
                            <a href='https://github.com/Manish-Chatterjee' target='_blank'>
                                <img
                                className='works'
                                src={weatherApp}
                                alt='weather app'
                                height="100%"
                                />
                                <div className='app'>
                                <p>Weather App</p>
                                </div>
                            </a>
                        </div>
                        <div className="to-do-list" data-aos="fade-left">
                        <a href='https://github.com/Manish-Chatterjee' target='_blank'>
                            <img
                            className='works'
                            src={todoListApp}
                            alt='weather app'
                            height="100%"
                            />
                            <div className='app'>
                            <p>TO-DO List</p>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="skills" id="skills">
                        <div className="text-wrapper-6">Skills</div>
                        <div className="UXUI" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="400">
                            <FlippingCardUx/>
                        </div>
                        <div className="WEB-DEV" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <FlippingCardWebDev/>
                        </div>
                        <div className="GRAPHIC-ILLUSTRATOR" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
                            <FlippingCardGraphic/>
                        </div>
                    </div>
                    <div className="about" id="about">
                        <div className="text-wrapper-7">About Me</div>
                        <div className="overlap-group">
                            <p className="innovative-web" data-aos="fade-down-right">
                                Innovative web designer and a passionate front-end developer. Knowledgeable in various frameworks &amp;
                                libraries, and have skills to produce appealing responsive websites. Apart from this have worked with 3D
                                modelling programs like Blender and Maya, and have utilised a significant amount of time on creating
                                graphical illustrations.
                            </p>
                            <img className="about-me-image " data-aos="fade-up-left" alt="About me image" src={AboutMeImage} />
                        </div>
                    </div>
                    <div className="home" id="home">
                        <div className="overlap-2">
                            <div className="frame" />
                            <img className="profile-pic" alt="Profile pic" src={ProfilePic} />
                        </div>
                        <div className="developer-animation" data-aos="fade-down"><Lottie animationData={Developer}/></div>
                        <div className="name-animation" data-aos="fade-down">
                            {/* <Lottie animationData={Name} loop={false}/> */}
                            <img className="NameImg" src={NameImg} alt="name"/>
                        </div>
                        <div className="hi-myself">
                            <p>Hi, Myself</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Frame;