"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Menu,
  X,
  MessageCircle,
  FileText,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  ExternalLink,
  CheckCircle,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"

export default function NeuropsicologiaClinic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDuck, setShowDuck] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50"
      style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: "#f4f2ef" }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className="flex items-center">
                <Image
                  src="/logo-final.png"
                  alt="Luiza Schulman - Neuropsicologia"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 ml-auto">
              <button
                onClick={() => scrollToSection("home")}
                className="text-emerald-700 hover:text-orange-500 transition-colors font-medium text-sm"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-emerald-700 hover:text-orange-500 transition-colors font-medium text-sm"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection("quem-somos")}
                className="text-emerald-700 hover:text-orange-500 transition-colors font-medium text-sm"
              >
                Quem Vai Te Atender
              </button>
              <button
                onClick={() => scrollToSection("duvidas")}
                className="text-emerald-700 hover:text-orange-500 transition-colors font-medium text-sm"
              >
                Dúvidas Frequentes
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-emerald-700 hover:text-orange-500 transition-colors font-medium text-sm"
              >
                Entre Em Contato
              </button>
              <button
                onClick={() => scrollToSection("testes-gratuitos")}
                className="text-emerald-700 hover:text-orange-500 transition-colors font-medium text-sm"
              >
                Testes Gratuitos
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-emerald-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4" style={{ borderColor: "#f4f2ef" }}>
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-emerald-700 hover:text-orange-500 transition-colors font-medium"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection("como-funciona")}
                  className="text-left text-emerald-700 hover:text-orange-500 transition-colors font-medium"
                >
                  Como Funciona
                </button>
                <button
                  onClick={() => scrollToSection("quem-somos")}
                  className="text-left text-emerald-700 hover:text-orange-500 transition-colors font-medium"
                >
                  Quem Vai Te Atender
                </button>
                <button
                  onClick={() => scrollToSection("duvidas")}
                  className="text-left text-emerald-700 hover:text-orange-500 transition-colors font-medium"
                >
                  Dúvidas Frequentes
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-left text-emerald-700 hover:text-orange-500 transition-colors font-medium"
                >
                  Entre Em Contato
                </button>
                <button
                  onClick={() => scrollToSection("testes-gratuitos")}
                  className="text-left text-emerald-700 hover:text-orange-500 transition-colors font-medium"
                >
                  Testes Gratuitos
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="relative py-20 lg:py-32 min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/consultorio-1.jpg" alt="Consultório de neuropsicologia" fill className="object-cover" priority />
          {/* Overlay */}
          <div className="absolute inset-0 bg-emerald-900/75"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg cursor-pointer"
              onClick={() => setShowDuck(!showDuck)}
            >
              <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>
                A
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>
                v
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
                a
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.3s" }}>
                l
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>
                i
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.5s" }}>
                a
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.6s" }}>
                ç
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.7s" }}>
                ã
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.8s" }}>
                o
              </span>
              <span className="inline-block mx-2"></span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.9s" }}>
                n
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "1s" }}>
                e
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "1.1s" }}>
                u
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "1.2s" }}>
                r
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "1.3s" }}>
                o
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "1.4s" }}>
                p
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "1.5s" }}>
                s
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "1.6s" }}>
                i
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "1.7s" }}>
                c
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "1.8s" }}>
                o
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "1.9s" }}>
                l
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "2s" }}>
                ó
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "2.1s" }}>
                g
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "2.2s" }}>
                i
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "2.3s" }}>
                c
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "2.4s" }}>
                a
              </span>
              <span className="inline-block mx-2"></span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "2.5s" }}>
                a
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "2.6s" }}>
                t
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "2.7s" }}>
                e
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "2.8s" }}>
                n
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "2.9s" }}>
                t
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "3s" }}>
                a
              </span>
              <span className="inline-block mx-2"></span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "3.1s" }}>
                e
              </span>
              <span className="inline-block mx-2"></span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "3.2s" }}>
                i
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "3.3s" }}>
                n
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "3.4s" }}>
                d
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "3.5s" }}>
                i
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "3.6s" }}>
                v
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "3.7s" }}>
                i
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "3.8s" }}>
                d
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "3.9s" }}>
                u
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "4s" }}>
                a
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "4.1s" }}>
                l
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "4.2s" }}>
                i
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "4.3s" }}>
                z
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "4.4s" }}>
                a
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "4.5s" }}>
                d
              </span>
              <span className="text-orange-400 inline-block animate-bounce" style={{ animationDelay: "4.6s" }}>
                a
              </span>
            </h1>
            {showDuck && (
              <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                <div className="text-9xl animate-spin">🦆</div>
              </div>
            )}
            <p className="text-xl mb-10 leading-relaxed drop-shadow-md" style={{ color: "#f4f2ef" }}>
              Compreender é o primeiro passo para cuidar.
            </p>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-4 text-sm font-medium uppercase rounded-md shadow-2xl hover:shadow-3xl transition-all tracking-wide"
              onClick={() =>
                window.open(
                  "https://wa.me/5541984599063?text=Olá! Gostaria de agendar uma consulta para avaliação neuropsicológica.",
                  "_blank",
                )
              }
            >
              Marque agora sua consulta
            </Button>

            {/* Floating Cards */}
            <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <MessageCircle className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Escuta Cuidadosa</h3>
                <p className="text-sm" style={{ color: "#f4f2ef" }}>
                  Atendimento personalizado e acolhedor
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <CheckCircle className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Base Científica</h3>
                <p className="text-sm" style={{ color: "#f4f2ef" }}>
                  Instrumentos padronizados e validados
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <FileText className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Laudo Completo</h3>
                <p className="text-sm" style={{ color: "#f4f2ef" }}>
                  Relatório detalhado e acessível
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-emerald-800 text-center mb-4">Como Funciona</h2>
            <p className="text-lg text-emerald-600 text-center mb-16">
              Entenda as etapas da avaliação neuropsicológica:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card
                className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl"
                style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}
              >
                <CardHeader className="pb-0 mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full" style={{ backgroundColor: "#f4f2ef" }}>
                      <MessageCircle className="h-6 w-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl text-emerald-800 font-bold">Entrevista inicial</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-emerald-700 leading-relaxed">
                    A entrevista inicial é uma conversa para te conhecer melhor, entender suas queixas e reunir
                    informações importantes sobre sua saúde, rotina e história de vida.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl"
                style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}
              >
                <CardHeader className="pb-0 mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full" style={{ backgroundColor: "#f4f2ef" }}>
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl text-emerald-800 font-bold">Aplicação dos testes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-emerald-700 leading-relaxed">
                    Utilizamos instrumentos padronizados para avaliar funções como memória, atenção, linguagem,
                    percepção, entre outras.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl"
                style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}
              >
                <CardHeader className="pb-0 mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full" style={{ backgroundColor: "#f4f2ef" }}>
                      <Lightbulb className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl text-emerald-800 font-bold">Devolutiva</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-emerald-700 leading-relaxed">
                    Apresentamos os resultados, explicamos o perfil cognitivo e emocional, discutimos hipóteses
                    diagnósticas e indicamos encaminhamentos.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl"
                style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}
              >
                <CardHeader className="pb-0 mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full" style={{ backgroundColor: "#f4f2ef" }}>
                      <FileText className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl text-emerald-800 font-bold">Entrega do laudo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-emerald-700 leading-relaxed">
                    Você recebe um documento completo e acessível, com os resultados, interpretações e recomendações.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Espaço Section */}
      <section className="py-20" style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-emerald-800 mb-4">Nosso Espaço</h2>
            <p className="text-lg text-emerald-600 mb-12">
              Um ambiente acolhedor e profissional, pensado para seu bem-estar
            </p>

            <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              <div className="group">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src="/consultorio-2.jpg"
                    alt="Área de atendimento confortável"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <p className="text-emerald-600 mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
              Nosso consultório foi pensado para proporcionar conforto e tranquilidade durante todo o processo de
              avaliação. Com ambiente climatizado, iluminação natural e decoração acolhedora, criamos um espaço onde
              você se sente à vontade para compartilhar suas experiências e dúvidas.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-20 bg-gradient-to-br from-emerald-800 to-teal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Quem Vai Te Atender</h2>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col justify-center">
                <div className="bg-emerald-900 backdrop-blur-sm rounded-2xl p-8 overflow-hidden h-full flex flex-col justify-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-orange-400/50">
                      <Image
                        src="/luiza-photo.jpg"
                        alt="Psicóloga Luiza Schulman"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Psicóloga Luiza Schulman</h3>
                    <p className="text-orange-200 text-lg">CRP: 08/37426</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 flex flex-col justify-center">
                <p className="text-lg leading-relaxed" style={{ color: "#f4f2ef" }}>
                  Sou psicóloga formada pela PUC-PR, com especialização em Neuropsicologia pela Sapiens. Atuo com
                  avaliação neuropsicológica de adolescentes, adultos e idosos, ajudando a entender como o cérebro
                  funciona em diferentes aspectos do dia a dia — da atenção e memória até as emoções, o comportamento e
                  o raciocínio.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "#f4f2ef" }}>
                  Acredito em uma escuta atenta e cuidadosa, em avaliações que respeitam o ritmo de cada pessoa e que
                  buscam traduzir, com clareza e embasamento científico, aquilo que muitas vezes é sentido, mas difícil
                  de explicar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dúvidas Frequentes Section */}
      <section id="duvidas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-emerald-800 text-center mb-16">Dúvidas Frequentes</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">O que é uma avaliação neuropsicológica?</AccordionTrigger>
                <AccordionContent>
                  É um processo clínico que utiliza testes, entrevistas e observações para investigar o funcionamento do
                  cérebro. Avaliamos funções cognitivas como atenção, memória, linguagem, raciocínio, funções
                  executivas, habilidades motoras, percepção, entre outras.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">Para quem a avaliação é indicada?</AccordionTrigger>
                <AccordionContent>
                  A avaliação neuropsicológica é indicada para pessoas de todas as idades que apresentam dificuldades
                  cognitivas, comportamentais ou emocionais que impactam seu funcionamento no dia a dia. Ela é
                  especialmente recomendada em casos de suspeita de TDAH, transtornos de aprendizagem, autismo,
                  alterações de memória, sequelas neurológicas (como AVC ou traumatismo craniano) e quadros
                  psiquiátricos em que se deseja compreender melhor o perfil cognitivo do paciente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Quais profissionais solicitam esse tipo de avaliação?
                </AccordionTrigger>
                <AccordionContent>
                  A avaliação pode ser solicitada por neurologistas, psiquiatras, psicólogos, fonoaudiólogos, geriatras,
                  entre outros. Mas você também pode procurar diretamente, caso perceba alguma mudança ou dificuldade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">Como é o processo de avaliação?</AccordionTrigger>
                <AccordionContent>
                  O processo começa com uma conversa inicial, em que o neuropsicólogo escuta a história do paciente e
                  entende suas queixas e necessidades. Em seguida, são aplicados testes e atividades que se parecem com
                  jogos, desafios ou quebra-cabeças — alguns envolvem memória, atenção, linguagem, raciocínio ou
                  habilidades motoras. Essas tarefas ajudam o neuropsicólogo a entender como o cérebro da pessoa está
                  funcionando, quais são seus pontos fortes e onde há mais dificuldade. Ao final, os resultados são
                  organizados em um relatório e discutidos com o paciente, trazendo orientações claras e personalizadas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Quantas sessões são necessárias?</AccordionTrigger>
                <AccordionContent>
                  Isso varia conforme a demanda e o ritmo de cada pessoa. Em geral, o processo envolve uma entrevista
                  inicial e de 3 a 5 sessões de avaliação. Às vezes pode ser necessário mais tempo — nosso foco é fazer
                  uma avaliação cuidadosa e completa. Se identificarmos a necessidade de sessões adicionais para
                  garantir a qualidade do resultado, elas serão incluídas sem custo extra.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">A avaliação inclui diagnóstico?</AccordionTrigger>
                <AccordionContent>
                  O laudo pode contribuir com hipóteses diagnósticas, mas o diagnóstico definitivo deve ser feito por um
                  médico. A avaliação neuropsicológica é uma ferramenta que oferece informações valiosas para o
                  entendimento clínico. Ao final do processo, ofereço dados detalhados sobre o funcionamento cognitivo
                  do paciente, que podem ajudar muito na compreensão global do caso e na adaptação de condutas médicas e
                  terapêuticas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  A avaliação serve para fins jurídicos ou periciais?
                </AccordionTrigger>
                <AccordionContent>
                  Não. Este consultório realiza apenas avaliações clínicas, com foco terapêutico e de acompanhamento.
                  Não oferecemos avaliações com finalidade pericial ou judicial.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">Como recebo os resultados?</AccordionTrigger>
                <AccordionContent>
                  Os resultados são entregues em um relatório escrito e apresentados pessoalmente em uma sessão de
                  devolutiva. Nessa conversa, explico cada parte do laudo com clareza, respondendo dúvidas e oferecendo
                  orientações personalizadas. A devolutiva é um momento fundamental para que o paciente ou a família
                  compreendam o que foi avaliado e como utilizar essas informações de forma prática.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">A avaliação é coberta por plano de saúde?</AccordionTrigger>
                <AccordionContent>
                  Atualmente, o atendimento é particular. Se necessário, fornecemos recibo para reembolso via plano,
                  conforme as regras de cada convênio.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  Preciso de encaminhamento médico para fazer a avaliação?
                </AccordionTrigger>
                <AccordionContent>
                  Não. Você pode procurar diretamente, mesmo sem encaminhamento. Se perceber alguma dificuldade de
                  atenção, memória, comportamento, ou se tiver dúvidas sobre seu próprio funcionamento ou de alguém
                  próximo, estou aqui para escutar e ajudar a investigar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left">O que preciso levar para a primeira consulta?</AccordionTrigger>
                <AccordionContent>
                  Se houver encaminhamento médico, relatórios anteriores, exames ou anotações escolares (no caso de
                  adolescentes), traga esses documentos. Eles ajudam a compor um panorama mais completo. Também é útil
                  trazer anotações com dúvidas ou observações sobre o que você está vivenciando.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testes Gratuitos Section */}
      <section id="testes-gratuitos" className="py-20 bg-gradient-to-br from-emerald-800 to-teal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Teste gratuito de rastreio para autismo em adultos</h2>
            <p className="text-xl mb-10 leading-relaxed" style={{ color: "#f4f2ef" }}>
              Identifique possíveis traços do espectro autista com um teste rápido, online e gratuito.
            </p>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-md shadow-2xl hover:shadow-3xl transition-all"
              onClick={() => (window.location.href = "/teste-tea-adulto")}
            >
              Fazer o teste
            </Button>

            <p className="text-sm mt-6 opacity-80" style={{ color: "#f4f2ef" }}>
              * Este é um teste de triagem e não substitui uma avaliação clínica profissional
            </p>
          </div>
        </div>
      </section>

      {/* Entre em Contato Section */}
      <section
        id="contato"
        className="py-20"
        style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-emerald-800 text-center mb-4">Entre Em Contato</h2>
            <p className="text-lg text-emerald-600 text-center mb-16">
              Ficou com dúvidas ou quer agendar sua avaliação?
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-emerald-800">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <span className="font-bold">Endereço</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-700 leading-relaxed mb-4">
                    Urban Office – Av. João Gualberto, 1342, sala 1903, Alto da Glória – Curitiba – PR
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-emerald-700 bg-transparent"
                    style={{ borderColor: "#f4f2ef" }}
                    onClick={() => window.open("https://maps.google.com", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-emerald-800">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="font-bold">Horários</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-700 leading-relaxed mb-4">Atendimentos com horário agendado</p>
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 font-semibold"
                      onClick={() =>
                        window.open(
                          "https://wa.me/5541984599063?text=Olá! Gostaria de agendar uma consulta para avaliação neuropsicológica.",
                          "_blank",
                        )
                      }
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp: 41 98459-9063
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full text-emerald-700 bg-transparent"
                      style={{ borderColor: "#f4f2ef" }}
                      onClick={() => window.open("mailto:schulman.neuro@gmail.com", "_blank")}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      schulman.neuro@gmail.com
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Image
                src="/logo-final.png"
                alt="Luiza Schulman - Neuropsicologia"
                width={150}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>

            <div className="space-y-2 mb-6" style={{ color: "#f4f2ef" }}>
              <p>© 2025 Clínica de Neuropsicologia</p>
              <p>Psicóloga Luiza Schulman · CRP: 08/37426</p>
            </div>

            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-orange-400 hover:bg-emerald-700"
                style={{ color: "#f4f2ef" }}
                onClick={() => window.open("https://instagram.com/luiza.schulman", "_blank")}
              >
                <Instagram className="h-5 w-5 mr-2" />
                @luiza.schulman
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
