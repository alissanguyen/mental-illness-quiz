"use client"
import * as React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import WelcomingQuote from "@/components/WelcomingQuote";
import QuestionPage from "@/components/QuestionPage";

export default function Home() {
  const [isDoingQuiz, setIsDoingQuiz] = React.useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Image src={Logo} alt="" width={500} height={300} />
      {!isDoingQuiz ? (<>
        <WelcomingQuote />
        <section className="mt-10 max-w-screen-xl text-3xl balsamiq-sans-regular flex flex-col gap-5">
          <p className="">Hi, here you will try to answer some questions and depends on your answers, we will let you know how heavy is your baggage.</p>
          <p>You will collect &quot;badge&quot; for each baggage you have, at the end you will receive a score on how mentally unstable you are.</p>
          <p>These questions are designed to be lighthearted and fun while still addressing the core aspects of different mental health conditions.</p>
          <p className="Disclaimer mt-10">Disclaimer: This quiz is for entertainment purposes only and is not a substitute for professional diagnosis or treatment. If you believe you might have a mental health condition, please consult a healthcare professional.</p>
        </section>
        <button onClick={() => setIsDoingQuiz(true)} className="mt-10 text-xl bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">
          Start Quiz</button>
      </>) : (<QuestionPage />)}

    </main>
  );
}
