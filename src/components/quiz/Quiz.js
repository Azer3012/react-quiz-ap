import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

import './css/quiz.css'
function Quiz() {
  const { quiz } = useContext(Context);

  const [index, setIndex] = useState(0);
  const [suallar, setSual] = useState(quiz.data);

  const [correctAnswer,setCorrectAnswer]=useState(0)

  const [selectedAnswer,setSelectedAnswer]=useState("")

  let last=suallar.length;


  console.log(selectedAnswer);

  const answer =(selected)=>{
    selected&&last<=3&&setIndex(index+1)
    setSelectedAnswer("")
    suallar[index].answer===selected&&setCorrectAnswer(correctAnswer+1)
    checkAnswer(index)
    
  }

  console.log(correctAnswer);

  const checkAnswer=(num)=>{
    if(num>last){
        console.log(correctAnswer)
    }
   
  }

  

  return (
    <div className="quiz">
      <h1>{suallar[index].question}</h1>


      {suallar[index].choices.map((choice) => (

        <label className="mr-5" key={choice} htmlFor={choice} >
          {choice}
          <input className="form-control mr-2" name="rehman" onChange={(e)=>setSelectedAnswer(e.target.value)} key={choice} type="radio" id={choice} value={choice} />
        </label>
      ))}

      <button className="btn btn-success col-md-4 mt-5" onClick={()=>answer(selectedAnswer)}>next</button>
      
      
    </div>
  );
}

export default Quiz;
