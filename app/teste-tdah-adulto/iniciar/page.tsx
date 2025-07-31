"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Phone, Home, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const questions = [
  "Com que frequência você tem dificuldades para terminar os detalhes finais de um projeto, uma vez que as partes desafiadoras foram feitas?",
  "Com que frequência você tem dificuldade para fazer as coisas em ordem quando tem que fazer uma tarefa que requer organização?",
  "Com que frequência você tem problemas para lembrar de compromissos ou obrigações?",
  "Quando você tem uma tarefa que requer muito pensamento, com que frequência você evita ou adia o início?",
  "Com que frequência você fica inquieto ou mexe com as mãos ou os pés quando tem que ficar sentado por muito tempo?",
  "Com que frequência você se sente excessivamente ativo e compelido a fazer coisas, como se estivesse 'com o motor ligado'?",
  "Com que frequência você comete erros por descuido quando tem que trabalhar em um projeto chato ou difícil?",
  "Com que frequência você tem dificuldade para manter a atenção quando está fazendo trabalho chato ou repetitivo?",
  "Com que frequência você tem dificuldade para se concentrar no que as pessoas dizem, mesmo quando elas estão falando diretamente com você?",
  "Com que frequência você perde ou tem dificuldade para encontrar coisas em casa ou no trabalho?",
  "Com que frequência você se distrai com atividade ou ruído ao seu redor?",
  "Com que frequência você sai do seu lugar em reuniões ou outras situações nas quais você deveria permanecer sentado?",
  "Com que frequência você se sente inquieto ou impaciente?",
  "Com que frequência você tem dificuldade para relaxar quando tem tempo para si mesmo?",
  "Com que frequência você se encontra falando demais quando está em situações sociais?",
  "Quando você está em uma conversa, com que frequência você se encontra terminando as frases das pessoas antes delas terminarem?",
  "Com que frequência você tem dificuldade para esperar sua vez em situações quando é necessário esperar?",
  "Com que frequência você interrompe outros quando eles estão ocupados?",
]

const options = [
  { value: 0, label: "Nunca" },
  { value: 1, label: "Quase nunca" },
  { value: 2, label: "De vez em quando" },
  { value: 3, label: "Quase sempre" },
  { value: 4, label: "Sempre" },
]

export default function TesteTDAH() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem("tdahTestData")
    if (storedData) {
      setUserData(JSON.parse(storedData))
    } else {
      router.push("/teste-tdah-adulto")
    }
  }, [router])

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        // Calculate scores and redirect to results
        const partAScore = newAnswers.slice(0, 6).reduce((sum, answer) => sum + (answer >= 2 ? 1 : 0), 0)
        const partBScore = newAnswers.slice(6).reduce((sum, answer) => sum + (answer >= 2 ? 1 : 0), 0)

        let resultType = "negativo"
        let resultMessage = "Não apresenta traços significativos de TDAH"

        if (partAScore >= 4 && partBScore >= 4) {
          resultType = "alto"
          resultMessage = "Alta probabilidade de traços compatíveis com TDAH"
        } else if (partAScore >= 4 || partBScore >= 4) {
          resultType = "moderado"
          resultMessage = "Presença moderada de traços compatíveis com TDAH"
        } else if (partAScore >= 2 || partBScore >= 2) {
          resultType = "leve"
          resultMessage = "Leve presença de traços compatíveis com TDAH"
        }

        // Store result
        const result = {
          ...userData,
          partAScore,
          partBScore,
          answers: newAnswers,
          resultType,
          resultMessage,
          totalQuestions: questions.length,
          answeredQuestions: newAnswers.filter((a) => a !== -1).length,
          completedAt: new Date().toISOString(),
        }

        localStorage.setItem("tdahTestResult", JSON.stringify(result))
        router.push("/teste-tdah-adulto/resultado")
      }
    }, 300)
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (!userData) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}
      >
        <div className="text-center">
          <p className="text-emerald-700">Carregando teste...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}>
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-emerald-100 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/logo-final.png" alt="Luiza Schulman" width={120} height={40} className="h-8 w-auto" />
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  window.open("https://wa.me/5541984599063?text=Olá, gostaria de agendar uma consulta.", "_blank")
                }
                className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50"
              >
                <Phone className="h-4 w-4 mr-1" />
                Marcar consulta
              </Button>
              <span className="text-gray-300">|</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/")}
                className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50"
              >
                <Home className="h-4 w-4 mr-1" />
                Voltar ao menu principal
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Important Notice */}
            <Alert className="mb-6 border-orange-200 bg-orange-50">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800">
                <strong>Importante:</strong> Para um diagnóstico de TDAH, os sintomas devem estar presentes desde antes
                dos 12 anos de idade.
              </AlertDescription>
            </Alert>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-emerald-600">
                  Pergunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm text-emerald-600">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="bg-white shadow-lg mb-6">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-emerald-800 mb-8 leading-relaxed">
                  {questions[currentQuestion]}
                </h2>

                <div className="space-y-3">
                  {options.map((option, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md border-2 ${
                        answers[currentQuestion] === option.value
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-gray-200 hover:border-emerald-300"
                      }`}
                      onClick={() => handleAnswer(option.value)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <div
                            className={`w-4 h-4 rounded-full border-2 mr-3 ${
                              answers[currentQuestion] === option.value
                                ? "border-emerald-500 bg-emerald-500"
                                : "border-gray-300"
                            }`}
                          >
                            {answers[currentQuestion] === option.value && (
                              <div className="w-full h-full rounded-full bg-white scale-50"></div>
                            )}
                          </div>
                          <span className="text-emerald-700 font-medium">{option.label}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              {currentQuestion > 0 ? (
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              ) : (
                <div></div>
              )}

              <div className="text-sm text-gray-500">Clique em uma resposta para continuar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
