export const answerOptions = [
  'Concordo totalmente',
  'Concordo parcialmente',
  'Discordo parcialmente',
  'Discordo totalmente',
] as const;

export type AnswerOption = (typeof answerOptions)[number];
export type QuestionScoringType = 'agree' | 'disagree';

export interface QuestionnaireQuestion {
  id: number;
  text: string;
  scoringType: QuestionScoringType;
}

export interface CategorizedQuestion extends QuestionnaireQuestion {
  category: string;
}

export type QuestionnaireAnswers = Readonly<Partial<Record<number, AnswerOption>>>;

type AnswerScoreTable = Readonly<Record<AnswerOption, 0 | 1>>;

const answerScoreByScoringType: Readonly<Record<QuestionScoringType, AnswerScoreTable>> = {
  agree: {
    'Concordo totalmente': 1,
    'Concordo parcialmente': 1,
    'Discordo parcialmente': 0,
    'Discordo totalmente': 0,
  },
  disagree: {
    'Concordo totalmente': 0,
    'Concordo parcialmente': 0,
    'Discordo parcialmente': 1,
    'Discordo totalmente': 1,
  },
};

export function loadQuestionnaire<T extends QuestionnaireQuestion>(questions: T[]): readonly T[] {
  const questionIds = new Set<number>();

  for (const question of questions) {
    if (!Number.isInteger(question.id)) {
      throw new Error(`Question id must be an integer. Received: ${question.id}`);
    }

    if (questionIds.has(question.id)) {
      throw new Error(`Question id must be unique. Duplicate id: ${question.id}`);
    }

    if (question.scoringType !== 'agree' && question.scoringType !== 'disagree') {
      throw new Error(`Invalid scoring type for question ${question.id}: ${question.scoringType}`);
    }

    questionIds.add(question.id);
  }

  return questions;
}

function buildScoringLookup(questions: readonly QuestionnaireQuestion[]): Readonly<Record<number, QuestionScoringType>> {
  const scoringLookup: Record<number, QuestionScoringType> = {};

  for (const question of questions) {
    scoringLookup[question.id] = question.scoringType;
  }

  return scoringLookup;
}

export function createQuestionnaireScoreCalculator(questions: readonly QuestionnaireQuestion[]) {
  const scoringLookup = buildScoringLookup(questions);

  return (answers: QuestionnaireAnswers): number => {
    let score = 0;

    for (const questionId in answers) {
      const numericQuestionId = Number(questionId);
      const answer = answers[numericQuestionId];

      if (!answer) {
        continue;
      }

      const scoringType = scoringLookup[numericQuestionId];

      if (scoringType) {
        score += answerScoreByScoringType[scoringType][answer];
      }
    }

    return score;
  };
}