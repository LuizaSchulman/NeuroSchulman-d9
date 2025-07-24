"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TesteTeaAdulto() {
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
            <Link href="/">
              <Button variant="ghost" className="text-emerald-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-emerald-800 mb-4">
              Teste de Triagem para Autismo em Adultos
            </h1>
            <p className="text-lg text-emerald-600">Escolha a versão do questionário que deseja responder:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* AQ-10 Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-emerald-800 mb-2">AQ-10</CardTitle>
                <p className="text-orange-600 font-semibold text-lg">Versão Curta</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <Clock className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-emerald-700">Leva cerca de 2 minutos para ser respondido</span>
                </div>
                <Link href="/teste-tea-adulto/curto/iniciar">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                    Iniciar versão curta
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AQ-50 Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-emerald-800 mb-2">AQ-50</CardTitle>
                <p className="text-orange-600 font-semibold text-lg">Versão Completa</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <Clock className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-emerald-700">Leva cerca de 10 minutos para ser respondido</span>
                </div>
                <Link href="/teste-tea-adulto/longo/iniciar">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3">
                    Iniciar versão completa
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-800 mb-2">Importante:</h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Este teste é uma ferramenta de triagem e não constitui um diagnóstico. Os resultados devem ser
                  interpretados por um profissional qualificado. Se você tem preocupações sobre autismo, recomendamos
                  buscar uma avaliação neuropsicológica completa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
