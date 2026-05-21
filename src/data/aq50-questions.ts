export interface Question {
  id: number;
  text: string;
  scoringType: 'agree' | 'disagree';
  category: string;
}

export const aq50Questions: Question[] = [
  // Interação Social (1-10)
  {
    id: 1,
    text: 'Eu me sinto confortável em conversas casuais com pessoas desconhecidas.',
    scoringType: 'disagree',
    category: 'Interação Social'
  },
  {
    id: 2,
    text: 'Costumo ter dificuldade em entender regras sociais implícitas.',
    scoringType: 'agree',
    category: 'Interação Social'
  },
  {
    id: 3,
    text: 'Prefiro atividades solitárias na maior parte do tempo.',
    scoringType: 'agree',
    category: 'Interação Social'
  },
  {
    id: 4,
    text: 'Acho fácil perceber quando alguém quer encerrar uma conversa.',
    scoringType: 'disagree',
    category: 'Interação Social'
  },
  {
    id: 5,
    text: 'Frequentemente me sinto "fora de sintonia" em grupos sociais.',
    scoringType: 'agree',
    category: 'Interação Social'
  },
  {
    id: 6,
    text: 'Consigo adaptar meu comportamento facilmente dependendo do grupo social.',
    scoringType: 'disagree',
    category: 'Interação Social'
  },
  {
    id: 7,
    text: 'Conversas longas podem parecer cansativas ou difíceis de acompanhar.',
    scoringType: 'agree',
    category: 'Interação Social'
  },
  {
    id: 8,
    text: 'Tenho dificuldade em iniciar interações sociais espontaneamente.',
    scoringType: 'agree',
    category: 'Interação Social'
  },
  {
    id: 9,
    text: 'Costumo ensaiar mentalmente conversas antes de tê-las.',
    scoringType: 'agree',
    category: 'Interação Social'
  },
  {
    id: 10,
    text: 'Acho natural manter contato visual durante conversas.',
    scoringType: 'disagree',
    category: 'Interação Social'
  },

  // Attention Switching / Cognitive Flexibility (11-20)
  {
    id: 11,
    text: 'Mudanças inesperadas na rotina podem me causar desconforto.',
    scoringType: 'agree',
    category: 'Flexibilidade Cognitiva'
  },
  {
    id: 12,
    text: 'Consigo mudar rapidamente de tarefa sem dificuldade.',
    scoringType: 'disagree',
    category: 'Flexibilidade Cognitiva'
  },
  {
    id: 13,
    text: 'Gosto quando as coisas seguem uma estrutura previsível.',
    scoringType: 'agree',
    category: 'Flexibilidade Cognitiva'
  },
  {
    id: 14,
    text: 'Tenho dificuldade em interromper um assunto no qual estou focado.',
    scoringType: 'agree',
    category: 'Flexibilidade Cognitiva'
  },
  {
    id: 15,
    text: 'Mudanças de planos costumam me deixar frustrado.',
    scoringType: 'agree',
    category: 'Flexibilidade Cognitiva'
  },
  {
    id: 16,
    text: 'Consigo lidar bem com ambientes imprevisíveis.',
    scoringType: 'disagree',
    category: 'Flexibilidade Cognitiva'
  },
  {
    id: 17,
    text: 'Frequentemente fico preso em um pensamento ou ideia específica.',
    scoringType: 'agree',
    category: 'Flexibilidade Cognitiva'
  },
  {
    id: 18,
    text: 'Acho difícil retomar uma atividade após ser interrompido.',
    scoringType: 'agree',
    category: 'Flexibilidade Cognitiva'
  },
  {
    id: 19,
    text: 'Prefiro saber exatamente o que esperar antes de uma situação nova.',
    scoringType: 'agree',
    category: 'Flexibilidade Cognitiva'
  },
  {
    id: 20,
    text: 'Me adapto facilmente quando algo não sai como planejado.',
    scoringType: 'disagree',
    category: 'Flexibilidade Cognitiva'
  },

  // Atenção ao Detalhe (21-30)
  {
    id: 21,
    text: 'Frequentemente noto pequenos detalhes que outras pessoas não percebem.',
    scoringType: 'agree',
    category: 'Atenção ao Detalhe'
  },
  {
    id: 22,
    text: 'Tenho interesse intenso em assuntos muito específicos.',
    scoringType: 'agree',
    category: 'Atenção ao Detalhe'
  },
  {
    id: 23,
    text: 'Gosto de categorizar, organizar ou listar informações.',
    scoringType: 'agree',
    category: 'Atenção ao Detalhe'
  },
  {
    id: 24,
    text: 'Sons, luzes ou texturas podem me incomodar mais do que parecem incomodar outras pessoas.',
    scoringType: 'agree',
    category: 'Atenção ao Detalhe'
  },
  {
    id: 25,
    text: 'Costumo perceber padrões rapidamente.',
    scoringType: 'agree',
    category: 'Atenção ao Detalhe'
  },
  {
    id: 26,
    text: 'Às vezes foco tanto nos detalhes que perco a visão geral.',
    scoringType: 'agree',
    category: 'Atenção ao Detalhe'
  },
  {
    id: 27,
    text: 'Tenho facilidade para memorizar informações específicas.',
    scoringType: 'agree',
    category: 'Atenção ao Detalhe'
  },
  {
    id: 28,
    text: 'Pequenas mudanças em ambientes ou objetos chamam minha atenção imediatamente.',
    scoringType: 'agree',
    category: 'Atenção ao Detalhe'
  },
  {
    id: 29,
    text: 'Posso passar longos períodos pesquisando um tema específico.',
    scoringType: 'agree',
    category: 'Atenção ao Detalhe'
  },
  {
    id: 30,
    text: 'Costumo reparar em inconsistências ou erros facilmente.',
    scoringType: 'agree',
    category: 'Atenção ao Detalhe'
  },

  // Comunicação (31-40)
  {
    id: 31,
    text: 'Às vezes tenho dificuldade em entender sarcasmo ou ironia.',
    scoringType: 'agree',
    category: 'Comunicação'
  },
  {
    id: 32,
    text: 'Frequentemente interpreto falas de forma muito literal.',
    scoringType: 'agree',
    category: 'Comunicação'
  },
  {
    id: 33,
    text: 'Tenho dificuldade em perceber o tom emocional de uma conversa.',
    scoringType: 'agree',
    category: 'Comunicação'
  },
  {
    id: 34,
    text: 'Às vezes não sei exatamente quando é minha vez de falar.',
    scoringType: 'agree',
    category: 'Comunicação'
  },
  {
    id: 35,
    text: 'Acho difícil entender o que alguém quis dizer sem que a pessoa seja direta.',
    scoringType: 'agree',
    category: 'Comunicação'
  },
  {
    id: 36,
    text: 'Consigo perceber facilmente emoções apenas pela expressão facial.',
    scoringType: 'disagree',
    category: 'Comunicação'
  },
  {
    id: 37,
    text: 'Às vezes as pessoas dizem que fui "muito direto" ao falar.',
    scoringType: 'agree',
    category: 'Comunicação'
  },
  {
    id: 38,
    text: 'Tenho dificuldade em manter conversas longas sobre assuntos que não me interessam.',
    scoringType: 'agree',
    category: 'Comunicação'
  },
  {
    id: 39,
    text: 'Às vezes sinto que há um "roteiro social" que outras pessoas parecem entender naturalmente.',
    scoringType: 'agree',
    category: 'Comunicação'
  },
  {
    id: 40,
    text: 'Consigo interpretar linguagem corporal com facilidade.',
    scoringType: 'disagree',
    category: 'Comunicação'
  },

  // Imaginação (41-50)
  {
    id: 41,
    text: 'Tenho facilidade para imaginar situações hipotéticas detalhadas.',
    scoringType: 'disagree',
    category: 'Imaginação'
  },
  {
    id: 42,
    text: 'Prefiro fatos concretos a situações imaginárias ou abstratas.',
    scoringType: 'agree',
    category: 'Imaginação'
  },
  {
    id: 43,
    text: 'Quando leio uma história, tenho dificuldade em entender as intenções dos personagens.',
    scoringType: 'agree',
    category: 'Imaginação'
  },
  {
    id: 44,
    text: 'Gosto de criar cenários imaginários na minha mente.',
    scoringType: 'disagree',
    category: 'Imaginação'
  },
  {
    id: 45,
    text: 'Tenho dificuldade em prever como outras pessoas podem reagir emocionalmente.',
    scoringType: 'agree',
    category: 'Imaginação'
  },
  {
    id: 46,
    text: 'Consigo imaginar facilmente diferentes possibilidades para uma situação.',
    scoringType: 'disagree',
    category: 'Imaginação'
  },
  {
    id: 47,
    text: 'Às vezes acho difícil entender motivações emocionais complexas.',
    scoringType: 'agree',
    category: 'Imaginação'
  },
  {
    id: 48,
    text: 'Tenho preferência por atividades mais objetivas e estruturadas.',
    scoringType: 'agree',
    category: 'Imaginação'
  },
  {
    id: 49,
    text: 'Frequentemente analiso situações de forma lógica antes de emocional.',
    scoringType: 'agree',
    category: 'Imaginação'
  },
  {
    id: 50,
    text: 'Tenho facilidade para interpretar personagens fictícios e suas emoções.',
    scoringType: 'disagree',
    category: 'Imaginação'
  }
];

export const answerOptions = [
  'Concordo totalmente',
  'Concordo parcialmente',
  'Discordo parcialmente',
  'Discordo totalmente'
] as const;

export type AnswerOption = typeof answerOptions[number];

export function calculateAQ50Score(answers: Record<number, AnswerOption>): number {
  let score = 0;

  aq50Questions.forEach((question) => {
    const answer = answers[question.id];
    if (!answer) return;

    if (question.scoringType === 'agree') {
      if (answer === 'Concordo totalmente' || answer === 'Concordo parcialmente') {
        score += 1;
      }
    } else {
      if (answer === 'Discordo parcialmente' || answer === 'Discordo totalmente') {
        score += 1;
      }
    }
  });

  return score;
}
