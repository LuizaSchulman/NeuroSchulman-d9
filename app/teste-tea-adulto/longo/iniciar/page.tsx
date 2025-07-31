"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Phone, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const AQ50_QUESTIONS = [
  "Eu prefiro fazer as coisas com os outros, em vez de sozinho.",
  "Eu prefiro fazer as coisas da mesma maneira sempre.",
  "Se eu tentar imaginar algo, acho que é muito fácil criar uma imagem em minha mente.",
  "Eu frequentemente fico tão fortemente concentrado em uma coisa que eu ignoro outras coisas.",
  "Costumo observar pequenos sons quando os outros não os percebem.",
  "Eu costumo observar placas de carros, números ou sequências similares de informações.",
  "Outras pessoas frequentemente me corrigem, dizendo que o que falo é falta de educação, mesmo quando eu acho que é educado.",
  "Quando eu estou lendo uma história, eu posso facilmente imaginar o que os personagens estão fazendo.",
  "Sou fascinado por datas.",
  "Em um grupo social, eu posso facilmente manter conversação com diferentes pessoas.",
  "Acho fácil conviver socialmente.",
  "Eu percebo detalhes que outros não percebem tão facilmente.",
  "Prefiro ir a uma biblioteca do que uma festa.",
  "Acho inventar histórias algo muito fácil.",
  "Sou atraído mais fortemente para as pessoas do que para coisas.",
  "Quando tenho interesse muito forte num determinado assunto, fico muito chateado se não consigo levar adiante meus pensamentos sobre este assunto.",
  "Eu gosto de fofoca social.",
  "Quando eu falo, nem sempre é fácil para os outros entenderem claramente o que quero dizer.",
  "Sou fascinado por números.",
  "Quando eu estou lendo uma história, acho difícil entender as intenções dos personagens.",
  "Eu particularmente não gosto de ler ficção.",
  "Acho que é difícil fazer novos amigos.",
  "Percebo padrões nas coisas o tempo todo.",
  "Prefiro ir ao teatro do que um museu.",
  "Eu não me chateio se minha rotina diária é perturbada.",
  "Eu frequentemente tenho dificuldade em manter uma conversa.",
  'Consigo facilmente "ler nas entrelinhas" quando alguém está falando comigo.',
  "Eu costumo me concentrar mais numa imagem por inteiro do que nos pequenos detalhes.",
  "Eu não sou muito bom em lembrar números de telefone.",
  "Eu não costumo perceber pequenas mudanças em uma situação ou na aparência de uma pessoa.",
  "Eu percebo se alguém que está me ouvindo está ficando entediado.",
  "Acho fácil fazer mais de uma coisa ao mesmo tempo.",
  "Quando eu falo ao telefone, tenho dificuldade de saber quando é a minha vez de falar.",
  "Eu gosto de fazer as coisas de forma espontânea.",
  "Muitas vezes sou o último a entender uma piada.",
  "Consigo perceber o que uma pessoa está pensando ou sentindo só de olhar para seu rosto.",
  "Se houver uma interrupção, eu posso voltar para o que eu estava fazendo muito rapidamente.",
  "Eu sou bom em conversa social.",
  "Muitas vezes as pessoas me dizem que eu continuo falando repetidamente sobre a mesma coisa.",
  "Quando eu era jovem, eu gostava de jogar jogos de imaginação com outras crianças.",
  "Eu gosto de coletar informações sobre categorias de coisas (por exemplo, os tipos de carros, pássaros, trens, plantas).",
  "Para mim, é muito difícil imaginar-me sendo outra pessoa.",
  "Eu gosto de planejar cuidadosamente qualquer atividade que eu irei participar.",
  "Gosto de ocasiões (reuniões) sociais.",
  "Acho difícil detectar as reais intenções das pessoas.",
  "Situações novas me deixam ansioso.",
  "Eu gosto de conhecer novas pessoas.",
  "Eu sou um bom diplomata.",
  "Eu não sou muito bom em lembrar da data de nascimento das pessoas.",
  "Gosto de brincar de jogos imaginários com as crianças.",
]

const RESPONSE_OPTIONS = [
  { value: "concordo-totalmente", label: "Concordo totalmente" },
  { value: "concordo-parcialmente", label: "Concordo parcialmente" },
  { value: "discordo-parcialmente", label: "Discordo parcialmente" },
  { value: "discordo-totalmente", label: "Discordo totalmente" },
]

// Items that score with "Concordo" responses (1-based indexing)
const CONCORDO_ITEMS = [2, 4, 5, 6, 7, 9, 12, 13, 16, 18, 19, 20, 21, 22, 23, 26, 33, 35, 39, 41, 42, 43, 45, 46]
// Items that score with "Discordo" responses (1-based indexing)
const DISCORDO_ITEMS = [
  1, 3, 8, 10, 11, 14, 15, 17, 24, 25, 27, 28, 29, 30, 31, 32, 34, 36, 37, 38, 40, 44, 47, 48, 49, 50,
]

export default function IniciarTesteAQ50() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<string[]>(new Array(AQ50_QUESTIONS.length).fill(""))

  const handleResponseSelect = (response: string) => {
    const newResponses = [...responses]
    newResponses[currentQuestion] = response
    setResponses(newResponses)

    // Auto-advance to next question
    if (currentQuestion < AQ50_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      // Test completed, calculate results
      setTimeout(() => {
        calculateResults(newResponses)
      }, 300)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResults = (allResponses: string[]) => {
    let calculatedScore = 0

    allResponses.forEach((response, index) => {
      const questionNumber = index + 1
      const isConcordoResponse = response.includes("concordo")
      const isDiscordoResponse = response.includes("discordo")

      // Score logic based on AQ-50 scoring rules
      if (CONCORDO_ITEMS.includes(questionNumber) && isConcordoResponse) {
        calculatedScore += 1
      } else if (DISCORDO_ITEMS.includes(questionNumber) && isDiscordoResponse) {
        calculatedScore += 1
      }
    })

    // Redirect to results page
    router.push(`/teste-tea-adulto/resultado?score=${calculatedScore}&testType=AQ-50`)
  }

  const progress = ((currentQuestion + 1) / AQ50_QUESTIONS.length) * 100

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}>
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-emerald-700 hover:text-emerald-800"
              onClick={() =>
                window.open("https://wa.me/5541984599063?text=Olá, gostaria de agendar uma consulta.", "_blank")
              }
            >
              <Phone className="h-4 w-4 mr-1" />
              Marcar consulta
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-emerald-700 hover:text-emerald-800"
              onClick={() => router.push("/")}
            >
              <Home className="h-4 w-4 mr-1" />
              Voltar ao menu principal
            </Button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b mt-12" style={{ borderColor: "#f4f2ef" }}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-final.png"
                alt="Luiza Schulman - Neuropsicologia"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="/teste-tea-adulto/longo">
              <Button variant="ghost" className="text-emerald-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-emerald-700 font-medium">
                Pergunta {currentQuestion + 1} de {AQ50_QUESTIONS.length}
              </span>
              <span className="text-emerald-600 text-sm">{Math.round(progress)}% concluído</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-emerald-800 text-xl leading-relaxed">
                {AQ50_QUESTIONS[currentQuestion]}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {RESPONSE_OPTIONS.map((option) => (
                <Button
                  key={option.value}
                  variant={responses[currentQuestion] === option.value ? "default" : "outline"}
                  className={`w-full p-4 h-auto text-left justify-start ${
                    responses[currentQuestion] === option.value
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                  }`}
                  onClick={() => handleResponseSelect(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Back Button */}
          {currentQuestion > 0 && (
            <div className="mt-6 flex justify-start">
              <Button variant="ghost" onClick={handlePrevious} className="text-emerald-600 hover:text-emerald-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
