interface Answer {
  id: number;
  answer: boolean;
  category: string;
}

interface Scores {
  [category: string]: number;
}

interface QuizContextType {
  isDoingQuiz: boolean;
  setIsDoingQuiz: (isDoingQuiz: boolean) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  answers: Answer[];
  setAnswers: (answers: Answer[]) => void;
  scores: Scores;
  setScores: (scores: Scores) => void;
  userName: string;
  setUserName: (name: string) => void;
  handleAnswer: (questionId: number, answer: boolean) => void;
  loadQuizData: () => void;
  clearQuizData: () => void;
}

export type { QuizContextType, Answer, Scores };
