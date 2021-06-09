import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";

import "./css/quiz.css";
function Quiz() {
  const { quiz } = useContext(Context);

  const [index, setIndex] = useState(0);
  const [suallar, setSual] = useState(quiz.data);

  const [correctAnswer, setCorrectAnswer] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  console.log(selectedAnswer);

  const answer = (selected) => {
    if (selected) {
      if (index < suallar.length) {
        setIndex(index + 1);
      }
     
    }

    setSelectedAnswer("");
    suallar[index].answer === selected && setCorrectAnswer(correctAnswer + 1);
  };

  return (
    <div className="quiz">
      <h1>
        {index > suallar.length-1? "suallar bitdi" : suallar[index].question}
      </h1>

      {index < suallar.length?(
          suallar[index].choices.map((choice) => (
            <label className="mr-5" key={choice} htmlFor={choice}>
              {choice}
              <input
                className="form-control mr-2"
                name="rehman"
                onChange={(e) => setSelectedAnswer(e.target.value)}
                key={choice}
                type="radio"
                id={choice}
                value={choice}
              />
            </label>
          ))

      ):(
          <p>Duzgun cavablarin sayi: {correctAnswer}</p>
      )}
        

      {index<suallar.length?(<button
        className="btn btn-success col-md-4 mt-5"
        onClick={() => answer(selectedAnswer)}
      >
        next
      </button>):(
          <button className="btn btn-success col-md-4 mt-5" >Geriye qayit</button>
      )}

      
    </div>
  );
}

export default Quiz;
