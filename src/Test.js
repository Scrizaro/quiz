
import React, { useState, useEffect } from "react";

export default function Test(){
    const [questions, setQuestions] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        async function fetchData() {
        const res = await fetch("https://opentdb.com/api.php?amount=10");
        const data = await res.json();
        setQuestions(data.results);
        setCurrentAnswer(data.results.correct_answer);
        }
        fetchData();
    }, []);
    console.log(currentAnswer)
    
    const quiz = (questions) => {
        for(let i = 0; i > questions.length; i++){
            
                <h4>lalala</h4>
            
        }




    }

    const currentQuestion = questions[1];
    
    return (
        <div>
            {quiz}
            
        </div> );
}
    
    
{/* <h4>{currentQuestion.question}</h4>
            {currentQuestion.incorrect_answers.map(answer => (
            <button onClick={() => handleAnswer(answer)} key={answer}>
            {answer}
            </button>
))} */}