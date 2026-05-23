const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é uma avaliação neuropsicológica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É um processo clínico que utiliza testes, entrevistas e observações para investigar o funcionamento do cérebro. Avaliamos funções cognitivas como atenção, memória, linguagem, raciocínio, funções executivas, habilidades motoras, percepção, entre outras.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para quem a avaliação é indicada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A avaliação neuropsicológica é indicada para pessoas de todas as idades que apresentam dificuldades cognitivas, comportamentais ou emocionais que impactam seu funcionamento no dia a dia. Ela é especialmente recomendada em casos de suspeita de TDAH, transtornos de aprendizagem, autismo, alterações de memória, sequelas neurológicas e quadros psiquiátricos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais profissionais solicitam esse tipo de avaliação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A avaliação pode ser solicitada por neurologistas, psiquiatras, psicólogos, fonoaudiólogos, geriatras, entre outros. Mas você também pode procurar diretamente, caso perceba alguma mudança ou dificuldade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como é o processo de avaliação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O processo começa com uma conversa inicial, em que o neuropsicólogo escuta a história do paciente e entende suas queixas e necessidades. Em seguida, são aplicados testes e atividades. Ao final, os resultados são organizados em um relatório e discutidos com o paciente, trazendo orientações claras e personalizadas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantas sessões são necessárias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Isso varia conforme a demanda e o ritmo de cada pessoa. Em geral, o processo envolve uma entrevista inicial e de 3 a 5 sessões de avaliação. Se identificarmos a necessidade de sessões adicionais para garantir a qualidade do resultado, elas serão incluídas sem custo extra.',
      },
    },
    {
      '@type': 'Question',
      name: 'A avaliação inclui diagnóstico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O laudo pode contribuir com hipóteses diagnósticas, mas o diagnóstico definitivo deve ser feito por um médico. A avaliação neuropsicológica oferece informações valiosas para o entendimento clínico e a adaptação de condutas médicas e terapêuticas.',
      },
    },
    {
      '@type': 'Question',
      name: 'A avaliação serve para fins jurídicos ou periciais?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Este consultório realiza apenas avaliações clínicas, com foco terapêutico e de acompanhamento. Não oferecemos avaliações com finalidade pericial ou judicial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como recebo os resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os resultados são entregues em um relatório escrito e apresentados pessoalmente em uma sessão de devolutiva. Nessa conversa, são explicadas cada parte do laudo com clareza, respondendo dúvidas e oferecendo orientações personalizadas.',
      },
    },
    {
      '@type': 'Question',
      name: 'A avaliação é coberta por plano de saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atualmente, o atendimento é particular. Se necessário, fornecemos recibo para reembolso via plano, conforme as regras de cada convênio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso de encaminhamento médico para fazer a avaliação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Você pode procurar diretamente, mesmo sem encaminhamento. Se perceber alguma dificuldade de atenção, memória, comportamento, ou se tiver dúvidas sobre seu próprio funcionamento ou de alguém próximo, estamos aqui para escutar e ajudar a investigar.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que preciso levar para a minha primeira consulta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se houver encaminhamento médico, relatórios anteriores, exames ou anotações escolares (no caso de adolescentes), traga esses documentos. Eles ajudam a compor um panorama mais completo. Também é útil trazer anotações com dúvidas ou observações sobre o que você está vivenciando.',
      },
    },
  ],
};

export function FAQStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
      }}
    />
  );
}