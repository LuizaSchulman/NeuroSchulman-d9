"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import Image from "next/image"
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

const responseOptions = ["Nunca", "Quase nunca", "De vez em quando", "Quase sempre", "Sempre"]

const impactContexts = [
  { id: "trabalho", label: "Trabalho" },
  { id: "social", label: "Vida social" },
  { id: "estudos", label: "Estudos" },
  { id: "relacionamento", label: "Relacionamento conjugal ou familiar" },
  { id: "nenhum", label: "Nenhum" },
]

export default function TesteTDAHIniciar() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [impactAreas, setImpactAreas] = useState<string[]>([])
  const [showImpactQuestion, setShowImpactQuestion] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowImpactQuestion(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
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
      if (answer && question.scoringCriteria.includes(answer)) {
        partAScore++
      }
    })

    // Calcular pontuação Parte B
    let partBScore = 0
    questions.slice(6).forEach((question) => {
      const answer = answers[question.id]
      if (answer && question.scoringCriteria.includes(answer)) {
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
    window.location.href = "/teste-tdah-adulto/resultado"
  }

  const currentQuestionData = questions[currentQuestion]
  const currentAnswer = answers[currentQuestionData?.id]
  const canProceed = currentAnswer !== undefined

  if (showImpactQuestion) {
    return (
      <div className="min-h-screen" style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: "#f4f2ef" }}>
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
              <Button
                variant="ghost"
                onClick={() => setShowImpactQuestion(false)}
                className="text-emerald-700 hover:text-orange-500"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-800 text-center">Contextos de Impacto</CardTitle>
                <p className="text-emerald-600 text-center">
                  Em quais contextos os comportamentos descritos nas questões anteriores impactam negativamente sua vida?
                </p>
                <p className="text-sm text-emerald-500 text-center">(marque todos os que se aplicam)</p>
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
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    {isSubmitting ? "Processando..." : "Ver Resultado"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: "#f4f2ef" }}>
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
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "/teste-tdah-adulto")}
              className="text-emerald-700 hover:text-orange-500"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </div>
        </div>
      </header>

      {/* Warning Banner */}
      <div className="bg-orange-50 border-b border-orange-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-orange-700">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="font-medium">
              ⚠️ Estes sintomas devem estar presentes desde antes dos 12 anos de idade.
            </span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-emerald-600">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm text-emerald-600">
                {currentQuestionData.part === "A" ? "Parte A" : "Parte B"}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="border-0 shadow-lg bg-white mb-6">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-800 leading-relaxed">{currentQuestionData.text}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={currentAnswer || ""}
                onValueChange={(value) => handleAnswer(currentQuestionData.id, value)}
              >
                {responseOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="text-emerald-700 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="text-emerald-700 border-emerald-200 bg-transparent"
            >
              Anterior
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              {currentQuestion === questions.length - 1 ? "Continuar" : "Próxima"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
