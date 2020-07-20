import React from 'react'
import { useHistory } from "react-router-dom";


function Tutorial() {

    const history = useHistory();
    let firstVisitCheck = localStorage.getItem("firstVisit")

    if(!firstVisitCheck){
        localStorage.setItem("firstVisit", true)
    }
    else{
        history.push("/play")
    }

    return (
        <div>
            <h1>This is Tutorial Page</h1>
        </div>
    )
}

export default Tutorial
