"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

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
const CONCORDO_ITEMS = [1, 7, 10]
// Items that score with "Discordo" responses (1-based indexing)
const DISCORDO_ITEMS = [2, 3, 4, 5, 6, 8, 9]

export default function IniciarTesteAQ10() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<string[]>([])
  const [selectedResponse, setSelectedResponse] = useState("")

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
    let calculatedScore = 0

    allResponses.forEach((response, index) => {
      const questionNumber = index + 1
      const isConcordoResponse = response.includes("concordo")
      const isDiscordoResponse = response.includes("discordo")

      // Score logic based on AQ-10 scoring rules
      if (CONCORDO_ITEMS.includes(questionNumber) && isConcordoResponse) {
        calculatedScore += 1
      } else if (DISCORDO_ITEMS.includes(questionNumber) && isDiscordoResponse) {
        calculatedScore += 1
      }
    })

    // Redirect to results page
    router.push(`/teste-tea-adulto/resultado?score=${calculatedScore}&testType=AQ-10`)
  }

  const progress = ((currentQuestion + 1) / AQ10_QUESTIONS.length) * 100

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: "#f4f2ef" }}>
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
