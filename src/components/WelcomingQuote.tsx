"use client"

import * as React from 'react';

const welcomingQuotes = [
    "Welcome to the Trauma Talent Show! Let's see what your parents signed you up for!",
    "Welcome! Let's see how many mental souvenirs you've picked up along the way!",
    "Enter now to discover just how spectacularly your upbringing went wrong!",
    "Congratulations! You're about to find out why therapy should've been your first language.",
    "Welcome aboard the Crazy Train - next stop, your personal baggage claim!"
]

interface Props {

}

const WelcomingQuote: React.FC<Props> = ({ }) => {
    const [quote, setQuote] = React.useState('');

    React.useEffect(() => {
        const randomIndex = Math.floor(Math.random() * welcomingQuotes.length);
        setQuote(welcomingQuotes[randomIndex]);
    }, []);

    return (
        <h2 className='balsamiq-sans-bold-italic text-6xl max-w-screen-xl leading-relaxed'>{quote}</h2>
    )
}

export default WelcomingQuote