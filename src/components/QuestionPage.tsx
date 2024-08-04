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
    const [currentAnswer, setCurrentAnswer] = React.useState<boolean | null>(null);

    // Function to move to the next question or submit if it's the last question
    const handleNext = () => {
        if (currentAnswer !== null) { // Ensure that an answer has been given
            user.answerQuestion(questions[currentPage].category, currentAnswer);
            if (currentPage < questions.length - 1) {
                setCurrentPage(currentPage + 1);
                setCurrentAnswer(null); // Reset answer for the next question
            } else {
                console.log(user.scores); // Final scoring
            }
        }
    };

    // Function to move back to the previous question
    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='text-3xl balsamiq-sans-regular max-w-screen-xl w-full flex flex-col gap-20 items-center'>
            <h1 className='min-h-28'>{questions[currentPage].text}</h1>
            <div className='w-full flex flex-row items-center justify-center gap-5'>
                <Button text="Yes" onClick={() => setCurrentAnswer(true)} selected={currentAnswer === true} />
                <Button text="No" onClick={() => setCurrentAnswer(false)} selected={currentAnswer === false} />
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
        </div>
    )
}

export default QuestionPage