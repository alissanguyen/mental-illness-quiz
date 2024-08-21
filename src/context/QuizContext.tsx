"use client";
import { questions } from '@/questions';
import { Answer, QuizContextType, Scores } from '@/types/types';
import React, { createContext, useContext, useState, useEffect, ReactNode, FunctionComponent, ReactElement } from 'react';

const defaultContextValue: QuizContextType = {
  isDoingQuiz: false,
  setIsDoingQuiz: () => {},
  currentPage: 0,
  setCurrentPage: () => {},
  answers: [],
  setAnswers: () => {},
  scores: {},
  setScores: () => {},
  userName: '',
  setUserName: () => {},
  handleAnswer: () => {},
  loadQuizData: () => {},
  clearQuizData: () => {}
};

const QuizContext = createContext<QuizContextType>(defaultContextValue);

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider: FunctionComponent<{ children: ReactNode }> = ({ children }): ReactElement => {
  const [isDoingQuiz, setIsDoingQuiz] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [scores, setScores] = useState<Scores>({});
  const [userName, setUserName] = useState('');

  // Automatically save to local storage whenever key state variables change
  useEffect(() => {
    const dataToSave = { userName, currentPage, answers, scores };
    if (isDoingQuiz) {
      localStorage.setItem('quizData', JSON.stringify(dataToSave));
    }
  }, [userName, currentPage, answers, isDoingQuiz, scores]);


  const loadQuizData = () => {
    const savedData = localStorage.getItem('quizData');
    if (savedData) {
      const { userName, currentPage, answers, scores } = JSON.parse(savedData);
      if (userName && Array.isArray(answers) && answers.every(a => a && 'id' in a && 'answer' in a && 'category' in a)) {
        setUserName(userName);
        setCurrentPage(currentPage);
        setAnswers(answers);
        setIsDoingQuiz(true);
        setScores(scores)
      } else {
        console.error('Invalid quiz data from localStorage');
        clearQuizData();
      }
    }
    console.log('Loaded Quiz Data:', savedData, "HAHAHAH", userName, currentPage, answers, scores);
  };

  const clearQuizData = () => {
    console.log('Clearing Quiz Data...');
    localStorage.removeItem('quizData');
    setIsDoingQuiz(false);
    setCurrentPage(0);
    setAnswers([]);
    setUserName('');
  };

  const handleAnswer = (questionId: number, answer: boolean) => {
    const question = questions.find(q => q.id === questionId);
    console.log('Question:', question, 'question Id:', questionId, 'category:', question?.category);
    if (question) {
      const updatedAnswers = [...answers];
      const answerIndex = updatedAnswers.findIndex(a => a.id === questionId);

      if (answerIndex !== -1) {
        updatedAnswers[answerIndex] = { id: questionId, answer, category: question.category };
      } else {
        updatedAnswers.push({ id: questionId, answer, category: question.category });
      }
      setAnswers(updatedAnswers);

      // Calculate scores
      const newScore = updatedAnswers.filter(a => a.category === question.category && a.answer).length * 25;
      setScores(prev => ({ ...prev, [question.category]: newScore }));
    }
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
      scores,
      setScores,
      handleAnswer,
      loadQuizData,
      clearQuizData
    }}>
      {children}
    </QuizContext.Provider>
  );
};
