import { FAQItem } from './FAQItem';

export function FAQ() {
  const faqs = [
    {
      question: 'O que é uma avaliação neuropsicológica?',
      answer:
        'É um processo clínico que utiliza testes, entrevistas e observações para investigar o funcionamento do cérebro. Avaliamos funções cognitivas como atenção, memória, linguagem, raciocínio, funções executivas, habilidades motoras, percepção, entre outras.',
    },
    {
      question: 'Para quem a avaliação é indicada?',
      answer:
        'A avaliação neuropsicológica é indicada para pessoas de todas as idades que apresentam dificuldades cognitivas, comportamentais ou emocionais que impactam seu funcionamento no dia a dia. Ela é especialmente recomendada em casos de suspeita de TDAH, transtornos de aprendizagem, autismo, alterações de memória, sequelas neurológicas (como AVC ou traumatismo craniano) e quadros psiquiátricos em que se deseja compreender melhor o perfil cognitivo do paciente.',
    },
    {
      question: 'Quais profissionais solicitam esse tipo de avaliação?',
      answer:
        'A avaliação pode ser solicitada por neurologistas, psiquiatras, psicólogos, fonoaudiólogos, geriatras, entre outros. Mas você também pode procurar diretamente, caso perceba alguma mudança ou dificuldade.',
    },
    {
      question: 'Como é o processo de avaliação?',
      answer:
        'O processo começa com uma conversa inicial, em que o neuropsicólogo escuta a história do paciente e entende suas queixas e necessidades. Em seguida, são aplicados testes e atividades que se parecem com jogos, desafios ou quebra-cabeças — alguns envolvem memória, atenção, linguagem, raciocínio ou habilidades motoras. Essas tarefas ajudam o neuropsicólogo a entender como o cérebro da pessoa está funcionando, quais são seus pontos fortes e onde há mais dificuldade. Ao final, os resultados são organizados em um relatório e discutidos com o paciente, trazendo orientações claras e personalizadas.',
    },
    {
      question: 'Quantas sessões são necessárias?',
      answer:
        'Isso varia conforme a demanda e o ritmo de cada pessoa. Em geral, o processo envolve uma entrevista inicial e de 3 a 5 sessões de avaliação. Às vezes pode ser necessário mais tempo — nosso foco é fazer uma avaliação cuidadosa e completa. Se identificarmos a necessidade de sessões adicionais para garantir a qualidade do resultado, elas serão incluídas sem custo extra.',
    },
    {
      question: 'A avaliação inclui diagnóstico?',
      answer:
        'O laudo pode contribuir com hipóteses diagnósticas, mas o diagnóstico definitivo deve ser feito por um médico. A avaliação neuropsicológica é uma ferramenta que oferece informações valiosas para o entendimento clínico. Ao final do processo, ofereço dados detalhados sobre o funcionamento cognitivo do paciente, que podem ajudar muito na compreensão global do caso e na adaptação de condutas médicas e terapêuticas.',
    },
    {
      question: 'A avaliação serve para fins jurídicos ou periciais?',
      answer:
        'Não. Este consultório realiza apenas avaliações clínicas, com foco terapêutico e de acompanhamento. Não oferecemos avaliações com finalidade pericial ou judicial.',
    },
    {
      question: 'Como recebo os resultados?',
      answer:
        'Os resultados são entregues em um relatório escrito e apresentados pessoalmente em uma sessão de devolutiva. Nessa conversa, explico cada parte do laudo com clareza, respondendo dúvidas e oferecendo orientações personalizadas. A devolutiva é um momento fundamental para que o paciente ou a família compreendam o que foi avaliado e como utilizar essas informações de forma prática.',
    },
    {
      question: 'A avaliação é coberta por plano de saúde?',
      answer:
        'Atualmente, o atendimento é particular. Se necessário, fornecemos recibo para reembolso via plano, conforme as regras de cada convênio.',
    },
    {
      question: 'Preciso de encaminhamento médico para fazer a avaliação?',
      answer:
        'Não. Você pode procurar diretamente, mesmo sem encaminhamento. Se perceber alguma dificuldade de atenção, memória, comportamento, ou se tiver dúvidas sobre seu próprio funcionamento ou de alguém próximo, estamos aqui para escutar e ajudar a investigar.',
    },
    {
      question: 'O que preciso levar para a minha primeira consulta?',
      answer:
        'Se houver encaminhamento médico, relatórios anteriores, exames ou anotações escolares (no caso de adolescentes), traga esses documentos. Eles ajudam a compor um panorama mais completo. Também é útil trazer anotações com dúvidas ou observações sobre o que você está vivenciando.',
    },
  ];

  return (
    <section id="faq" className="bg-[#F8F8F7] px-6 py-10 md:px-20 md:pt-20 md:pb-28 border-b border-[#C9C6C5] md:scroll-mt-[64px]">
      <div className="max-w-[832px] mx-auto">
        <div className="flex flex-col gap-10 md:gap-16">
          {/* Header */}
          <h2
            className="text-[#1E0C01] font-normal leading-[1.15] tracking-[-0.03em] text-left md:text-center"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            Dúvidas frequentes
          </h2>

          {/* FAQ Items */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
