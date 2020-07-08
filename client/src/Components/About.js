import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="about-us">
        <div className="home-nav">
        <Link to="/play">PLAY</Link>
        <Link to="/">HOME</Link>
        </div>

        <fieldset className="about-container">
        <legend className="about-head">Our Story</legend>
        <div className="about-desc">
        We are undergrads of IITM. We just thought why this boredom cannot be killed....and a solution is to that is where you are and what we have built.
        {
            // One small tiny teeny creature messed up our lives huh?. Not to worry the 4th dimension will take care. But boredom kills doesn't it.
            // Don't you wanna kill boredom!
        }
        </div>
        </fieldset>
        <fieldset id="team" className="about-container">
        <legend className="about-head">Team</legend>
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
        
        </div>
    )
}

export default About
