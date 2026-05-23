import aq10QuestionsData from './aq10-questions.json';
import {
  answerOptions,
  createQuestionnaireScoreCalculator,
  loadQuestionnaire,
  type AnswerOption,
  type QuestionnaireAnswers,
  type QuestionnaireQuestion,
} from './questionnaire';

export interface AQ10Question extends QuestionnaireQuestion {}

export const aq10Questions = loadQuestionnaire(aq10QuestionsData as AQ10Question[]);

export const calculateAQ10Score = createQuestionnaireScoreCalculator(aq10Questions);

export { answerOptions };
export type { AnswerOption, QuestionnaireAnswers };
