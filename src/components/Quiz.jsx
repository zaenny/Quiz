 import { useState, useCallback } from 'react';

 import Questions from '../questions.js';
 import Question from './Question.jsx';
 import Summary from './Summary.jsx';
 
 
 export default function Quiz(){
    //const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
   

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === Questions.length;


    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer){
        setUserAnswers( (prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete){
        return <Summary userAnswers={userAnswers} />
    }
    
    return (
        <div id="quiz">
             <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
             />
        </div>
    );
} 