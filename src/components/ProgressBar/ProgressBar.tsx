import { useQuiz } from '@/context/QuizContext';
import * as React from 'react';
import './ProgressBar.css';

interface Props {

}

// TODO: Implement the animation for the last step

const ProgressBar: React.FC<Props> = ({ }) => {
    const { currentPage } = useQuiz();
    const totalQuestions = 52;
    const progressPercentage = (currentPage / totalQuestions) * 100;

    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
    );
}

export default ProgressBar