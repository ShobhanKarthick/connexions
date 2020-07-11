import React, { useState, useEffect } from "react";
import { Menu, Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

function Play() {
  const [allConnexions, setAllConnexions] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [number, setNumber] = useState(0);
  let images, clue;

  useEffect(() => {
    axios.get("/connexions").then((response) => {
      setAllConnexions(response.data);
    });
  }, [allConnexions]);

  // if(number === 0){
  //   if(allConnexions){
  //     let shuffled = allConnexions.sort(() => Math.random() - 0.5)
  //     console.log(shuffled)
  //   }
  // }

  if (allConnexions[number]) {
    clue = allConnexions[number].clue;
    images = allConnexions[number].links.map((current, index) => {
      return (
        <div className='single-image-container'>
          <img className='play-images' src={current} key={index} alt='img' />
          <div className='play-images-number'>{index + 1}</div>
        </div>
      );
    });
  }
  else{
    images = () => {return <Loader />}
  }

  const userAnswerHandler = (event) => {
    setUserAnswer(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      allConnexions[number].answer.toUpperCase() === userAnswer.toUpperCase()
    ) {
      document.getElementById("toast-correct").style.display = "block";
      window.setTimeout(function () {
        document.getElementById("toast-correct").style.display = "none";
      }, 3000);

      setNumber(number + 1);
      setUserAnswer("");
    } else {
      document.getElementById("toast-incorrect").style.display = "block";
      window.setTimeout(function () {
        document.getElementById("toast-incorrect").style.display = "none";
      }, 3000);
    }
  };

  const displayAnswer = (event) => {
    event.preventDefault();
    document.getElementById("answer-display").style.display = "block";
    document.getElementById("bg-overlay").style.display = "block";
  };

  const postAnswerDisplay = () => {
    document.getElementById("answer-display").style.display = "none";
    document.getElementById("bg-overlay").style.display = "none";
    setNumber(number + 1);
    setUserAnswer("");
    window.scrollTo(0, 100);
  };

  const lastPage = () => {
    if (allConnexions[number - 1]) {
      if (number === allConnexions.length) {
        document.getElementById("play-sub-head").style.display = "none";
        document.getElementById("play-answer").style.display = "none";
        document.getElementById("connect").style.display = "none";
        return (
          <h1 style={{ margin: "10px", color: "#ffffff" }}>
            That's it for now we'll add more!!!
          </h1>
        );
      }
    }
  };

  const open = () => {
    document.getElementById("home-nav").style.display = "flex";
  };

  const close = () => {
    document.getElementById("home-nav").style.display = "none";
  };

  return (
    <div className='play-page'>
      <div className='head-container'>
        <div style={{ width: "100%", boxSizing: "border-box" }}>
          <h1 id='home-head' className='home-head'>
            <a href='/'>CONNEXIONS</a>
          </h1>
          <p id='sub-head' style={{ width: "fit-content", margin: 0 }}>
            Play
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
        <Link to='/howtoplay'>HOW TO PLAY</Link>
        <Link to='/about'>ABOUT US</Link>
      </div>
      <div className='bg-overlay' id='bg-overlay' />
      <div id='toast-correct' className='toast-correct'>
        Bravo! Your answer is correct
      </div>
      <div id='toast-incorrect' className='toast-incorrect'>
        Sorry! Your answer is wrong
      </div>
      <div id='answer-display' className='answer-display'>
        <div>Connexion Genius is laughing at you!</div>
        <br />
        <span>It's </span>{" "}
        <span style={{ fontFamily: "Nexa-Bold" }}>
          {allConnexions[number] && allConnexions[number].answer}
        </span>
        <br />
        <br />
        <div
          onClick={postAnswerDisplay}
          style={{ color: "#0074d9", float: "right", cursor: "pointer" }}
        >
          OHH DAMN!
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {number === 0 && (
          <h1 className='play-page-head'>Let's Connect... Shall we ?!</h1>
        )}

        {number < allConnexions.length && (
          <h1 className='play-page-head'>Connexion #{number + 1}</h1>
        )}
        <h1 id='play-sub-head' className='play-sub-head'>
          Clue: {clue}
        </h1>
      </div>

      <div id='imgLinks' className='play-images-container'>
        {
          images
          ? images
          : !(number === allConnexions.length) && <Loader id='loader' />
        }

        {
          // images
        }
      </div>
      <form className='play-form' onSubmit={submitHandler}>
        <input
          id='play-answer'
          className='play-answer'
          type='text'
          placeholder='Enter you answer'
          value={userAnswer}
          onChange={userAnswerHandler}
          title='Enter your answer!'
          required
        />
        <div
          id='button-container'
          style={
            !(number + 1 < allConnexions.length)
              ? {
                  flexDirection: "column",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }
              : {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          <button id='connect' className='answer-button' type='submit'>
            CONNECT
          </button>
          {number < allConnexions.length && (
            <button
              id='show-answer'
              className='answer-button'
              onClick={displayAnswer}
            >
              SHOW ANSWER
            </button>
          )}
          {lastPage()}
        </div>
      </form>
    </div>
  );
}

export default Play;
