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
        <Link to='/about'>ABOUT US</Link>
      </div>
      <div className='steps-container'>
        {
          // <div className="howto-iframe" >
          // <div>
          // <iframe src="/play" title="Play page" frameborder="0" allowFullScreen={false} />
          // </div>
          // </div>
        }
        <div>
          <img src={img} width='90%' alt='howtoplay' />
        </div>

        <div className='howto-steps'>
          <h1>Step #1</h1>
          <h2>Look at the clue</h2>
          <h1>Step #2</h1>
          <h2>Look at the pictures in the given numbered order</h2>
          <h1>Step #3</h1>
          <h2>
            Use the given clue and connect all the pictures to form a phrase.
            Enter your answer in the field
            <br />
            Now all you gotta do is{" "}
            <span
              style={{
                backgroundColor: "#4ca541",
                padding: "3px",
                borderRadius: "3px",
              }}
            >
              CONNECT
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
