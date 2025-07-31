"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ArrowLeft, ChevronDown, Clock, Brain, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TesteTDAHAdulto() {
  const [isOpen, setIsOpen] = useState(false)

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
            <h1 className="text-4xl font-bold text-emerald-800 mb-4">Teste de Triagem para TDAH em Adultos</h1>
            <p className="text-xl text-emerald-600 max-w-2xl mx-auto">
              Identifique possíveis traços de Transtorno de Déficit de Atenção e Hiperatividade através do teste ASRS-18
            </p>
          </div>

          {/* Test Card */}
          <div className="max-w-2xl mx-auto mb-8">
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                  <Brain className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-emerald-800 mb-2">Teste ASRS-18</CardTitle>
                <CardDescription className="text-emerald-600 text-lg">
                  Leva cerca de 10 minutos para ser respondido.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/teste-tdah-adulto/iniciar">
                  <Button
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Clock className="mr-2 h-5 w-5" />
                    Iniciar Teste
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Collapsible Info */}
          <div className="max-w-2xl mx-auto mb-8">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between text-emerald-700 border-emerald-200 bg-white hover:bg-emerald-50"
                >
                  Saiba mais sobre este teste
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <Card className="border-emerald-200 bg-emerald-50">
                  <CardContent className="pt-6">
                    <div className="space-y-4 text-emerald-700">
                      <p>
                        O ASRS-18 é um instrumento de triagem desenvolvido pela Organização Mundial da Saúde (OMS) para
                        identificar sintomas sugestivos de Transtorno de Déficit de Atenção e Hiperatividade (TDAH) em
                        adultos.
                      </p>
                      <p>
                        O teste contém 18 perguntas baseadas nos critérios diagnósticos do DSM-IV-TR. As seis primeiras
                        perguntas (Parte A) são mais sensíveis e funcionam como critério central de rastreio. As 12
                        restantes (Parte B) complementam a avaliação.
                      </p>
                      <p>
                        Este questionário não é um diagnóstico. Ele serve como ponto de partida para investigar sintomas
                        que possam justificar uma avaliação clínica com psicólogo ou psiquiatra.
                      </p>
                      <p className="font-medium">Este teste foi adaptado para o formato digital.</p>
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
