import React from 'react'
import Figma from '../images/figma.png'
import Invision from '../images/invision.png'
import ReactImage from '../images/reactImage.png'
import Javascript from '../images/javascript.png'
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import Spline from '../images/spline.png'
import Procreate from '../images/procreate.png'

const FlippingCardUx = () => {
  return (
    <div className="maincontainer">

        <div className="thecard">

        <div className="thefront" id='uxui'>
          <h1>UX/UI Designer</h1>
        </div>

        <div className="theback">
          <p>Creating Websites using Figma and Invision helps for faster development and maintains accuracy for reactive and user-friendly websites</p>
          <img className='skills_icon' src={Figma} alt='icon'/>
          <img className='skills_icon' src={Invision} alt='icon'/>
        </div>

        </div>
    </div>
  )
}

const FlippingCardWebDev = () => {
  return (
    <div className="maincontainer">

        <div className="thecard">

        <div className="thefront" id='web'>
          <h1>Web Developer</h1>
        </div>

        <div className="theback">
          <p>Website development using React and Javascript helps to create production-ready sites and easy to debug or make changes for future enhancement</p>
          <img className='skills_icon' src={ReactImage} alt='icon'/>
          <img className='skills_icon' src={Javascript} alt='icon'/>
          <img className='skills_icon' src={HTML} alt='icon'/>
          <img className='skills_icon' src={CSS} alt='icon'/>
        </div>

        </div>
    </div>
  )
}

const FlippingCardGraphic = () => {
  return (
    <div className="maincontainer">

        <div className="thecard">

        <div className="thefront" id='graphic'>
          <h1>Graphical Illustrator</h1>
        </div>

        <div className="theback">
          <p>Creating eye-catching graphic designs to make it more attractive for the user to scroll for further info in a short visual helps to stay connected longer</p>
          <img className='skills_icon' src={Procreate} alt='icon'/>
          <img className='skills_icon' src={Spline} alt='icon'/>
        </div>

        </div>
    </div>
  )
}

export {FlippingCardUx, FlippingCardWebDev, FlippingCardGraphic}
