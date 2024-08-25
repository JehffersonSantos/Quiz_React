import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Quiz from "../img/quiz.svg"
import "./Welcome.css"
import React from 'react'

const welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext);



  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="IniciO do Quiz" />
    </div>
  )
}

export default welcome