import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { aq50Questions, answerOptions, calculateAQ50Score, type AnswerOption } from '../data/aq50Questions';

export default function AQ50Page() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerOption>>({});

  const question = aq50Questions[currentQuestion];
  const totalQuestions = aq50Questions.length;
  const progress = Math.round(((currentQuestion + 1) / totalQuestions) * 100);
  const hasAnswer = answers[question.id] !== undefined;

  const handleAnswerSelect = (answer: AnswerOption) => {
    setAnswers({ ...answers, [question.id]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score and navigate to results
      const score = calculateAQ50Score(answers);
      navigate('/teste-autismo/resultado', {
        state: { score, testType: 'AQ-50', totalQuestions }
      });
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigate('/teste-autismo');
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Google_Sans_Flex',sans-serif] antialiased">
      <Navbar />
      <main className="bg-[#F8F8F7] pt-20">
        <div className="max-w-[1140px] mx-auto px-6 pt-10 pb-16 md:px-20 md:pt-20 md:pb-40">
          <div className="flex flex-col gap-10 md:gap-16 items-center">
            {/* Header */}
            <div className="flex flex-col items-start md:items-center gap-6 max-w-[736px] w-full">
              <h1
                className="text-[#1E0C01] font-normal leading-[1.15] tracking-[-0.03em] text-left md:text-center w-full"
                style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
              >
                Teste de triagem para autismo em adultos
              </h1>
              <p className="text-[#39261B] text-xl font-semibold leading-[1.5] tracking-[-0.03em] text-left md:text-center">
                Identifique possíveis traços do espectro autista com um teste
                rápido, online e gratuito. Selecione o questionário que deseja
                responder.
              </p>
            </div>

            {/* Test Card */}
            <div className="bg-[#F8F8F7] border border-[#39261B] rounded-md p-6 flex flex-col gap-6 md:gap-10 w-full">
              {/* Progress and Question Number */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between w-full">
                <div className="bg-[#09456F] px-4 py-2 rounded-full">
                  <p className="text-white text-base font-extrabold tracking-tight whitespace-nowrap">
                    Pergunta {currentQuestion + 1} de {totalQuestions}
                  </p>
                </div>
                <div className="hidden md:flex px-4 py-2 border border-[#ADBCC5] rounded-full">
                  <p className="text-[#1E0C01] text-base font-medium tracking-tight whitespace-nowrap">
                    {progress}% concluído
                  </p>
                </div>
              </div>

              {/* Question and Answers */}
              <div className="flex flex-col gap-6">
                <h3 className="text-[#1E0C01] text-2xl font-extrabold leading-[1.15] tracking-tight">
                  {question.text}
                </h3>

                <div className="flex flex-col gap-4">
                  {answerOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full px-6 py-4 rounded-lg text-left text-base font-medium leading-[1.4] tracking-tight transition-all ${
                        answers[question.id] === option
                          ? 'border-2 border-[#09456F] bg-[#09456F]/20'
                          : 'border border-[#A8A8A8] hover:border-[#39261B] hover:bg-[#EFEFEF]'
                      }`}
                    >
                      <p className="text-[#1E0C01]">{option}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 w-full">
                <button
                  onClick={handleBack}
                  className="flex-1 px-6 py-4 border border-[#1E0C01] text-[#1E0C01] text-base font-bold tracking-tight rounded-full hover:bg-[#1E0C01]/12 transition-colors"
                >
                  Voltar
                </button>
                <button
                  onClick={handleNext}
                  disabled={!hasAnswer}
                  className={`flex-1 px-6 py-4 text-white text-base font-bold tracking-tight rounded-full transition-colors ${
                    hasAnswer
                      ? 'bg-[#1E0C01] hover:bg-[#5C3E2A]'
                      : 'bg-[#A8A8A8] cursor-not-allowed'
                  }`}
                >
                  {currentQuestion < totalQuestions - 1 ? 'Continuar' : 'Ver resultado'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
