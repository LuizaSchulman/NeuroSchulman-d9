"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const AQ10_QUESTIONS = [
  "Costumo notar pequenos sons quando outros não percebem",
  "Eu geralmente me concentro mais no todo de uma imagem, ao invés de pequenos detalhes",
  "Acho fácil fazer mais de uma coisa de uma só vez",
  "Se houver uma interrupção, posso voltar para o que eu estava fazendo muito rápido",
  'Acho fácil "ler nas entrelinhas" quando alguém está falando comigo',
  "Eu sei dizer se alguém que está me ouvindo está ficando entediado",
  "Quando estou lendo uma história, acho difícil descobrir as intenções dos personagens",
  "Gosto de coletar informações sobre categorias de coisas (por exemplo, tipos de carro, tipos de pássaros, tipos de trem, tipos de planta etc.)",
  "Acho que é fácil descobrir o que alguém está pensando ou sentindo apenas olhando para o rosto da pessoa",
  "Acho difícil entender as intenções das pessoas",
]

const RESPONSE_OPTIONS = [
  { value: "concordo-totalmente", label: "Concordo totalmente" },
  { value: "concordo-parcialmente", label: "Concordo parcialmente" },
  { value: "discordo-parcialmente", label: "Discordo parcialmente" },
  { value: "discordo-totalmente", label: "Discordo totalmente" },
]

// Items that score with "Concordo" responses (1-based indexing)
const CONCORDO_ITEMS = [1, 5, 7, 10]
// Items that score with "Discordo" responses (1-based indexing)
const DISCORDO_ITEMS = [2, 3, 4, 6, 8, 9]

export default function IniciarTesteAQ10() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<string[]>([])
  const [selectedResponse, setSelectedResponse] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem("aq10-user-data")
    if (storedData) {
      setUserData(JSON.parse(storedData))
    } else {
      // Redirect back if no user data
      window.location.href = "/teste-tea-adulto/curto"
    }
  }, [])

  const handleResponseSelect = (response: string) => {
    setSelectedResponse(response)
  }

  const handleNext = () => {
    if (!selectedResponse) return

    const newResponses = [...responses, selectedResponse]
    setResponses(newResponses)
    setSelectedResponse("")

    if (currentQuestion < AQ10_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Test completed, calculate results
      calculateResults(newResponses)
    }
  }

  const calculateResults = (allResponses: string[]) => {
    let score = 0

    allResponses.forEach((response, index) => {
      const questionNumber = index + 1
      const isConcordoResponse = response.includes("concordo")
      const isDiscordoResponse = response.includes("discordo")

      // Score logic based on AQ-10 scoring rules
      if (CONCORDO_ITEMS.includes(questionNumber) && isConcordoResponse) {
        score += 1
      } else if (DISCORDO_ITEMS.includes(questionNumber) && isDiscordoResponse) {
        score += 1
      }
    })

    // Store results and show them
    const results = {
      userData,
      responses: allResponses,
      score,
      interpretation: getInterpretation(score),
    }

    // Store in localStorage for results page
    localStorage.setItem("aq10-results", JSON.stringify(results))
    setShowResults(true)
  }

  const getInterpretation = (score: number) => {
    if (score <= 3) {
      return {
        level: "Baixa probabilidade",
        description: "Baixa probabilidade de traços autísticos.",
        color: "text-green-700",
      }
    } else if (score <= 6) {
      return {
        level: "Alguns traços",
        description: "Presença de alguns traços autísticos, mas não necessariamente indicativo de autismo.",
        color: "text-yellow-700",
      }
    } else {
      return {
        level: "Alta probabilidade",
        description:
          "Alta probabilidade de traços autísticos, sugerindo a necessidade de uma avaliação mais detalhada por um profissional especializado.",
        color: "text-orange-700",
      }
    }
  }

  const progress = ((currentQuestion + 1) / AQ10_QUESTIONS.length) * 100

  if (showResults) {
    const results = JSON.parse(localStorage.getItem("aq10-results") || "{}")

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo-final.png"
                  alt="Luiza Schulman - Neuropsicologia"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>
        </header>

        {/* Results */}
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-3xl lg:text-4xl font-bold text-emerald-800 mb-4">Teste Concluído!</h1>
            </div>

            <Card className="bg-white shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-emerald-800 text-center">Seus Resultados - AQ-10</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div>
                  <div className="text-4xl font-bold text-emerald-800 mb-2">{results.score}/10</div>
                  <p className="text-emerald-600">Pontuação Total</p>
                </div>

                <div className={`p-4 rounded-lg bg-gray-50 ${results.interpretation.color}`}>
                  <h3 className="font-semibold text-lg mb-2">{results.interpretation.level}</h3>
                  <p className="leading-relaxed">{results.interpretation.description}</p>
                </div>

                <div className="text-sm text-gray-600 p-4 bg-gray-50 rounded-lg">
                  <p>
                    <strong>Lembre-se:</strong> O AQ-10 é uma ferramenta de triagem e não substitui uma avaliação
                    clínica. Para uma avaliação completa e diagnóstico preciso, consulte um profissional especializado.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 mb-4"
                onClick={() =>
                  window.open(
                    "https://wa.me/5541984599063?text=Olá, acabei de fazer o teste gratuito para TEA no site e gostaria de agendar uma consulta.",
                    "_blank",
                  )
                }
              >
                Agende uma consulta
              </Button>
              <p className="text-sm text-emerald-600">Fale conosco para uma avaliação neuropsicológica completa</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-final.png"
                alt="Luiza Schulman - Neuropsicologia"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <Link href="/teste-tea-adulto/curto">
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
                Pergunta {currentQuestion + 1} de {AQ10_QUESTIONS.length}
              </span>
              <span className="text-emerald-600 text-sm">{Math.round(progress)}% concluído</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-emerald-800 text-xl leading-relaxed">
                {AQ10_QUESTIONS[currentQuestion]}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {RESPONSE_OPTIONS.map((option) => (
                <Button
                  key={option.value}
                  variant={selectedResponse === option.value ? "default" : "outline"}
                  className={`w-full p-4 h-auto text-left justify-start ${
                    selectedResponse === option.value
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                  }`}
                  onClick={() => handleResponseSelect(option.value)}
                >
                  {option.label}
                </Button>
              ))}

              <div className="pt-4">
                <Button
                  onClick={handleNext}
                  disabled={!selectedResponse}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
                >
                  {currentQuestion < AQ10_QUESTIONS.length - 1 ? "Próxima" : "Finalizar Teste"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
