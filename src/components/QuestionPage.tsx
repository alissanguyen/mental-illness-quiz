"use client";
import { questions } from '@/questions';
import * as React from 'react';
import Button from './Button/Button';
import { useQuiz } from '@/app/QuizContext';

interface Props {
}

const QuestionPage: React.FC<Props> = ({ }) => {
    const { 
        currentPage, 
        setCurrentPage, 
        answers, 
        setAnswers, 
        userName, 
        setUserName, 
        isDoingQuiz,
        setIsDoingQuiz 
    } = useQuiz();

    // Handle answer selection
    const handleAnswer = (answer: boolean) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentPage] = answer;
        setAnswers(updatedAnswers);
    };

    // Navigate to the next question
    const handleNext = () => {
        if (currentPage < questions.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            console.log('Final scoring and results');
            // Consider adding a function here to handle completion logic
        }
    };

    // Navigate back to the previous question
    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Reset or initialize for a new or restarting user
    React.useEffect(() => {
        if (!userName) {
            setCurrentPage(0);
            setAnswers(new Array(questions.length).fill(null));
            setIsDoingQuiz(true); // Setting to true as they are now taking the quiz
        }
    }, [isDoingQuiz, setCurrentPage, setAnswers, setIsDoingQuiz, userName]);

    return (
        <div className='text-3xl balsamiq-sans-regular max-w-screen-xl w-full flex flex-col gap-20 items-center'>
            {currentPage === 0 ? (
                <>
                    <h1>Please enter your name:</h1>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Your Name"
                        className="text-input"
                        required
                    />
                    <button onClick={() => userName ? setCurrentPage(1) : alert('Please enter your name.')} className="mt-10 text-xl bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">Start Quiz!</button>
                </>
            ) : (<>
                <h1 className='min-h-28'>{questions[currentPage].text}</h1>
                <div className='w-full flex flex-row items-center justify-center gap-5'>
                    <Button text="Yes" onClick={() => handleAnswer(true)} selected={answers[currentPage] === true} />
                    <Button text="No" onClick={() => handleAnswer(false)} selected={answers[currentPage] === false} />
                </div>
                <div className='mt-20 w-full flex items-center justify-center gap-10 text-purple-600'>
                    {currentPage > 0 && <button onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.75" stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>}
                    <button onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.75" stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </>)
            }

        </div>
    )
}

export default QuestionPage