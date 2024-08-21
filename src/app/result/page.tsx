"use client";

import Image, { StaticImageData } from 'next/image';
import { useQuiz } from '../../context/QuizContext';
import * as React from 'react';
import Logo from '../../../public/assets/logo.png'; 
import { categoriesWithDetails } from '@/questions';


const ResultPage: React.FC = ({ }) => {
    const { scores } = useQuiz();
    console.log("scores", scores);

    // Function to filter scores greater than 75
    const filteredScores = Object.entries(scores).filter(([_, score]) => score >= 75);
    const categoryCount = filteredScores.length;
    console.log("categoryCount", categoryCount);

    const getAnnouncement = () => {
        if (categoryCount > 4) {
            return "Wow, looks like your parents really nailed it! 🎉 You've got some solid emotional baggage. Treat yourself to a therapy session, or, you know, just keep being fabulously quirky!";
        } else if (categoryCount > 1 && categoryCount <= 4) {
            return "Your emotional baggage doesn't seem too bad! 🎒 You're doing pretty well in the chaos department. Maybe just keep those quirks in check and carry on being awesome!";
        } else if (categoryCount <= 1) {
            return "Looks like you've got the emotional resilience of a rock! 🪨 One category or none? Your parents must've been on their A-game! Maybe just double-check for hidden traumas. 😉";
        }
    };

    const matchedCategories = filteredScores.map(([category]) => 
        categoriesWithDetails.find(detail => detail.category === category)
    ).filter((detail): detail is { id: string; category: string; badge: StaticImageData } => Boolean(detail)); // Filter out any undefined results

    return (
        <main className="flex min-h-screen flex-col items-center balsamiq-sans-regular">
            <Image src={Logo} alt="" width={500} height={300} className="-mt-20" />
            
            <h1 className="mt-10 text-4xl text-center max-w-screen-xl">
                {getAnnouncement()}
            </h1>
            
            <div className="mt-10 max-w-screen-xl text-3xl text-center grid grid-cols-3 gap-5">
                {matchedCategories.map(({ category, badge }) => (
                    <div key={category} className="flex flex-col items-center">
                        <Image src={badge} alt={`${category} Badge`} width={200} height={200} />
                        <p>{category}: {scores[category]}%</p>
                    </div>
                ))}
            </div>

            <p className="Disclaimer mt-10 text-2xl text-center max-w-screen-xl italic">Disclaimer: This quiz is just for kicks and giggles, not a legit diagnosis or treatment. If you’re feeling a bit off, it’s always a good idea to chat with a healthcare pro. Stay fabulous!</p>
        </main>
    )
}

export default ResultPage