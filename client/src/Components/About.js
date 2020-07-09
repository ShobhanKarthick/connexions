import React from 'react'
import { Menu, Close, Mail, Instagram } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function About() {

    const open = () =>{
        document.getElementById("home-nav").style.display = "flex"
    }

    const close = () =>{
        document.getElementById("home-nav").style.display = "none"
    }

    return (
        <div className="about-us">
        <div className="head-container">
        <div style={{width: "100%", boxSizing: "border-box"}}>
        <h1 id="home-head" className="home-head">CONNEXIONS</h1>
        <p id="sub-head" style={{width: "fit-content", margin: 0, }} >About Us</p>
        </div>
        <Menu onClick={open} style={{color: "#ffffff", fontSize: "40px",}} />
        </div>
        <div id="home-nav" className="home-nav">
        <Close onClick={close} style={{color: "#ffffff", fontSize: "40px", alignSelf: "flex-end"}} />
        <Link to="/">HOME</Link>
        <Link to="/howtoplay">HOW TO PLAY</Link>
        <Link to="/play">PLAY</Link>
        </div>

        <fieldset className="about-container">
        <legend className="about-head">Our Story</legend>
        <div className="about-desc">
            Just a bunch of undergrads from IIT-M, who are connected by one interest, and that is connecting you folks through this supercool game! It all started one day when we started playing this game among ourselves, when we realised how fun it was and then decided to spread the connection! These are some difficult times, so if you enjoy this game, please spread the word (nothing else), and let's make this great game viral!        {
            // One small tiny teeny creature messed up our lives huh?. Not to worry the 4th dimension will take care. But boredom kills doesn't it.
            // Don't you wanna kill boredom!
        }
        </div>
        </fieldset>
        <fieldset id="team" className="about-container">
        <legend id="team-head" className="about-head">Team</legend>
        <div className="about-desc">
            <div className="person">
            <img className="avatar" src={require('./Images/people-03.svg')} alt="Shobhan"/>
            <div>
            <h2 className="name">SHOBHAN</h2>
            <h5 className="position">Leader</h5>
            </div>
            </div>
            <div className="person">
            <img className="avatar" src={require('./Images/people-04.svg')} alt="Varshini"/>
            <div>
            <h2 className="name">VARSHINI</h2>
            <h5 className="position">Leader</h5>
            </div>
            </div>
            <div className="person">
            <img className="avatar" src={require('./Images/people-02.svg')} alt="Deva"/>
            <div>
            <h2 className="name">DEVA</h2>
            <h5 className="position">Leader</h5>
            </div>
            </div>
            <div className="person">
            <img className="avatar" src={require('./Images/people-05.svg')} alt="Sanjay"/>
            <div>
            <h2 className="name">SANJAY</h2>
            <h5 className="position">Leader</h5>
            </div>
            </div>
            <div className="person">
            <img className="avatar" src={require('./Images/people-03.svg')} alt="Deepak"/>
            <div>
            <h2 className="name">DEEPAK</h2>
            <h5 className="position">Leader</h5>
            </div>
            </div>
            <div className="person">
            <img className="avatar" src={require('./Images/people-02.svg')} alt="Yoghesh"/>
            <div>
            <h2 className="name">YOGHESH</h2>
            <h5 className="position">Leader</h5>
            </div>
            </div>
            </div>
        </fieldset>
        <div className="footer">
            <p>Contact: <strong>+91 6385 188 219</strong></p>
            <p id="copyright">&copy; {new Date().getFullYear()} Connexions <h5>Developed by <span style={{fontFamily: "Nexa-Bold"}}>Shobhan Karthick</span></h5> </p>
            <p>
            <a className="icons" href="https://www.instagram.com/insti_connexions/" ><Instagram /></a>
            <a className="icons" href="mailto:connexionsgame@gmail.com" ><Mail /></a>
            </p>
        </div>
        
        </div>
    )
}

export default About
