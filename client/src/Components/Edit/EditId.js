import React, { useState, useEffect } from "react";
import axios from "axios";
import { Add, Close } from "@material-ui/icons";

function EditId(props) {
  const [clue, setClue] = useState('');
  const [answer, setAnswer] = useState('');
  const [links, setLinks] = useState([""]);
  const [blocked, setBlocked] = useState(false);

    axios.get("/connexions/edit/"+ props.match.params.id)
    .then((response) => {
      const data = response.data;
      setClue(data.clue);
      setLinks(data.links);
      setAnswer(data.answer);
      setBlocked(data.blocked);
    })
    .catch(error => {
      console.error(error)
      console.log("record unavailable")
    })

  const add = () => {
    setLinks([...links, ""]);
    console.log(links);
  };

  const remove = (current) => {
    let list = [...links];
    let filter = list.filter((x) => {
      return x !== current;
    });
    console.log(filter);
    setLinks(filter);
  };

  const clueHandler = (event) => {
    setClue(event.target.value);
  };

  const answerHandler = (event) => {
    setAnswer(event.target.value);
  };

  const blockedHandler = (event) => {
    setBlocked(event.target.value);
  };

  const linksHandler = (event, index) => {
    let linksArray = [...links];
    linksArray[index] = event.target.value;
    setLinks(linksArray);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let connexion = {
      clue: clue,
      answer: answer,
      links: links,
    };

    axios
      .post("/connexions/update/"+props.match.params._id, connexion)
      .then((connexion) => {
        console.log("Connexion added");
        alert("Connexions Uploaded successfully");
      })
      .catch((err) => {
        console.log(err);
        console.log("Connexion was not added");
        alert("Tell Shobhan its not working!!!");
      });

    setClue("");
    setAnswer("");
    setLinks([""]);
  };

  return (
    <div className='upload-page'>
      <h1 className='upload-head'>Edit the connexion</h1>
      <form className='upload-form' id='upload-form' onSubmit={submitHandler}>
        <select
        style={{ marginBottom: "20px" }}
        id='clue-input'
        className='upload-input'
        value={clue}
        onChange={clueHandler}
        required
        >
        <option className="upload-input-option" style={{display: "none"}} value="" selected>Enter the clue</option>
        <option className="upload-input-option" value="Movies">Movies</option>
        <option className="upload-input-option" value="TV Series">TV Series</option>
        <option className="upload-input-option" value="Cartoons">Cartoons</option>
        </select>
        <input
          style={{ marginBottom: "20px" }}
          id='answer-input'
          className='upload-input'
          type='text'
          value={answer}
          onChange={answerHandler}
          placeholder='Enter the answer'
          required
        />

        {links.map((current, index) => {
          return (
            <div className='links-input-container' key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  className='upload-input'
                  type='text'
                  placeholder={"Enter the link for the image " + (index + 1)}
                  value={current}
                  onChange={(event) => linksHandler(event, index)}
                  required
                />
                {links.length !== 1 && (
                  <Close
                    style={{ fontSize: "35px" }}
                    className='remove-button'
                    id='remove-button'
                    onClick={() => remove(current)}
                  />
                )}
              </div>
              {links.length - 1 === index && links.length - 1 !== 7 && (
                <Add
                  style={{ fontSize: "35px" }}
                  className='add-button'
                  onClick={add}
                />
              )}
            </div>
          );
        })}
        <div style={{display: "flex", flexDirection: "row",justifyContent: "center", alignItems: "center", width: "100%", marginBottom: "20px"}}>
        <input
        style={{ width: "20px", height: "20px" }}
        id='blocked-input'
        className='upload-input'
        type='checkbox'
        value={blocked}
        onChange={blockedHandler}
        placeholder='Enter the answer'
        required
        /><label for="blocked-input"><p>Blocked Status</p></label>
        </div>
        <button className='upload-button' for='upload-form' type='submit'>
          UPLOAD
        </button>
      </form>
    </div>
  );
}

export default EditId;