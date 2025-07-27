"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Share2, RefreshCw, Home, Phone, Copy, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface TestResult {
  score: number
  testType: "AQ-10" | "AQ-50"
  interpretation: {
    level: string
    description: string
    color: string
  }
}

const getResultContent = (score: number, testType: "AQ-10" | "AQ-50") => {
  let level: string
  let title: string
  let content: string
  let color: string

  if (testType === "AQ-10") {
    if (score <= 3) {
      level = "baixa"
      title = "Seu resultado: Baixa probabilidade de traços autísticos"
      color = "text-green-700"
    } else if (score <= 6) {
      level = "moderada"
      title = "Seu resultado: Presença de alguns traços autísticos"
      color = "text-yellow-700"
    } else {
      level = "alta"
      title = "Seu resultado: Alta probabilidade de traços autísticos"
      color = "text-orange-700"
    }
  } else {
    // AQ-50
    if (score <= 25) {
      level = "baixa"
      title = "Seu resultado: Baixa probabilidade de traços autísticos"
      color = "text-green-700"
    } else if (score <= 31) {
      level = "moderada"
      title = "Seu resultado: Presença de alguns traços autísticos"
      color = "text-yellow-700"
    } else {
      level = "alta"
      title = "Seu resultado: Alta probabilidade de traços autísticos"
      color = "text-orange-700"
    }
  }

  // Content based on level
  if (level === "baixa") {
    content = `Seu resultado indica que você apresenta uma baixa probabilidade de traços autísticos.

Isso significa que, com base nas suas respostas, não foram identificados indícios relevantes que apontem para a presença de características associadas ao Transtorno do Espectro Autista (TEA). No entanto, é importante lembrar que este é apenas um instrumento de rastreio e não substitui uma avaliação clínica completa.

Se você tem dúvidas sobre o seu funcionamento emocional, comportamental ou cognitivo, ou percebe dificuldades em sua vida cotidiana, ainda assim pode ser útil conversar com um profissional da área da saúde mental. A avaliação neuropsicológica pode oferecer uma compreensão mais profunda do seu perfil e orientar possíveis caminhos terapêuticos.`
  } else if (level === "moderada") {
    content = `Seu resultado indica a presença de alguns traços que podem estar associados ao espectro autista.

Esses traços, no entanto, não são suficientes para indicar, por si só, a presença de um diagnóstico de autismo. Muitas pessoas têm características que lembram aspectos do espectro, como preferências por rotinas, hipersensibilidade sensorial ou dificuldade em interações sociais, sem necessariamente apresentarem um transtorno.

Esse tipo de resultado pode refletir tanto o seu estilo de funcionamento quanto outras questões emocionais, cognitivas ou contextuais. Caso essas características estejam gerando sofrimento ou dúvidas, pode ser interessante procurar um profissional especializado para uma avaliação mais aprofundada.`
  } else {
    content = `Seu resultado sugere uma alta probabilidade de presença de traços relacionados ao Transtorno do Espectro Autista.

Isso significa que suas respostas indicam um padrão de funcionamento compatível com diversos aspectos que costumam estar presentes em pessoas dentro do espectro. No entanto, é fundamental ressaltar que este teste não tem valor diagnóstico: ele é apenas um instrumento de triagem inicial.

Se você se identificou com esse resultado, o próximo passo recomendado é buscar uma avaliação clínica com um profissional especializado. Essa avaliação irá considerar sua história de vida, seu funcionamento atual, seus contextos social e emocional, além de aplicar outros instrumentos técnicos para chegar a uma conclusão mais precisa.

Receber ou não um diagnóstico é apenas parte do processo: o mais importante é compreender como você funciona, quais são seus desafios e suas potencialidades, e de que forma pode ser apoiado em sua jornada.`
  }

  return { title, content, color, level }
}

export default function ResultadoTeste() {
  const searchParams = useSearchParams()
  const [result, setResult] = useState<TestResult | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const score = searchParams.get("score")
    const testType = searchParams.get("testType") as "AQ-10" | "AQ-50"

    if (score && testType) {
      const numScore = Number.parseInt(score)
      const resultContent = getResultContent(numScore, testType)

      setResult({
        score: numScore,
        testType,
        interpretation: {
          level: resultContent.level,
          description: resultContent.content,
          color: resultContent.color,
        },
      })
    }
  }, [searchParams])

  const handleShare = async (platform?: string) => {
    if (!result) return

    const resultContent = getResultContent(result.score, result.testType)
    const shareText = `Acabei de fazer o teste ${result.testType} para rastreio de autismo em adultos. ${resultContent.title}. Faça você também: ${window.location.origin}/teste-tea-adulto`

    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank")
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, "_blank")
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + "/teste-tea-adulto")}`,
        "_blank",
      )
    } else {
      // Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy text: ", err)
      }
    }
  }

  if (!result) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}
      >
        <div className="text-center">
          <p className="text-emerald-700 mb-4">Carregando resultado...</p>
          <Link href="/teste-tea-adulto">
            <Button variant="outline" className="text-emerald-700 bg-transparent">
              Voltar aos testes
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const resultContent = getResultContent(result.score, result.testType)
  const otherTestType = result.testType === "AQ-10" ? "AQ-50" : "AQ-10"
  const otherTestUrl = result.testType === "AQ-10" ? "/teste-tea-adulto/longo" : "/teste-tea-adulto/curto"

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
            <Link href="/teste-tea-adulto">
              <Button variant="ghost" className="text-emerald-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar aos testes
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Result Header */}
          <div className="text-center mb-8">
            <div className="mb-6">
              <div className="text-4xl font-bold text-emerald-800 mb-2">
                {result.score}/{result.testType === "AQ-10" ? "10" : "50"}
              </div>
              <p className="text-emerald-600">Teste {result.testType}</p>
            </div>
            <h1 className={`text-2xl lg:text-3xl font-bold mb-6 ${resultContent.color}`}>{resultContent.title}</h1>
          </div>

          {/* Result Content */}
          <Card className="bg-white shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="prose prose-emerald max-w-none">
                {resultContent.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-emerald-700 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Primary Actions */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
                onClick={() =>
                  window.open(
                    "https://wa.me/5541984599063?text=Olá, acabei de fazer o teste gratuito para TEA no site e gostaria de agendar uma consulta.",
                    "_blank",
                  )
                }
              >
                <Phone className="h-4 w-4 mr-2" />
                Marcar uma consulta
              </Button>

              <Link href={otherTestUrl} className="block">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-emerald-700 border-emerald-200 hover:bg-emerald-50 py-3 bg-transparent"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Fazer o teste {otherTestType}
                </Button>
              </Link>
            </div>

            {/* Secondary Actions */}
            <div className="space-y-4">
              <Link href="/" className="block">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-emerald-700 border-emerald-200 hover:bg-emerald-50 py-3 bg-transparent"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Voltar ao início
                </Button>
              </Link>

              <div className="relative">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-emerald-700 border-emerald-200 hover:bg-emerald-50 py-3 bg-transparent"
                  onClick={() => handleShare()}
                >
                  {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                  {copied ? "Copiado!" : "Copiar resultado"}
                </Button>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-emerald-800 text-center flex items-center justify-center">
                <Share2 className="h-5 w-5 mr-2" />
                Compartilhar nas redes sociais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  className="text-green-600 border-green-200 hover:bg-green-50 bg-transparent"
                  onClick={() => handleShare("whatsapp")}
                >
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
                  onClick={() => handleShare("twitter")}
                >
                  Twitter/X
                </Button>
                <Button
                  variant="outline"
                  className="text-blue-800 border-blue-200 hover:bg-blue-50 bg-transparent"
                  onClick={() => handleShare("facebook")}
                >
                  Facebook
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="mt-6 bg-gray-50 border-gray-200">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 text-center">
                <strong>Importante:</strong> Este teste é apenas uma ferramenta de triagem e não substitui uma avaliação
                clínica profissional. Para um diagnóstico preciso, consulte sempre um profissional especializado.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
