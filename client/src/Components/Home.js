import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
        <div className="home-nav">
        <Link to="/about">ABOUT US</Link>
        <Link to="/play">PLAY</Link>
        </div>
        
        <div className="welcome">
        <h3 className="home-subhead">WELCOME TO</h3>
        <h1 className="home-head">CONNEXIONS</h1>
        <Link className="home-play-button" to="/play"><strong>PLAY</strong></Link>
        </div>
        </div>
    )
}

export default Home
