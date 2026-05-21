import aq50QuestionsData from './aq50-questions.json';
import {
  answerOptions,
  createQuestionnaireScoreCalculator,
  loadQuestionnaire,
  type AnswerOption,
  type CategorizedQuestion,
  type QuestionnaireAnswers,
} from './questionnaire';

export interface AQ50Question extends CategorizedQuestion {}

export const aq50Questions = loadQuestionnaire(aq50QuestionsData as AQ50Question[]);

export const calculateAQ50Score = createQuestionnaireScoreCalculator(aq50Questions);

export { answerOptions };
export type { AnswerOption, QuestionnaireAnswers };
