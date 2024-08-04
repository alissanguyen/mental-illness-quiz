"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode, FunctionComponent, ReactElement } from 'react';

interface QuizContextType {
  isDoingQuiz: boolean;
  setIsDoingQuiz: (isDoingQuiz: boolean) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  answers: (boolean | null)[];
  setAnswers: (answers: (boolean | null)[]) => void;
  userName: string;
  setUserName: (name: string) => void;
  loadQuizData: () => void;
  clearQuizData: () => void;
}

const defaultContextValue: QuizContextType = {
  isDoingQuiz: false,
  setIsDoingQuiz: () => {},
  currentPage: 0,
  setCurrentPage: () => {},
  answers: [],
  setAnswers: () => {},
  userName: '',
  setUserName: () => {},
  loadQuizData: () => {},
  clearQuizData: () => {}
};

const QuizContext = createContext<QuizContextType>(defaultContextValue);
export const useQuiz = () => useContext(QuizContext);

export const QuizProvider: FunctionComponent<{ children: ReactNode }> = ({ children }): ReactElement => {
  const [isDoingQuiz, setIsDoingQuiz] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>([]);
  const [userName, setUserName] = useState('');

  // Automatically save to local storage whenever key state variables change
  useEffect(() => {
    const dataToSave = {
      name: userName,
      page: currentPage,
      answers
    };
    if (isDoingQuiz) {
      localStorage.setItem('quizData', JSON.stringify(dataToSave));
      console.log('Quiz data saved:', dataToSave);
    }
  }, [userName, currentPage, answers, isDoingQuiz]);

  const loadQuizData = () => {
    console.log('Loading Quiz Data...');
    const savedData = localStorage.getItem('quizData');
    if (savedData) {
      const { name, page, answers } = JSON.parse(savedData);
      setUserName(name);
      setCurrentPage(page);
      setAnswers(answers);
      setIsDoingQuiz(true);
      console.log('Data loaded:', name, page, answers);
    }
  };

  const clearQuizData = () => {
    console.log('Clearing Quiz Data...');
    localStorage.removeItem('quizData');
    setIsDoingQuiz(false);
    setCurrentPage(0);
    setAnswers([]);
    setUserName('');
  };

  return (
    <QuizContext.Provider value={{
      isDoingQuiz,
      setIsDoingQuiz,
      currentPage,
      setCurrentPage,
      answers,
      setAnswers,
      userName,
      setUserName,
      loadQuizData,
      clearQuizData
    }}>
      {children}
    </QuizContext.Provider>
  );
};
