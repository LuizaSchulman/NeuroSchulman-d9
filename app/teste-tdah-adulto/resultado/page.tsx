"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Share2, RefreshCw, Home, Phone, Copy, Check, ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
    color: "text-orange-600",
  },
  moderado: {
    title: "Presença moderada de traços compatíveis com TDAH",
    content: `Seu resultado aponta para uma quantidade significativa de traços relacionados ao Transtorno de Déficit de Atenção e Hiperatividade (TDAH), o que pode indicar um padrão de funcionamento neurodivergente.

Isso não significa que você tenha TDAH, mas sugere que pode ser interessante buscar uma avaliação clínica com um(a) profissional especializado(a), especialmente se você percebe que esses sintomas estão trazendo impacto no seu cotidiano.

Este teste é uma ferramenta de triagem e não substitui uma avaliação diagnóstica completa. O diagnóstico envolve entrevistas clínicas, análise de histórico e outros instrumentos técnicos.

O mais importante é entender como você funciona, identificar seus desafios e descobrir maneiras eficazes de lidar com eles.`,
    color: "text-orange-600",
  },
  alto: {
    title: "Alta probabilidade de traços compatíveis com TDAH",
    content: `Seu resultado sugere uma alta probabilidade de presença de traços relacionados ao Transtorno de Déficit de Atenção e Hiperatividade (TDAH).

Isso significa que suas respostas indicam um padrão de funcionamento compatível com diversos aspectos frequentemente observados em pessoas com TDAH. No entanto, é fundamental lembrar que este teste é apenas um instrumento de triagem inicial e não tem valor diagnóstico.

Se você se identificou com esse resultado, o próximo passo recomendado é buscar uma avaliação clínica com um(a) profissional especializado(a). Nessa avaliação, serão considerados seus sintomas atuais, sua história de vida e seu contexto emocional, além da aplicação de instrumentos técnicos complementares.

O diagnóstico pode ser uma ferramenta valiosa de autoconhecimento, mas o mais importante é entender como você funciona e encontrar formas mais eficazes de lidar com seus desafios cotidianos.`,
    color: "text-orange-600",
  },
  negativo: {
    title: "Não apresenta traços significativos de TDAH",
    content: `Com base nas suas respostas, não foram identificados traços suficientes para indicar a presença de TDAH.

Isso pode ocorrer por dois motivos: ou você não apresenta os padrões típicos observados nesse transtorno, ou os sintomas não causam impacto funcional relevante em sua vida — pelo menos de acordo com os critérios considerados neste teste.

Ainda assim, se você sente que enfrenta dificuldades de atenção, organização, impulsividade ou agitação, esses desafios podem estar ligados a outros fatores, como estresse, exaustão emocional ou outros quadros clínicos.

Este teste é apenas uma ferramenta de triagem e não substitui uma avaliação clínica completa. Caso sinta necessidade, conversar com um(a) profissional da saúde mental pode ajudar a identificar o que está acontecendo e encontrar caminhos mais adequados para o seu bem-estar.`,
    color: "text-orange-600",
  },
}

const getShareText = (resultType: string) => {
  if (resultType === "alto") {
    return `Fiz o teste ASRS-18 para rastreio de TDAH em adultos e meu resultado apontou uma alta probabilidade de traços compatíveis com o transtorno. ⚡🧠

Esse tipo de triagem pode ajudar a compreender melhor como você funciona e por que alguns desafios aparecem no dia a dia.

O teste é gratuito e está disponível em: neuroschulman.com.br

#TDAHAdulto #Neurodivergência #Autoconhecimento #TriagemTDAH`
  } else if (resultType === "moderado") {
    return `Fiz o teste ASRS-18 para triagem de TDAH em adultos e meu resultado indicou presença moderada de traços compatíveis com TDAH. 🧠✨

Esse tipo de teste não substitui uma avaliação clínica, mas pode ser um bom ponto de partida para quem busca entender melhor suas vivências.

Quer fazer também? É gratuito e leva cerca de 10 minutos: neuroschulman.com.br

#TDAHAdulto #TriagemTDAH #SaúdeMental #Neurodivergência`
  } else if (resultType === "leve") {
    return `Fiz o teste ASRS-18 para triagem de TDAH em adultos e meu resultado indicou leve presença de traços compatíveis com TDAH. 🧠💡

Foi interessante refletir sobre meus padrões de atenção e comportamento. Esse teste pode ser útil para quem tem dúvidas sobre seu funcionamento.

Você também pode fazer gratuitamente: neuroschulman.com.br

#TDAHAdulto #Autoconhecimento #Neurodivergência #TriagemTDAH`
  } else {
    return `Acabei de fazer o teste ASRS-18 para rastreio de TDAH em adultos!

Meu resultado indicou que não apresento traços significativos de TDAH, mas foi super interessante refletir sobre meus padrões de atenção e comportamento. 💡🧠

Você também pode fazer gratuitamente no site da NeuroSchulman: neuroschulman.com.br

Recomendo! 🤓

#Neurodivergência #Autoconhecimento #TDAHAdulto #TriagemTDAH`
  }
}

export default function TesteTDAHResultado() {
  const [result, setResult] = useState<TDAHResult | null>(null)
  const [textCopied, setTextCopied] = useState(false)
  const [shareDialogOpen, setShareDialogOpen] = useState(false)

  // Share modal states
  const [shareStep, setShareStep] = useState(1) // 1: platform, 2: preview, 3: confirm
  const [selectedPlatform, setSelectedPlatform] = useState<string>("")
  const [includeImage, setIncludeImage] = useState(true)
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>("")
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
    if (!result) return

    setIsGeneratingImage(true)

    // Simulate image generation - in real implementation, this would create a canvas
    // with the brain illustration, logo, test result, and website URL
    setTimeout(() => {
      // For now, we'll use the brain illustration as placeholder
      setGeneratedImageUrl("/brain-illustration.png")
      setIsGeneratingImage(false)
    }, 2000)
  }

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform)
    setShareStep(2)

    // Generate image if include image is checked
    if (includeImage && !generatedImageUrl) {
      generateShareImage()
    }
  }

  const handleShare = async () => {
    if (!result) return

    const shareText = getShareText(result.resultType)

    if (selectedPlatform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank")
    } else if (selectedPlatform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, "_blank")
    } else if (selectedPlatform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + "/teste-tdah-adulto")}&quote=${encodeURIComponent(shareText)}`,
        "_blank",
      )
    } else if (selectedPlatform === "instagram") {
      // For Instagram, we'll copy the text and show instructions
      try {
        await navigator.clipboard.writeText(shareText)
        alert("Texto copiado! Cole no Instagram junto com a imagem.")
      } catch (err) {
        console.error("Failed to copy text: ", err)
      }
    }

    setShareDialogOpen(false)
    setShareStep(1)
    setSelectedPlatform("")
  }

  const handleCopyResultText = async () => {
    if (!result) return

    const messageData = resultMessages[result.resultType as keyof typeof resultMessages]
    const fullText = `Seu resultado: ${messageData.title}

${messageData.content}`

    try {
      await navigator.clipboard.writeText(fullText)
      setTextCopied(true)
      setTimeout(() => setTextCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const resetShareModal = () => {
    setShareStep(1)
    setSelectedPlatform("")
    setGeneratedImageUrl("")
    setIncludeImage(true)
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
            <Link href="/teste-tdah-adulto">
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
              <div className="text-4xl font-bold text-emerald-800 mb-2">Teste ASRS-18</div>
              <p className="text-emerald-600">Triagem para TDAH em Adultos</p>
            </div>
            <h1 className={`text-2xl lg:text-3xl font-bold mb-6 ${messageData.color}`}>
              Seu resultado: {messageData.title}
            </h1>
          </div>

          {/* Result Content */}
          <Card className="bg-white shadow-lg mb-8 relative">
            {/* Copy Text Icon */}
            <button
              onClick={handleCopyResultText}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-emerald-600 transition-colors duration-200 rounded-md hover:bg-emerald-50"
              title="Copiar texto do resultado"
            >
              {textCopied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
            </button>

            <CardContent className="p-8">
              <div className="prose prose-emerald max-w-none">
                {messageData.content.split("\n\n").map((paragraph, index) => (
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
                    "https://wa.me/5541984599063?text=Olá, acabei de fazer o teste gratuito para TDAH no site e gostaria de agendar uma consulta.",
                    "_blank",
                  )
                }
              >
                <Phone className="h-4 w-4 mr-2" />
                Agende sua consulta
              </Button>

              <Link href="/teste-tea-adulto" className="block">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-emerald-700 border-emerald-200 hover:bg-emerald-50 py-3 bg-transparent"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Fazer outro teste
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

              <Dialog
                open={shareDialogOpen}
                onOpenChange={(open) => {
                  setShareDialogOpen(open)
                  if (!open) resetShareModal()
                }}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-emerald-700 border-emerald-200 hover:bg-emerald-50 py-3 bg-transparent"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhe seu resultado
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-emerald-800 flex items-center">
                      {shareStep > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShareStep(shareStep - 1)}
                          className="mr-2 p-1"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                      )}
                      Compartilhar resultado
                    </DialogTitle>
                  </DialogHeader>

                  {/* Step 1: Platform Selection */}
                  {shareStep === 1 && (
                    <div className="space-y-4">
                      <p className="text-emerald-700 text-center">Escolha onde deseja compartilhar seu resultado:</p>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant="outline"
                          className="text-green-600 border-green-200 hover:bg-green-50 bg-transparent py-6"
                          onClick={() => handlePlatformSelect("whatsapp")}
                        >
                          WhatsApp
                        </Button>
                        <Button
                          variant="outline"
                          className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent py-6"
                          onClick={() => handlePlatformSelect("twitter")}
                        >
                          Twitter
                        </Button>
                        <Button
                          variant="outline"
                          className="text-blue-800 border-blue-200 hover:bg-blue-50 bg-transparent py-6"
                          onClick={() => handlePlatformSelect("facebook")}
                        >
                          Facebook
                        </Button>
                        <Button
                          variant="outline"
                          className="text-pink-600 border-pink-200 hover:bg-pink-50 bg-transparent py-6"
                          onClick={() => handlePlatformSelect("instagram")}
                        >
                          Instagram
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Preview */}
                  {shareStep === 2 && (
                    <div className="space-y-6">
                      <p className="text-emerald-700 text-center font-medium">
                        Prévia do conteúdo a ser compartilhado:
                      </p>

                      {/* Message Preview */}
                      <Card className="bg-gray-50">
                        <CardContent className="p-4">
                          <p className="text-sm text-gray-700 whitespace-pre-line">{getShareText(result.resultType)}</p>
                        </CardContent>
                      </Card>

                      {/* Include Image Option */}
                      <div className="flex items-center space-x-2 p-3 bg-emerald-50 rounded-lg">
                        <Checkbox
                          id="include-image"
                          checked={includeImage}
                          onCheckedChange={(checked) => {
                            setIncludeImage(checked as boolean)
                            if (checked && !generatedImageUrl) {
                              generateShareImage()
                            }
                          }}
                        />
                        <label htmlFor="include-image" className="text-sm text-emerald-700 cursor-pointer">
                          Incluir imagem no compartilhamento
                        </label>
                      </div>

                      {/* Image Preview */}
                      {includeImage && (
                        <div className="space-y-3">
                          {isGeneratingImage ? (
                            <div className="bg-gray-100 rounded-lg p-8 text-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-2"></div>
                              <p className="text-sm text-gray-600">Gerando imagem...</p>
                            </div>
                          ) : generatedImageUrl ? (
                            <div className="bg-white rounded-lg p-4 border">
                              <div className="relative bg-gradient-to-br from-emerald-50 to-orange-50 rounded-lg p-6 text-center">
                                <Image
                                  src="/brain-illustration.png"
                                  alt="Ilustração do cérebro"
                                  width={120}
                                  height={120}
                                  className="mx-auto mb-4"
                                />
                                <h3 className="text-lg font-bold text-emerald-800 mb-2">Teste ASRS-18</h3>
                                <p className="text-sm text-emerald-700 mb-4">{messageData.title}</p>
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                  <Image
                                    src="/logo-share.png"
                                    alt="Logo Luiza Schulman"
                                    width={80}
                                    height={30}
                                    className="h-6 w-auto"
                                  />
                                </div>
                                <p className="text-xs text-emerald-600">neuroschulman.com.br</p>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      )}

                      {/* Confirm Button */}
                      <Button
                        onClick={handleShare}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
                        disabled={includeImage && isGeneratingImage}
                      >
                        Confirmar e compartilhar
                      </Button>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>

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
