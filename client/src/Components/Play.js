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
        <React.Fragment>
        <div className="play-images-number">{index+1}</div>
        <img className="play-images" src={current} key={index} alt="img" />
        </React.Fragment>
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
      // alert("Bravo! The answer is correct"); // put a toast here
      document.getElementById('toast-correct').style.display = "block";
      window.setTimeout(function() { document.getElementById('toast-correct').style.display = "none"; }, 2500);

      setNumber(number + 1);
      setUserAnswer("");

    } else {
      document.getElementById('toast-incorrect').style.display = "block";
      window.setTimeout(function() { document.getElementById('toast-incorrect').style.display = "none"; }, 2500)
    }
  };

  const displayAnswer = (event) => {
    event.preventDefault();
    alert("The answer is " + allConnexions[number].answer);
    setNumber(number + 1);
    setUserAnswer('')
  };

  return (
    <div className="play-page">
    <div id="toast-correct" className="toast-correct">Bravo! Your answer is correct</div>
    <div id="toast-incorrect" className="toast-incorrect">Sorry! Your answer is wrong</div>

      {number === 0 && (
        <h1 className="play-page-head">Let's Connect... Shall we ?!</h1>
      )}

      {number < allConnexions.length && (
        <h1 className="play-page-head">Connexion #{number + 1}</h1>
      )}
      <h1 className="play-sub-head">Clue: {clue}</h1>

      <div id="imgLinks" className="play-images-container">{images}</div>
      <form className="play-form" onSubmit={submitHandler}>
        <input
          className="play-answer"
          type="text"
          placeholder="Enter you answer"
          value={userAnswer}
          onChange={userAnswerHandler}
        />
        <div id="button-container"style={!(number + 1 < allConnexions.length)?{flexDirection: "column", width:"100%", display:"flex", justifyContent: "center", alignItems: "center"}:{width:"100%", display:"flex", justifyContent: "center", alignItems: "center"}}>
        <button className="answer-button" style={{width: "150px", marginRight: "10px" }} type="submit">CONNECT</button>
        {number + 1 < allConnexions.length ? (<button className="answer-button" style={{width: "250px", }} onClick={displayAnswer}>SHOW ANSWER</button>) : (<h3 style={{marginTop: "20px"}} className="play-sub-head">That's it for now we'll add more!!!</h3>)}
        </div>
      </form>
    </div>
  );
}

export default Play;
