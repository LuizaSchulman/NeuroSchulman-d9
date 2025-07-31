"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, RotateCcw, Home, Share, Download, Copy } from "lucide-react"
import Image from "next/image"
import { getTDAHResult } from "@/lib/test-storage"

interface TDAHResult {
  partAScore: number
  partBScore: number
  impactAreas: string[]
  resultType: string
  resultMessage: string
  totalQuestions: number
  answeredQuestions: number
  completedAt: string
}

const resultMessages = {
  leve: {
    title: "Leve presença de traços compatíveis com TDAH",
    content: `Suas respostas indicam alguns traços relacionados ao Transtorno de Déficit de Atenção e Hiperatividade (TDAH), mas em um padrão leve.

Esse tipo de perfil pode refletir um funcionamento neurodivergente em algumas áreas, sem necessariamente indicar a presença de um transtorno. Ainda assim, se você sente que esses sintomas trazem prejuízos em sua vida pessoal, profissional ou acadêmica, pode ser útil conversar com um(a) profissional da saúde mental.

Este teste não tem valor diagnóstico. Ele serve apenas como ponto de partida para refletir sobre o seu funcionamento e, se necessário, buscar apoio qualificado.

Compreender suas dificuldades e encontrar estratégias adequadas para lidar com elas pode fazer uma grande diferença no seu dia a dia.`,
    color: "bg-yellow-50 border-yellow-200",
    titleColor: "text-yellow-800",
  },
  moderado: {
    title: "Presença moderada de traços compatíveis com TDAH",
    content: `Seu resultado aponta para uma quantidade significativa de traços relacionados ao Transtorno de Déficit de Atenção e Hiperatividade (TDAH), o que pode indicar um padrão de funcionamento neurodivergente.

Isso não significa que você tenha TDAH, mas sugere que pode ser interessante buscar uma avaliação clínica com um(a) profissional especializado(a), especialmente se você percebe que esses sintomas estão trazendo impacto no seu cotidiano.

Este teste é uma ferramenta de triagem e não substitui uma avaliação diagnóstica completa. O diagnóstico envolve entrevistas clínicas, análise de histórico e outros instrumentos técnicos.

O mais importante é entender como você funciona, identificar seus desafios e descobrir maneiras eficazes de lidar com eles.`,
    color: "bg-orange-50 border-orange-200",
    titleColor: "text-orange-800",
  },
  alto: {
    title: "Alta probabilidade de traços compatíveis com TDAH",
    content: `Seu resultado sugere uma alta probabilidade de presença de traços relacionados ao Transtorno de Déficit de Atenção e Hiperatividade (TDAH).

Isso significa que suas respostas indicam um padrão de funcionamento compatível com diversos aspectos frequentemente observados em pessoas com TDAH. No entanto, é fundamental lembrar que este teste é apenas um instrumento de triagem inicial e não tem valor diagnóstico.

Se você se identificou com esse resultado, o próximo passo recomendado é buscar uma avaliação clínica com um(a) profissional especializado(a). Nessa avaliação, serão considerados seus sintomas atuais, sua história de vida e seu contexto emocional, além da aplicação de instrumentos técnicos complementares.

O diagnóstico pode ser uma ferramenta valiosa de autoconhecimento, mas o mais importante é entender como você funciona e encontrar formas mais eficazes de lidar com seus desafios cotidianos.`,
    color: "bg-red-50 border-red-200",
    titleColor: "text-red-800",
  },
  negativo: {
    title: "Não apresenta traços significativos de TDAH",
    content: `Com base nas suas respostas, não foram identificados traços suficientes para indicar a presença de TDAH.

Isso pode ocorrer por dois motivos: ou você não apresenta os padrões típicos observados nesse transtorno, ou os sintomas não causam impacto funcional relevante em sua vida — pelo menos de acordo com os critérios considerados neste teste.

Ainda assim, se você sente que enfrenta dificuldades de atenção, organização, impulsividade ou agitação, esses desafios podem estar ligados a outros fatores, como estresse, exaustão emocional ou outros quadros clínicos.

Este teste é apenas uma ferramenta de triagem e não substitui uma avaliação clínica completa. Caso sinta necessidade, conversar com um(a) profissional da saúde mental pode ajudar a identificar o que está acontecendo e encontrar caminhos mais adequados para o seu bem-estar.`,
    color: "bg-green-50 border-green-200",
    titleColor: "text-green-800",
  },
}

export default function TesteTDAHResultado() {
  const [result, setResult] = useState<TDAHResult | null>(null)
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)

  useEffect(() => {
    const savedResult = getTDAHResult()
    if (savedResult) {
      setResult(savedResult)
    } else {
      // Redirecionar se não houver resultado
      window.location.href = "/teste-tdah-adulto"
    }
  }, [])

  const generateShareImage = async () => {
    setIsGeneratingImage(true)

    // Simular geração de imagem
    setTimeout(() => {
      setIsGeneratingImage(false)
      // Aqui você implementaria a lógica real de geração de imagem
      alert("Funcionalidade de geração de imagem em desenvolvimento")
    }, 2000)
  }

  const copyCaption = () => {
    const caption = `Acabei de fazer o teste gratuito para TDAH no site da NeuroSchulman.

Meu resultado foi: ${result?.resultMessage}.

Faça você também em: neuroschulman.com.br

🧠 #tdahadulto #neurodivergência #autoconhecimento`

    navigator.clipboard.writeText(caption)
    alert("Legenda copiada para a área de transferência!")
  }

  if (!result) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(to bottom right, #f4f2ef, #f0fdfa)" }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-emerald-600">Carregando resultado...</p>
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
              onClick={() => (window.location.href = "/")}
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
          {/* Result Card */}
          <Card className={`border-0 shadow-lg mb-6 ${messageData.color}`}>
            <CardHeader>
              <CardTitle className={`text-xl text-center ${messageData.titleColor}`}>
                <span className="text-orange-500 font-bold">Seu resultado:</span> {messageData.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                {messageData.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Fazer outro teste
            </Button>
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
                setTimeout(() => (window.location.href = "/"), 500)
              }}
              variant="outline"
              className="text-emerald-700 border-emerald-200"
            >
              <Home className="h-4 w-4 mr-2" />
              Voltar para a página inicial
            </Button>
            <Button
              onClick={generateShareImage}
              disabled={isGeneratingImage}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Share className="h-4 w-4 mr-2" />
              {isGeneratingImage ? "Gerando..." : "Compartilhar no Instagram"}
            </Button>
          </div>

          {/* Share Options */}
          {isGeneratingImage && (
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800 text-center">Compartilhar Resultado</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="bg-gray-100 rounded-lg p-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copy%20of%20Minimalist%20Interior%20Design%20Square%20Business%20Card%20%284%29-txAyKfnbbrjxy6RkhscxRDY66sRPO1.png"
                    alt="Resultado do teste TDAH"
                    width={300}
                    height={300}
                    className="mx-auto rounded-lg"
                  />
                  <p className="mt-4 text-sm text-gray-600">Teste ASRS-18 - {messageData.title}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Button
                    onClick={() => alert("Download iniciado")}
                    variant="outline"
                    className="text-emerald-700 border-emerald-200"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar imagem
                  </Button>
                  <Button
                    onClick={copyCaption}
                    variant="outline"
                    className="text-emerald-700 border-emerald-200 bg-transparent"
                  >
                    <Copy className="h-4 w-4 mr-2" />
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
