import React, { useState, useEffect } from "react";
import { Menu, Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import generateHash from "random-hash";


function PlayId() {
  let params = useParams();
  const [allConnexions, setAllConnexions] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [number, setNumber] = useState(0);
  const [random, setRandom] = useState("");
  const [executed, setExecuted] = useState(false);
  const [timer, setTimer] = useState(0);
  // const [imageLoad, setImageLoad] = useState(null)
  const history = useHistory();
  const shuffleSeed = require("shuffle-seed");

  let images, clue;
  let imageLoad = false;
  // let firstVisitCheck = localStorage.getItem("firstVisit")

  // if(!firstVisitCheck){
  //   history.push("/tutorial")
  // }
  // else{}

  useEffect(() => {
    if (!executed) {
      setRandom(generateHash({ length: 7 }));
      setExecuted(true);
      return;
    }
  },[])


  useEffect(() => {
    console.log(0)
    axios.get("/connexions/edit/"+params.id).then((response) => {
      console.log(1,response)
      let results = [response.data]
      setAllConnexions(results);
      console.log(4)
    });
  }, [random, shuffleSeed]);


    if(!(document.getElementsByClassName("single-image-container").length === 0)){
      if(document.getElementById("loader")){

        document.getElementById("loader").style.display = "none";
      }
    }
  

  useEffect(() => {
    if (
      history.action === "PUSH" ||
      history.action === "POP" ||
      history.action === "REPLACE"
    ) {
    } else {
    }
    return () => {
      if (window.location.pathname === "/") {
        console.log("back");
        history.push("/popup");
      }
    };
  }, [history]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  if (
    document.getElementById("hold-on-info") &&
    document.getElementById("hold-on-info").style.display === "block"
  ) {
    window.setTimeout(function () {
      document.getElementById("hold-on-info").style.display = "none";
    }, 3000);
  }

  const handleImageLoad = () => {
    imageLoad = (true)
    console.log(imageLoad)
    console.log("loaded")
  }


  if (allConnexions[number]) {
    clue = allConnexions[number].clue;
    images = allConnexions[number].links.map((current, index) => {
      return (
        <div className='single-image-container' id="single-image-container" key={index}>
          <img className='play-images' onLoad={handleImageLoad} src={current} alt='img' />
          <div className='play-images-number'>{index + 1}</div>
        </div>
      );
    });
  }

  const userAnswerHandler = (event) => {
    setUserAnswer(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      allConnexions[number].answer.toUpperCase().replace(/\s/g,'') === userAnswer.toUpperCase().replace(/\s/g,'')
    ) {
      document.getElementById("toast-correct").style.display = "block";
      window.setTimeout(function () {
        document.getElementById("toast-correct").style.display = "none";
      }, 3000);

      setNumber(number + 1);
      setTimer(0);
      setUserAnswer("");
      window.scrollTo(0, 100);
      axios.put('/connexions/update/'+allConnexions[number]._id, {winCount: allConnexions[number].winCount+1});
    } else {
      document.getElementById("toast-incorrect").style.display = "block";
      window.setTimeout(function () {
        document.getElementById("toast-incorrect").style.display = "none";
      }, 3000);
    }
  };

  const displayAnswer = (event) => {
    event.preventDefault();

    if (timer > -1) {
      document.getElementById("answer-display").style.display = "block";
      document.getElementById("bg-overlay").style.display = "block";
      axios.put('/connexions/update/'+ allConnexions[number]._id, {lossCount: allConnexions[number].lossCount+1});
    } else {
      document.getElementById("hold-on-info").style.display = "block";
    }
  };

  const postAnswerDisplay = () => {
    document.getElementById("answer-display").style.display = "none";
    document.getElementById("bg-overlay").style.display = "none";
    setTimer(0);
    setNumber(number + 1);
    setUserAnswer("");
    window.scrollTo(0, 100);
  };

  const lastPage = () => {
    if (allConnexions[number - 1]) {
      if (number === allConnexions.length) {
        // document.getElementById("play-sub-head").style.display = "none";
        document.getElementById("play-answer").style.display = "none";
        document.getElementById("connect").style.display = "none";
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ margin: "20px", color: "#ffffff" }}>
              That's it for now we'll add more!!!
            </h1>
            <div
              to='/play'
              onClick={() => window.location.reload()}
              className='play-again'
            >
              PLAY AGAIN
            </div>
          </div>
        );
      }
    }
  };

  const holdOnInfo = () => {
    if (20 - timer > 0) {
      return (
        <React.Fragment>
          You can see the answer in {20 - timer} secs.
          <br /> So, Hold your horses and think baby!!!
        </React.Fragment>
      );
    } else {
      return <React.Fragment>You can now see the answer !!!</React.Fragment>;
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
      <div id='hold-on-info' className='hold-on-info'>
        {holdOnInfo()}
      </div>
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
        {
          //   <h1 id='play-sub-head' className='play-sub-head'>
          //   Clue: {clue}
          // </h1>
        }
      </div>

      <div id='imgLinks' className='play-images-container'>
        {images}
      </div>
        <div className='loader' id='loader' />

      <form id='play-form' className='play-form' onSubmit={submitHandler}>
        <input
          id='play-answer'
          className='play-answer'
          type='text'
          placeholder='Enter your answer'
          value={userAnswer}
          onChange={userAnswerHandler}
          title='Enter your answer!'
          required
        />
        <div id='button-container' className='button-container'>
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

export default PlayId;
