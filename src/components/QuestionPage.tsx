"use client";
import { questions } from '@/questions';
import * as React from 'react';
import Button from './Button/Button';
import { useQuiz } from '@/context/QuizContext';
import { useRouter } from 'next/navigation';

interface Props {
}

const QuestionPage: React.FC<Props> = ({ }) => {
    const router = useRouter();
    const {
        userName,
        setUserName,
        setAnswers,
        isDoingQuiz,
        setIsDoingQuiz,
        currentPage,
        setCurrentPage,
        handleAnswer,
        answers,
        scores
    } = useQuiz();

    console.log('Current page:', currentPage);
    const currentQuestion = questions[currentPage - 1];

    console.log('scores:', scores);

    const handleNext = () => {
        if (currentPage < questions.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            console.log('Final scoring and results');
            router.push('/result'); // Redirect to results page
            // Consider adding a function here to handle completion logic
        }
    };

    const isSelected = (answer: boolean) => {
        const existingAnswer = answers.find(a => { if (a && a.id) { return a.id === currentQuestion.id } else { return false } });
        return existingAnswer ? existingAnswer.answer === answer : false;
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
            setAnswers([]);
            setIsDoingQuiz(true); // Setting to true as they are now taking the quiz
        }
    }, [isDoingQuiz, setCurrentPage, setAnswers, setIsDoingQuiz, userName]);

    return (
        <div className='text-3xl balsamiq-sans-regular max-w-screen-xl w-full flex flex-col gap-20 items-center'>
            {currentPage === 0 ? (
                <FirstPage userName={userName} setUserName={setUserName} setCurrentPage={setCurrentPage} />
            ) : (

                <>
                    <h1 className='min-h-28'>{questions[currentPage - 1].text}</h1>
                    <div className='w-full flex flex-row items-center justify-center gap-5'>
                        <Button text="Yes" onClick={() => handleAnswer(currentQuestion.id, true)} selected={isSelected(true)} />
                        <Button text="No" onClick={() => handleAnswer(currentQuestion.id, false)} selected={isSelected(false)} />
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
                </>
            )
            }
        </div>
    )

}

export default QuestionPage


interface FirstPageProps {
    userName: string;
    setUserName: (username: string) => void;
    setCurrentPage: (page: number) => void;
}

const FirstPage: React.FC<FirstPageProps> = ({ userName, setUserName, setCurrentPage }) => {
    return (
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
    )
}
