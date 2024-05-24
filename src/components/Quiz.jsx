 import { useState } from 'react';

 import Question from '../questions.js';
 import quizCompleteImg from '../assets/quiz-complete.png'
 
 export default function Quiz(){
    //const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === Question.length;


    function handleSelectAnswer(selectedAnswer){
        setUserAnswers( ([prevUserAnswers]) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Icon"/>
                <h2>Quiz Completed!</h2>
            </div>
        );
    }
    
    const shuffledAnswers = [...Question[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    

    return (
        <div id="quiz">
            <div id="question">
                <h2>{Question[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div> 
        </div>
    );
}