"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ArrowLeft, ChevronDown, Clock, Brain, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TesteTeaAdulto() {
  const [isOpenCurto, setIsOpenCurto] = useState(false)
  const [isOpenLongo, setIsOpenLongo] = useState(false)

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
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-emerald-700 hover:text-orange-500">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-emerald-800 mb-4">Teste de Triagem para Autismo em Adultos</h1>
            <p className="text-xl text-emerald-600 max-w-2xl mx-auto">
              Identifique possíveis traços do espectro autista através dos questionários AQ-10 e AQ-50
            </p>
          </div>

          {/* Test Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* AQ-10 Card */}
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-emerald-100 rounded-full w-fit">
                  <Brain className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl text-emerald-800 mb-2">AQ-10 (Versão Curta)</CardTitle>
                <CardDescription className="text-emerald-600 text-lg">
                  Leva cerca de 3 minutos para ser respondido.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/teste-tea-adulto/curto">
                  <Button
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Clock className="mr-2 h-5 w-5" />
                    Iniciar Teste Curto
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AQ-50 Card */}
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-teal-100 rounded-full w-fit">
                  <Brain className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-2xl text-emerald-800 mb-2">AQ-50 (Versão Completa)</CardTitle>
                <CardDescription className="text-emerald-600 text-lg">
                  Leva cerca de 10 minutos para ser respondido.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/teste-tea-adulto/longo">
                  <Button
                    size="lg"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Clock className="mr-2 h-5 w-5" />
                    Iniciar Teste Completo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Collapsible Info Sections */}
          <div className="space-y-4 mb-8">
            {/* AQ-10 Info */}
            <Collapsible open={isOpenCurto} onOpenChange={setIsOpenCurto}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between text-emerald-700 border-emerald-200 bg-white hover:bg-emerald-50"
                >
                  Saiba mais sobre o AQ-10 (Versão Curta)
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpenCurto ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <Card className="border-emerald-200 bg-emerald-50">
                  <CardContent className="pt-6">
                    <div className="space-y-4 text-emerald-700">
                      <p>
                        O AQ-10 é uma versão reduzida do Autism Spectrum Quotient (AQ), desenvolvido para triagem rápida
                        de traços do espectro autista em adultos.
                      </p>
                      <p>
                        Este teste contém 10 perguntas selecionadas como as mais discriminativas do questionário
                        original de 50 itens, oferecendo uma avaliação inicial eficiente.
                      </p>
                      <p>
                        É ideal para quem busca uma primeira avaliação ou tem pouco tempo disponível. Recomendamos o
                        AQ-50 para uma análise mais detalhada.
                      </p>
                      <p className="font-medium">Este teste não substitui uma avaliação clínica profissional.</p>
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>

            {/* AQ-50 Info */}
            <Collapsible open={isOpenLongo} onOpenChange={setIsOpenLongo}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between text-emerald-700 border-emerald-200 bg-white hover:bg-emerald-50"
                >
                  Saiba mais sobre o AQ-50 (Versão Completa)
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpenLongo ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <Card className="border-emerald-200 bg-emerald-50">
                  <CardContent className="pt-6">
                    <div className="space-y-4 text-emerald-700">
                      <p>
                        O AQ-50 é o questionário completo Autism Spectrum Quotient, desenvolvido por Simon Baron-Cohen e
                        colegas para identificar traços do espectro autista em adultos com inteligência média ou
                        superior.
                      </p>
                      <p>
                        Este teste avalia cinco áreas principais: habilidades sociais, atenção aos detalhes,
                        comunicação, imaginação e mudança de atenção/foco.
                      </p>
                      <p>
                        Oferece uma análise mais abrangente e detalhada, sendo amplamente utilizado em pesquisas e
                        contextos clínicos ao redor do mundo.
                      </p>
                      <p className="font-medium">Este teste não substitui uma avaliação clínica profissional.</p>
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Privacy Notice */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-emerald-700">
                    <p className="font-medium mb-2">Privacidade e Segurança</p>
                    <p>
                      Seus dados são processados localmente no seu dispositivo e não são enviados para nossos
                      servidores. As respostas ficam armazenadas apenas no seu navegador e você pode apagá-las a
                      qualquer momento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
