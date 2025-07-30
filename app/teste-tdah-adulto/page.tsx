"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ArrowLeft, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function TesteTDAHAdulto() {
  const [isOpen, setIsOpen] = useState(false)

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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-emerald-800 mb-6">
            Teste de Triagem para TDAH em Adultos
          </h1>

          {/* Test Card */}
          <Card className="mb-8 border-0 shadow-lg bg-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-emerald-800 font-bold">Teste ASRS-18</CardTitle>
              <p className="text-emerald-600 text-lg">Leva cerca de 10 minutos para ser respondido.</p>
            </CardHeader>
            <CardContent>
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all w-full"
                onClick={() => (window.location.href = "/teste-tdah-adulto/iniciar")}
              >
                Iniciar Teste
              </Button>
            </CardContent>
          </Card>

          {/* Collapsible Info Section */}
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full text-emerald-700 bg-white border-emerald-200 hover:bg-emerald-50 mb-4"
              >
                <span className="mr-2">Saiba mais sobre este teste</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Card className="border-0 shadow-lg bg-white text-left">
                <CardContent className="p-6">
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

          {/* Privacy Notice */}
          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-700">
              🔒 <strong>Privacidade:</strong> Este teste é completamente anônimo. Não coletamos nem armazenamos
              informações pessoais.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
