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
      <Image src={Logo} alt="" width={500} height={300} className="-mt-20"/>
      {!isDoingQuiz ? (<>
        <WelcomingQuote />
        <section className="mt-10 max-w-screen-xl text-3xl balsamiq-sans-regular flex flex-col gap-5">
          <p className="">Hey there! Ready to dive into some wacky questions? Your answers will help us determine just how much emotional baggage you&apos;re hauling around!</p>
          <p>For every baggage you reveal, you&apos;ll snag a &quot;badge&quot;&mdash;because who doesn&apos;t love collecting random things? By the end, you&apos;ll get a score that tells you just how fabulously chaotic your mind really is!</p>
          <p>These questions are all about keeping it light and playful while poking fun at the ups and downs of mental health. Let&rsquo;s see how quirky you really are!</p>
          <p className="Disclaimer mt-10">Disclaimer: This quiz is just for kicks and giggles, not a legit diagnosis or treatment. If you&rsquo;re feeling a bit off, it&rsquo;s always a good idea to chat with a healthcare pro. Stay fabulous!</p>
        </section>
        <button onClick={() => setIsDoingQuiz(true)} className="mt-10 text-xl bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">
          Start Quiz</button>
      </>) : (<QuestionPage />)}

    </main>
  );
}
