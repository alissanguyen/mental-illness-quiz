"use client";
import { questions } from '@/questions';
import { User } from '@/user';
import * as React from 'react';
import Button from './Button/Button';

interface Props {

}

const QuestionPage: React.FC<Props> = ({ }) => {
    const [user] = React.useState(new User(questions.map(q => q.category)));
    const [currentPage, setCurrentPage] = React.useState(0);
    const [answers, setAnswers] = React.useState<(boolean | null)[]>(new Array(questions.length).fill(null));
    const [userName, setUserName] = React.useState<string>('');

    React.useEffect(() => {
        // Load saved data from local storage on component mount
        const savedData = localStorage.getItem('quizData');
        if (savedData) {
            const { name, page, answers } = JSON.parse(savedData);
            setUserName(name);
            setCurrentPage(page);
            setAnswers(answers);
        }
    }, []);

    React.useEffect(() => {
        // Save data to local storage whenever it changes
        const dataToSave = {
            name: userName,
            page: currentPage,
            answers
        };
        localStorage.setItem('quizData', JSON.stringify(dataToSave));
    }, [userName, currentPage, answers]);

    const handleNameSubmit = () => {
        if (userName) {
            setCurrentPage(currentPage + 1); // Move to the first question after name submission
        } else {
            alert('Please enter your name.');
        }
    };

    // Handle clicking on the Yes/No buttons
    const handleAnswer = (answer: boolean) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentPage] = answer;
        setAnswers(updatedAnswers);
        user.answerQuestion(questions[currentPage].category, answer);
        console.log(answers, "HEEH")
    };

    // Navigate to the next question
    const handleNext = () => {
        if (currentPage < questions.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            console.log(user.scores); // Final scoring
        }
    };

    // Navigate back to the previous question
    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

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
                    />
                    <button onClick={handleNameSubmit} className="mt-10 text-xl bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">Start Quiz!</button>
                </>
            ) : (<>
                <h1 className='min-h-28'>{questions[currentPage].text}</h1>
                <div className='w-full flex flex-row items-center justify-center gap-5'>
                    <Button text="Yes" onClick={() => handleAnswer(true)} selected={answers[currentPage] === true} />
                    <Button text="No" onClick={() => handleAnswer(false)} selected={answers[currentPage] === false} />
                </div>
                <div className='mt-20 w-full flex items-center justify-center gap-10 text-purple-600'>
                    {currentPage > 0 && <button onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.75" stroke="currentColor" className="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>}
                    <button onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.75" stroke="currentColor" className="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </>)
            }

        </div>
    )
}

export default QuestionPage