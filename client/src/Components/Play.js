import React, { useState, useEffect } from "react";
import axios from "axios";

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

  if (allConnexions[number]) {
    clue = allConnexions[number].clue
    images = allConnexions[number].links.map((current, index) => {
      return (
        <div className="single-image-container">
        <img className="play-images" src={current} key={index} alt="img" />
        <div className="play-images-number">{index+1}</div>
        </div>
        )
    });
  }


  const userAnswerHandler = (event) => {
    setUserAnswer(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      allConnexions[number].answer.toUpperCase() === userAnswer.toUpperCase()
    ) {
      document.getElementById('toast-correct').style.display = "block";
      window.setTimeout(function() { document.getElementById('toast-correct').style.display = "none"; }, 3000);

      setNumber(number + 1);
      setUserAnswer("");

    } else {
      document.getElementById('toast-incorrect').style.display = "block";
      window.setTimeout(function() { document.getElementById('toast-incorrect').style.display = "none"; }, 3000)
    }
  };

  const displayAnswer = (event) => {
    event.preventDefault();
    document.getElementById("answer-display").style.display = "block"
    document.getElementById("bg-overlay").style.display = "block"
  };

  const postAnswerDisplay = () => {
    document.getElementById("answer-display").style.display = "none"
    document.getElementById("bg-overlay").style.display = "none"
    setNumber(number + 1);
    setUserAnswer('')
  }

  const lastPage = () => {
    if(allConnexions[number-1]){
      if(number === allConnexions.length) {
        document.getElementById("play-sub-head").style.display = "none"
        document.getElementById("play-answer").style.display = "none"
        document.getElementById("connect").style.display = "none"
        return <h1 style={{color: "#ffffff"}}>That's it for now we'll add more!!!</h1>
      }
    }
  }

  return (
    <div className="play-page">
    <div className="bg-overlay" id="bg-overlay" />
    <div id="toast-correct" className="toast-correct">Bravo! Your answer is correct</div>
    <div id="toast-incorrect" className="toast-incorrect">Sorry! Your answer is wrong</div>
    <div id="answer-display" className="answer-display">
    <div>Connexion Genius is laughing at you!</div><br />
    <span>It's </span> <span style={{fontFamily: "Nexa-Bold"}}> {allConnexions[number] && allConnexions[number].answer}</span>
    <br /><br />
    <div onClick={postAnswerDisplay} style={{color: "#0074d9", float: "right", cursor: "pointer"}}>OHH DAMN!</div>
    </div>
    

      {number === 0 && (
        <h1 className="play-page-head">Let's Connect... Shall we ?!</h1>
      )}

      {number < allConnexions.length && (
        <h1 className="play-page-head">Connexion #{number + 1}</h1>
      )}
      <h1 id="play-sub-head" className="play-sub-head">Clue: {clue}</h1>

      <div id="imgLinks" className="play-images-container">{images}</div>
      <form className="play-form" onSubmit={submitHandler}>
        <input
          id="play-answer"
          className="play-answer"
          type="text"
          placeholder="Enter you answer"
          value={userAnswer}
          onChange={userAnswerHandler}
          title="Enter your answer!"
          required
        />
        <div id="button-container"style={!(number + 1 < allConnexions.length)?{flexDirection: "column", width:"100%", display:"flex", justifyContent: "center", alignItems: "center"}:{width:"100%", display:"flex", justifyContent: "center", alignItems: "center"}}>
        <button id="connect" className="answer-button" type="submit">CONNECT</button>
        {number < allConnexions.length && (<button id="show-answer" className="answer-button" onClick={displayAnswer}>SHOW ANSWER</button>)}
        {lastPage()}
        </div>
      </form>
    </div>
  );
}

export default Play;
