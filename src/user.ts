type Scores = {
  [key: string]: number;
};

export class User {
  scores: Scores;

  constructor(categories: string[]) {
    this.scores = categories.reduce((acc, category) => {
      acc[category] = 0;
      return acc;
    }, {} as Scores);
  }

  answerQuestion(category: string, answer: boolean): void {
    if (answer) {
      this.scores[category] += 25;
    }
  }
}
