"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, RotateCcw, Share, Download, Copy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getLatestTDAHResult, type TDAHTestResult } from "@/lib/test-storage"

const resultMessages = {
  leve: {
    title: "Leve presença de traços compatíveis com TDAH",
    description: `Suas respostas indicam alguns traços relacionados ao Transtorno de Déficit de Atenção e Hiperatividade (TDAH), mas em um padrão leve.

Esse tipo de perfil pode refletir um funcionamento neurodivergente em algumas áreas, sem necessariamente indicar a presença de um transtorno. Ainda assim, se você sente que esses sintomas trazem prejuízos em sua vida pessoal, profissional ou acadêmica, pode ser útil conversar com um(a) profissional da saúde mental.

Este teste não tem valor diagnóstico. Ele serve apenas como ponto de partida para refletir sobre o seu funcionamento e, se necessário, buscar apoio qualificado.

Compreender suas dificuldades e encontrar estratégias adequadas para lidar com elas pode fazer uma grande diferença no seu dia a dia.`,
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    badgeColor: "bg-yellow-500",
  },
  moderado: {
    title: "Presença moderada de traços compatíveis com TDAH",
    description: `Seu resultado aponta para uma quantidade significativa de traços relacionados ao Transtorno de Déficit de Atenção e Hiperatividade (TDAH), o que pode indicar um padrão de funcionamento neurodivergente.

Isso não significa que você tenha TDAH, mas sugere que pode ser interessante buscar uma avaliação clínica com um(a) profissional especializado(a), especialmente se você percebe que esses sintomas estão trazendo impacto no seu cotidiano.

Este teste é uma ferramenta de triagem e não substitui uma avaliação diagnóstica completa. O diagnóstico envolve entrevistas clínicas, análise de histórico e outros instrumentos técnicos.

O mais importante é entender como você funciona, identificar seus desafios e descobrir maneiras eficazes de lidar com eles.`,
    color: "bg-orange-100 border-orange-300 text-orange-800",
    badgeColor: "bg-orange-500",
  },
  alto: {
    title: "Alta probabilidade de traços compatíveis com TDAH",
    description: `Seu resultado sugere uma alta probabilidade de presença de traços relacionados ao Transtorno de Déficit de Atenção e Hiperatividade (TDAH).

Isso significa que suas respostas indicam um padrão de funcionamento compatível com diversos aspectos frequentemente observados em pessoas com TDAH. No entanto, é fundamental lembrar que este teste é apenas um instrumento de triagem inicial e não tem valor diagnóstico.

Se você se identificou com esse resultado, o próximo passo recomendado é buscar uma avaliação clínica com um(a) profissional especializado(a). Nessa avaliação, serão considerados seus sintomas atuais, sua história de vida e seu contexto emocional, além da aplicação de instrumentos técnicos complementares.

O diagnóstico pode ser uma ferramenta valiosa de autoconhecimento, mas o mais importante é entender como você funciona e encontrar formas mais eficazes de lidar com seus desafios cotidianos.`,
    color: "bg-red-100 border-red-300 text-red-800",
    badgeColor: "bg-red-500",
  },
  negativo: {
    title: "Não apresenta traços significativos de TDAH",
    description: `Com base nas suas respostas, não foram identificados traços suficientes para indicar a presença de TDAH.

Isso pode ocorrer por dois motivos: ou você não apresenta os padrões típicos observados nesse transtorno, ou os sintomas não causam impacto funcional relevante em sua vida — pelo menos de acordo com os critérios considerados neste teste.

Ainda assim, se você sente que enfrenta dificuldades de atenção, organização, impulsividade ou agitação, esses desafios podem estar ligados a outros fatores, como estresse, exaustão emocional ou outros quadros clínicos.

Este teste é apenas uma ferramenta de triagem e não substitui uma avaliação clínica completa. Caso sinta necessidade, conversar com um(a) profissional da saúde mental pode ajudar a identificar o que está acontecendo e encontrar caminhos mais adequados para o seu bem-estar.`,
    color: "bg-green-100 border-green-300 text-green-800",
    badgeColor: "bg-green-500",
  },
}

export default function TDAHResultado() {
  const [result, setResult] = useState<TDAHTestResult | null>(null)
  const [showShareOptions, setShowShareOptions] = useState(false)

  useEffect(() => {
    const latestResult = getLatestTDAHResult()
    setResult(latestResult)
  }, [])

  const handleShare = () => {
    setShowShareOptions(true)
  }

  const handleDownloadImage = () => {
    // Create a canvas to generate the result image
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx || !result) return

    canvas.width = 800
    canvas.height = 600

    // Background
    ctx.fillStyle = "#f0fdfa"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Title
    ctx.fillStyle = "#065f46"
    ctx.font = "bold 32px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Teste ASRS-18", canvas.width / 2, 80)

    // Result
    ctx.fillStyle = "#047857"
    ctx.font = "bold 24px Arial"
    ctx.fillText(result.resultMessage, canvas.width / 2, 140)

    // Logo area (placeholder)
    ctx.fillStyle = "#10b981"
    ctx.fillRect(canvas.width / 2 - 100, 200, 200, 100)
    ctx.fillStyle = "white"
    ctx.font = "16px Arial"
    ctx.fillText("NeuroSchulman", canvas.width / 2, 255)

    // Download
    const link = document.createElement("a")
    link.download = "resultado-tdah.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  const handleCopyCaption = () => {
    const caption = `Acabei de fazer o teste gratuito para TDAH no site da NeuroSchulman.

Meu resultado foi: ${result?.resultMessage}.

Faça você também em: neuroschulman.com.br

🧠 #tdahadulto #neurodivergência #autoconhecimento`

    navigator.clipboard.writeText(caption)
    alert("Legenda copiada!")
  }

  if (!result) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}
      >
        <div className="text-center">
          <p className="text-emerald-600 mb-4">Carregando resultado...</p>
          <Link href="/teste-tdah-adulto">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Voltar ao Teste</Button>
          </Link>
        </div>
      </div>
    )
  }

  const messageData = resultMessages[result.resultType as keyof typeof resultMessages]

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: "#f4f2ef" }}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-final.png"
                alt="Luiza Schulman - Neuropsicologia"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Result Card */}
          <Card className={`border-2 shadow-xl mb-8 ${messageData.color}`}>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Badge className={`${messageData.badgeColor} text-white px-4 py-2 text-lg`}>Seu Resultado</Badge>
              </div>
              <CardTitle className="text-2xl mb-4">{messageData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-base leading-relaxed">
                {messageData.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Score Details */}
          <Card className="border-0 shadow-lg mb-8 bg-white">
            <CardHeader>
              <CardTitle className="text-emerald-800">Detalhes da Pontuação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-emerald-600 font-medium">Parte A (Critério Central)</p>
                  <p className="text-2xl font-bold text-emerald-800">{result.partAScore}/6</p>
                </div>
                <div>
                  <p className="text-emerald-600 font-medium">Parte B (Sintomas Adicionais)</p>
                  <p className="text-2xl font-bold text-emerald-800">{result.partBScore}/12</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-emerald-600 font-medium">Contextos de Impacto</p>
                <p className="text-emerald-700">{result.impactAreas.length} área(s) selecionada(s)</p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/" className="flex-1">
              <Button
                variant="outline"
                className="w-full text-emerald-700 border-emerald-200 bg-white hover:bg-emerald-50"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Fazer outro teste
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex-1 text-emerald-700 border-emerald-200 bg-white hover:bg-emerald-50"
            >
              <Home className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Button>
            <Button onClick={handleShare} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
              <Share className="mr-2 h-4 w-4" />
              Compartilhar seu resultado no Instagram
            </Button>
          </div>

          {/* Share Options */}
          {showShareOptions && (
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-emerald-800">Compartilhar Resultado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-orange-100 to-emerald-100 p-8 rounded-lg text-center">
                    <Image
                      src="/brain-mascot.png"
                      alt="Mascote Cérebro"
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold text-emerald-800 mb-2">Teste ASRS-18</h3>
                    <p className="text-emerald-700 font-medium">{result.resultMessage}</p>
                    <p className="text-sm text-emerald-600 mt-2">NeuroSchulman</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    onClick={handleDownloadImage}
                    variant="outline"
                    className="flex-1 text-emerald-700 border-emerald-200 bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Baixar imagem
                  </Button>
                  <Button
                    onClick={handleCopyCaption}
                    variant="outline"
                    className="flex-1 text-emerald-700 border-emerald-200 bg-transparent"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar legenda
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
