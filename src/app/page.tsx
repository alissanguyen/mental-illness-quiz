"use client"
import * as React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import WelcomingQuote from "@/components/WelcomingQuote";
import QuestionPage from "@/components/QuestionPage";
import { useQuiz } from "./QuizContext";

export default function Home() {
  const {
    isDoingQuiz, setIsDoingQuiz,
    loadQuizData, clearQuizData
  } = useQuiz();

  const [continueQuiz, setContinueQuiz] = React.useState(false);

  React.useEffect(() => {
    const savedData = localStorage.getItem('quizData');
    console.log(savedData, "Loaded saved data"); // Debugging
    if (savedData) {
      const { name, answers } = JSON.parse(savedData);
      console.log(name, answers, "Loaded saved data 2"); // Debugging
      if (name && answers.length > 0) {
        setContinueQuiz(true);
      } else {
        setIsDoingQuiz(false); // Ensure quiz is not considered ongoing if criteria aren't met
      }
    }
  }, [setIsDoingQuiz]);

  const handleContinue = (answer: boolean) => {
    console.log('Continue with existing data:', answer);
    if (answer) {
      loadQuizData(); // This should set all necessary states including `isDoingQuiz`
    } else {
      clearQuizData(); // This should clear all quiz-related data
    }
    setIsDoingQuiz(true); // Ensure this is always set regardless of the condition
  };


  return (
    
      <main className="flex min-h-screen flex-col items-center balsamiq-sans-regular">
        <Image src={Logo} alt="" width={500} height={300} className="-mt-20" />
        {!isDoingQuiz ? (
          <>
            <WelcomingQuote />
            {continueQuiz ? (
              <div className="max-w-screen-xl flex flex-col gap-10 mt-10">
                <p className="text-2xl">Looks like you did not complete your previous test, wanna continue?</p>
                <div className="flex flex-row items-center">
                  <button onClick={() => handleContinue(true)} className="m-4 text-xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">Continue</button>
                  <button onClick={() => handleContinue(false)} className="m-4 text-xl bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">Start Over</button>
                </div>
              </div>
            ) : (
              <section className="mt-10 max-w-screen-xl text-3xl flex flex-col gap-5">
                <p>Hey there! Ready to dive into some wacky questions?</p>
                <p>For every baggage you reveal, you&apos;ll snag a &quot;badge&quot;&mdash;because who doesn&apos;t love collecting random things? By the end, you&apos;ll get a score that tells you just how fabulously chaotic your mind really is!</p>
                <p>These questions are all about keeping it light and playful while poking fun at the ups and downs of mental health. Let&apos;s see how quirky you really are!</p>
                <button onClick={() => setIsDoingQuiz(true)} className="mt-10 text-xl bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">
                  Start Quiz
                </button>
              </section>
            )}
          </>
        ) : (
          <QuestionPage/>
        )}
        <p className="Disclaimer mt-10 text-2xl text-center max-w-screen-xl italic">Disclaimer: This quiz is just for kicks and giggles, not a legit diagnosis or treatment. If you’re feeling a bit off, it’s always a good idea to chat with a healthcare pro. Stay fabulous!</p>
      </main>
  );
}
