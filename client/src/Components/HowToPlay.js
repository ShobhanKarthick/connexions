import React from "react";
import { Menu, Close } from "@material-ui/icons";
import { Link } from "react-router-dom";

function HowToPlay() {
  const img = require("./Images/howtoplay_ss.png");
  const open = () => {
    document.getElementById("home-nav").style.display = "flex";
  };

  const close = () => {
    document.getElementById("home-nav").style.display = "none";
  };

  return (
    <div className='howtoplay'>
      <div className='head-container'>
        <div style={{ width: "100%", boxSizing: "border-box" }}>
          <h1 id='home-head' className='home-head'>
            <a href='/'>CONNEXIONS</a>
          </h1>
          <p id='sub-head' style={{ width: "fit-content", margin: 0 }}>
            How to play
          </p>
        </div>
        <Menu onClick={open} style={{ color: "#ffffff", fontSize: "40px" }} />
      </div>
      <div id='home-nav' className='home-nav'>
        <Close
          onClick={close}
          style={{ color: "#ffffff", fontSize: "40px", alignSelf: "flex-end" }}
        />
        <Link to='/'>HOME</Link>
        <Link to='/play'>PLAY</Link>
        <Link to='/leaderboard'>LEADERBOARD</Link>
        <Link to='/about'>ABOUT US</Link>
      </div>
      <div className='steps-container'>
        <div>
          <img src={img} width='90%' alt='howtoplay' />
        </div>

        <div className='howto-steps'>
          <h1 style={{margin: 0}}>Step #1</h1>
          <h2>See the pictures in the given order</h2>
          <h1 style={{margin: 0}}>Step #2</h1>
          <h2>Try to guess the phrase according to the category you picked</h2>
          <h2 style={{lineHeight: 1.5}}>Like in the picture given, Lion (Sher) + Lock + Homes <br /> Hence, its Sherlock Holmes </h2>
          <h1 style={{margin: 0}}>Step #3</h1>
          <h2 style={{lineHeight: 1.75}}>
            Enter your answer in the field.
            <br />
            Now all you gotta do is {" "}
            <span
              style={{
                backgroundColor: "#4ca541",
                padding: "3px",
                borderRadius: "3px",
              }}
            >
              CONNECT
            </span>
            <br />
            If you are not able to figure it out, Take a look at the answer and it wil be available only after 20 seconds
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
