"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, AlertTriangle, Phone, Home } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { saveTDAHResult } from "@/lib/test-storage"

const questions = [
  // Parte A - Critério A (6 perguntas)
  {
    id: 1,
    text: "Com que frequência você deixa um projeto pela metade depois de já ter feito as partes mais difíceis?",
    part: "A",
    scoringCriteria: ["De vez em quando", "Quase sempre", "Sempre"],
  },
  {
    id: 2,
    text: "Com que frequência você tem dificuldade para fazer um trabalho que exige organização?",
    part: "A",
    scoringCriteria: ["De vez em quando", "Quase sempre", "Sempre"],
  },
  {
    id: 3,
    text: "Com que frequência você tem dificuldade para lembrar de compromissos ou obrigações?",
    part: "A",
    scoringCriteria: ["De vez em quando", "Quase sempre", "Sempre"],
  },
  {
    id: 4,
    text: "Quando você precisa fazer algo que exige muita concentração, com que frequência você evita ou adia o início?",
    part: "A",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 5,
    text: "Com que frequência você fica se mexendo na cadeira ou balançando as mãos ou os pés quando precisa ficar sentado(a) por muito tempo?",
    part: "A",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 6,
    text: 'Com que frequência você se sente ativo(a) demais e necessitando fazer coisas, como se estivesse "com um motor ligado"?',
    part: "A",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  // Parte B - Sintomas adicionais (12 perguntas)
  {
    id: 7,
    text: "Com que frequência você comete erros bobos por falta de atenção quando tem de trabalhar num projeto chato ou difícil?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 8,
    text: "Com que frequência você tem dificuldade para manter a atenção quando está fazendo um trabalho chato ou repetitivo?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 9,
    text: "Com que frequência você tem dificuldade para se concentrar no que as pessoas dizem, mesmo quando elas estão falando diretamente com você?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 10,
    text: "Com que frequência você coloca as coisas fora do lugar ou tem dificuldade de encontrar as coisas em casa ou no trabalho?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 11,
    text: "Com que frequência você se distrai com atividades ou barulho à sua volta?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 12,
    text: "Com que frequência você se sente inquieto(a) ou agitado(a)?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 13,
    text: "Com que frequência você tem dificuldade para sossegar e relaxar quando tem tempo livre para você?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 14,
    text: "Com que frequência você se pega falando demais em situações sociais?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 15,
    text: "Com que frequência você se levanta da cadeira em reuniões ou em outras situações onde deveria ficar sentado(a)?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 16,
    text: "Quando você está conversando, com que frequência você se pega terminando as frases das pessoas antes delas?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 17,
    text: "Com que frequência você tem dificuldade para esperar nas situações onde cada um tem a sua vez?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
  {
    id: 18,
    text: "Com que frequência você interrompe os outros quando eles estão ocupados?",
    part: "B",
    scoringCriteria: ["Quase sempre", "Sempre"],
  },
]

const responseOptions = [
  { value: "nunca", label: "Nunca" },
  { value: "quase-nunca", label: "Quase nunca" },
  { value: "de-vez-em-quando", label: "De vez em quando" },
  { value: "quase-sempre", label: "Quase sempre" },
  { value: "sempre", label: "Sempre" },
]

const impactContexts = [
  { id: "trabalho", label: "Trabalho" },
  { id: "social", label: "Vida social" },
  { id: "estudos", label: "Estudos" },
  { id: "relacionamento", label: "Relacionamento conjugal ou familiar" },
  { id: "nenhum", label: "Nenhum" },
]

export default function TesteTDAHIniciar() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [impactAreas, setImpactAreas] = useState<string[]>([])
  const [showImpactQuestion, setShowImpactQuestion] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const progress = showImpactQuestion ? 100 : ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (questionId: number, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer }
    setAnswers(newAnswers)

    // Auto-advance to next question
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      // Move to impact question
      setTimeout(() => {
        setShowImpactQuestion(true)
      }, 300)
    }
  }

  const handlePrevious = () => {
    if (showImpactQuestion) {
      setShowImpactQuestion(false)
      setCurrentQuestion(questions.length - 1)
    } else if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleImpactChange = (contextId: string, checked: boolean) => {
    if (contextId === "nenhum") {
      if (checked) {
        setImpactAreas(["nenhum"])
      } else {
        setImpactAreas([])
      }
    } else {
      setImpactAreas((prev) => {
        const filtered = prev.filter((id) => id !== "nenhum")
        if (checked) {
          return [...filtered, contextId]
        } else {
          return filtered.filter((id) => id !== contextId)
        }
      })
    }
  }

  const calculateResults = () => {
    // Calcular pontuação Parte A
    let partAScore = 0
    questions.slice(0, 6).forEach((question) => {
      const answer = answers[question.id]
      if (
        answer &&
        question.scoringCriteria.some((criteria) => answer.includes(criteria.toLowerCase().replace(/\s+/g, "-")))
      ) {
        partAScore++
      }
    })

    // Calcular pontuação Parte B
    let partBScore = 0
    questions.slice(6).forEach((question) => {
      const answer = answers[question.id]
      if (
        answer &&
        question.scoringCriteria.some((criteria) => answer.includes(criteria.toLowerCase().replace(/\s+/g, "-")))
      ) {
        partBScore++
      }
    })

    // Verificar contextos de impacto
    const validImpactAreas = impactAreas.filter((area) => area !== "nenhum")
    const hasSignificantImpact = validImpactAreas.length >= 2

    // Determinar resultado final
    let resultType: string
    let resultMessage: string

    if (!hasSignificantImpact || partAScore < 4) {
      resultType = "negativo"
      resultMessage = "Não apresenta traços significativos de TDAH"
    } else {
      if (partBScore <= 4) {
        resultType = "leve"
        resultMessage = "Leve presença de traços compatíveis com TDAH"
      } else if (partBScore <= 8) {
        resultType = "moderado"
        resultMessage = "Presença moderada de traços compatíveis com TDAH"
      } else {
        resultType = "alto"
        resultMessage = "Alta probabilidade de traços compatíveis com TDAH"
      }
    }

    return {
      partAScore,
      partBScore,
      impactAreas: validImpactAreas,
      resultType,
      resultMessage,
      totalQuestions: questions.length,
      answeredQuestions: Object.keys(answers).length,
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    const results = calculateResults()

    // Salvar resultado
    saveTDAHResult({
      answers,
      impactAreas,
      ...results,
      completedAt: new Date().toISOString(),
    })

    // Redirecionar para página de resultado
    router.push("/teste-tdah-adulto/resultado")
  }

  if (showImpactQuestion) {
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
        <header className="sticky top-12 z-40 bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: "#f4f2ef" }}>
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo-final.png"
                  alt="Luiza Schulman - Neuropsicologia"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-emerald-700 font-medium">Contextos de Impacto</span>
                <span className="text-emerald-600 text-sm">100% concluído</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-emerald-800 text-xl leading-relaxed">
                  Em quais contextos os comportamentos descritos nas questões anteriores impactam negativamente sua
                  vida?
                </CardTitle>
                <p className="text-emerald-600 text-sm">(marque todos os que se aplicam)</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {impactContexts.map((context) => (
                  <div key={context.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={context.id}
                      checked={impactAreas.includes(context.id)}
                      onCheckedChange={(checked) => handleImpactChange(context.id, checked as boolean)}
                    />
                    <Label htmlFor={context.id} className="text-emerald-700 cursor-pointer">
                      {context.label}
                    </Label>
                  </div>
                ))}

                <div className="pt-6">
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || impactAreas.length === 0}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
                  >
                    {isSubmitting ? "Processando..." : "Ver Resultado"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Back Button */}
            <div className="mt-6 flex justify-start">
              <Button variant="ghost" onClick={handlePrevious} className="text-emerald-600 hover:text-emerald-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  const currentQuestionData = questions[currentQuestion]
  const currentAnswer = answers[currentQuestionData?.id]

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

      {/* Warning Banner */}
      <div className="bg-orange-50 border-b border-orange-200 py-3 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-orange-700">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="font-medium">
              ⚠️ Estes sintomas devem estar presentes desde antes dos 12 anos de idade.
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-12 z-40 bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: "#f4f2ef" }}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo-final.png"
                alt="Luiza Schulman - Neuropsicologia"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-emerald-700 font-medium">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-emerald-600 text-sm">
                {currentQuestionData.part === "A" ? "Parte A" : "Parte B"} - {Math.round(progress)}% concluído
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-emerald-800 text-xl leading-relaxed">{currentQuestionData.text}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {responseOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={currentAnswer === option.value ? "default" : "outline"}
                  className={`w-full p-4 h-auto text-left justify-start ${
                    currentAnswer === option.value
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                  }`}
                  onClick={() => handleAnswer(currentQuestionData.id, option.value)}
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
