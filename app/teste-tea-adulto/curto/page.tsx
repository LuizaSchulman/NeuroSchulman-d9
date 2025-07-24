"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TesteAQ10() {
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
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-emerald-800 mb-4">Versão Curta – AQ-10</h1>
          </div>

          {/* Information Card */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Info className="h-5 w-5 mr-2" />
                Sobre o AQ-10
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700 space-y-3">
              <p>Este é um guia de referência rápido para adultos com suspeita de autismo.</p>
              <p>
                O AQ-10 não é um instrumento diagnóstico, mas uma ferramenta de triagem reconhecida e validada
                cientificamente.
              </p>
              <p className="text-sm">
                <strong>Referência:</strong> Allison et al. (2012), Baron-Cohen et al. (2001). Versão brasileira
                validada por Morais et al. (2020).
              </p>
            </CardContent>
          </Card>

          {/* Start Test Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-emerald-800 text-center">Pronto para começar?</CardTitle>
              <p className="text-emerald-600 text-center">
                O teste contém 10 perguntas e leva aproximadamente 2 minutos para ser concluído.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/teste-tea-adulto/curto/iniciar">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg">
                  Iniciar Teste AQ-10
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Privacy Notice */}
          <Card className="mt-6 bg-gray-50 border-gray-200">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600">
                <strong>Política de Privacidade:</strong> Este teste é anônimo e não coleta informações pessoais. Os
                resultados são exibidos apenas para você e não são armazenados em nossos servidores.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
