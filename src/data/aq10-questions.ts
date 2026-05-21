export interface Question {
  id: number;
  text: string;
  scoringType: 'agree' | 'disagree'; // 'agree' scores on concordo, 'disagree' scores on discordo
}

export const aq10Questions: Question[] = [
  {
    id: 1,
    text: 'Eu frequentemente noto pequenos sons que outras pessoas não percebem.',
    scoringType: 'agree'
  },
  {
    id: 2,
    text: 'Eu geralmente foco mais no todo do que nos pequenos detalhes.',
    scoringType: 'disagree'
  },
  {
    id: 3,
    text: 'Acho fácil fazer mais de uma coisa ao mesmo tempo.',
    scoringType: 'disagree'
  },
  {
    id: 4,
    text: 'Se sou interrompido, consigo voltar rapidamente ao que estava fazendo.',
    scoringType: 'disagree'
  },
  {
    id: 5,
    text: 'Acho fácil "ler nas entrelinhas" quando alguém fala comigo.',
    scoringType: 'disagree'
  },
  {
    id: 6,
    text: 'Consigo perceber quando a pessoa que está me ouvindo está entediada.',
    scoringType: 'disagree'
  },
  {
    id: 7,
    text: 'Quando leio uma história, tenho dificuldade para entender as intenções dos personagens.',
    scoringType: 'agree'
  },
  {
    id: 8,
    text: 'Gosto de colecionar informações sobre categorias específicas de coisas.',
    scoringType: 'agree'
  },
  {
    id: 9,
    text: 'Acho fácil entender o que alguém está pensando ou sentindo apenas olhando para o rosto dela.',
    scoringType: 'disagree'
  },
  {
    id: 10,
    text: 'Tenho dificuldade para entender as intenções das pessoas.',
    scoringType: 'agree'
  }
];

export const answerOptions = [
  'Concordo totalmente',
  'Concordo parcialmente',
  'Discordo parcialmente',
  'Discordo totalmente'
] as const;

export type AnswerOption = typeof answerOptions[number];

export function calculateAQ10Score(answers: Record<number, AnswerOption>): number {
  let score = 0;

  aq10Questions.forEach((question) => {
    const answer = answers[question.id];
    if (!answer) return;

    if (question.scoringType === 'agree') {
      // Questions 1, 7, 8, 10 score on agreement
      if (answer === 'Concordo totalmente' || answer === 'Concordo parcialmente') {
        score += 1;
      }
    } else {
      // Questions 2, 3, 4, 5, 6, 9 score on disagreement
      if (answer === 'Discordo parcialmente' || answer === 'Discordo totalmente') {
        score += 1;
      }
    }
  });

  return score;
}
