"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Clock, ArrowLeft, ChevronDown, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function TesteTeaAdulto() {
  const [isOpen, setIsOpen] = useState(false)

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
                  <span className="text-emerald-700">Leva cerca de 2 minutos </span>
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
                  <span className="text-emerald-700">Leva cerca de 10 minutos</span>
                </div>
                <Link href="/teste-tea-adulto/longo/iniciar">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                    Iniciar versão completa
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Collapsible Information */}
          <div className="mt-12 max-w-3xl mx-auto">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow bg-white border-emerald-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-emerald-800">Saiba mais sobre os testes</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-emerald-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Card className="mt-2 bg-white border-emerald-200">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-emerald-800 mb-2">Sobre os testes AQ-10 e AQ-50</h4>
                      <p className="text-emerald-700 text-sm leading-relaxed">
                        O AQ-10 e o AQ-50 são instrumentos de triagem desenvolvidos por pesquisadores da Universidade de
                        Cambridge para avaliar a presença de traços do espectro autista em adultos sem deficit
                        intelectual. O AQ-50 é a versão original, composta por 50 afirmações sobre preferências,
                        comportamentos e formas de pensar, desenvolvida por Baron-Cohen et al. (2001).
                      </p>
                    </div>

                    <div>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/11439754/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-sm"
                      >
                        Estudo original – Journal of Autism and Developmental Disorders
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>

                    <div>
                      <p className="text-emerald-700 text-sm leading-relaxed mb-2">
                        O AQ-10 é uma versão reduzida, validada para uso como triagem rápida em contextos clínicos e de
                        pesquisa.
                      </p>
                      <a
                        href="https://docs.autismresearchcentre.com/papers/2012_Allisonetal_JAACAP_RedFlags.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-sm"
                      >
                        Referência: Toward Brief "Red Flags" for Autism Screening: The Short Autism Spectrum Quotient
                        and the Short Quantitative Checklist in 1,000 Cases and 3,000 Controls
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Aviso importante:</h4>
                      <p className="text-orange-700 text-sm leading-relaxed">
                        Estes testes têm caráter exclusivamente informativo e não substituem uma avaliação clínica
                        completa. Um escore elevado pode indicar a necessidade de investigação mais aprofundada, mas não
                        configura, por si só, um diagnóstico de autismo.
                      </p>
                      <p className="text-orange-700 text-sm leading-relaxed mt-2">
                        Para uma avaliação precisa, é fundamental consultar um profissional qualificado, como um
                        neuropsicólogo ou psiquiatra, que poderá integrar os resultados desses instrumentos com dados
                        clínicos, observações comportamentais e outras escalas padronizadas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>

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
