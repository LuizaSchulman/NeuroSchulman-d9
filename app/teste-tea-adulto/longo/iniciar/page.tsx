"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Phone, Home } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const questions = [
  "Eu prefiro fazer as coisas com outras pessoas do que sozinho(a)",
  "Eu prefiro fazer as coisas da mesma maneira repetidamente",
  "Se eu tento imaginar algo, eu acho fácil criar uma imagem na minha mente",
  "Eu frequentemente fico tão envolvido(a) em uma coisa que perco de vista outras coisas",
  "Eu frequentemente noto pequenos sons quando outros não notam",
  "Eu geralmente noto placas de carros ou séries de informações similares",
  "Outras pessoas frequentemente me dizem que o que eu disse foi rude, mesmo que eu ache que foi educado",
  "Quando estou lendo uma história, eu posso facilmente imaginar como os personagens podem parecer",
  "Eu sou fascinado(a) por datas",
  "Em um grupo social, eu posso facilmente acompanhar as conversas de várias pessoas diferentes",
  "Eu acho situações sociais fáceis",
  "Eu tendo a notar detalhes que outros não notam",
  "Eu preferiria ir a uma biblioteca do que a uma festa",
  "Eu acho fácil inventar histórias",
  "Eu me sinto mais atraído(a) por pessoas do que por coisas",
  "Eu tendo a ter interesses muito fortes, dos quais fico chateado(a) se não posso desfrutar",
  "Eu gosto de bate-papo social",
  "Quando eu falo, nem sempre é fácil para outros conseguirem falar em seguida",
  "Eu sou fascinado(a) por números",
  "Quando estou lendo uma história, eu acho difícil descobrir as intenções dos personagens",
  "Eu não gosto particularmente de ler ficção",
  "Eu acho difícil fazer novos amigos",
  "Eu noto padrões em coisas o tempo todo",
  "Eu preferiria ir ao teatro do que a um museu",
  "Não me incomoda se minha rotina diária é perturbada",
  "Eu frequentemente acho que não sei como manter uma conversa",
  "Eu acho fácil 'ler nas entrelinhas' quando alguém está falando comigo",
  "Eu geralmente me concentro mais no quadro geral, em vez de pequenos detalhes",
  "Eu não sou muito bom(boa) em lembrar números de telefone",
  "Eu não noto frequentemente pequenas mudanças na situação, ou na aparência de uma pessoa",
  "Eu sei como dizer se alguém que está me ouvindo está ficando entediado",
  "Eu acho fácil fazer mais de uma coisa ao mesmo tempo",
  "Quando eu falo ao telefone, eu não tenho certeza de quando é minha vez de falar",
  "Eu gosto de fazer coisas espontaneamente",
  "Eu sou frequentemente o(a) último(a) a entender o ponto de uma piada",
  "Eu acho fácil descobrir o que alguém está pensando ou sentindo apenas olhando para o rosto da pessoa",
  "Se há uma interrupção, eu posso voltar rapidamente ao que estava fazendo antes",
  "Eu sou bom(boa) em bate-papo social",
  "As pessoas me dizem frequentemente que eu continuo falando sobre a mesma coisa",
  "Quando eu era jovem, eu gostava de brincar de jogos que envolviam fingir com outras crianças",
  "Eu gosto de coletar informações sobre categorias de coisas (por exemplo, tipos de carros, tipos de pássaros, tipos de trens, tipos de plantas, etc.)",
  "Eu acho difícil imaginar como seria ser outra pessoa",
  "Eu gosto de planejar cuidadosamente qualquer atividade em que participo",
  "Eu gosto de ocasiões sociais",
  "Eu acho difícil descobrir as intenções das pessoas",
  "Novas situações me deixam ansioso(a)",
  "Eu gosto de conhecer pessoas novas",
  "Eu sou uma pessoa diplomática",
  "Eu não sou muito bom(boa) em lembrar quando é aniversário das pessoas",
  "Eu acho muito fácil brincar de jogos com crianças que envolvem fingir",
]

const options = [
  { value: 1, label: "Concordo totalmente" },
  { value: 0, label: "Concordo ligeiramente" },
  { value: 0, label: "Discordo ligeiramente" },
  { value: 1, label: "Discordo totalmente" },
]

// Questions that are reverse scored
const reverseScored = [
  0, 2, 7, 9, 10, 13, 14, 16, 23, 24, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38, 39, 43, 44, 46, 47, 49,
]

export default function TesteAQ50() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem("teaTestData")
    if (storedData) {
      setUserData(JSON.parse(storedData))
    } else {
      router.push("/teste-tea-adulto/longo")
    }
  }, [router])

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers]

    // Apply reverse scoring for specific questions
    if (reverseScored.includes(currentQuestion)) {
      newAnswers[currentQuestion] = value === 1 ? 0 : 1
    } else {
      newAnswers[currentQuestion] = value
    }

    setAnswers(newAnswers)

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        // Calculate final score and redirect to results
        const totalScore = newAnswers.reduce((sum, answer) => sum + answer, 0)

        // Store result
        const result = {
          ...userData,
          score: totalScore,
          answers: newAnswers,
          completedAt: new Date().toISOString(),
          testType: "AQ-50",
        }

        localStorage.setItem("teaTestResult", JSON.stringify(result))
        router.push(`/teste-tea-adulto/resultado?score=${totalScore}&testType=AQ-50`)
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
