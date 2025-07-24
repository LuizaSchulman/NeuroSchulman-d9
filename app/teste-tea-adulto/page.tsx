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
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                    Iniciar versão completa
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Collapsible Info Section */}
          <div className="mt-12 max-w-3xl mx-auto">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Card className="bg-white border-emerald-200 cursor-pointer hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-emerald-800 text-lg">Saiba mais sobre os testes</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-emerald-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <Card className="bg-white border-emerald-200 mt-2">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h4 className="font-semibold text-emerald-800 text-lg mb-3">Sobre os testes AQ-10 e AQ-50</h4>
                      <p className="text-emerald-700 leading-relaxed mb-4">
                        O AQ-10 e o AQ-50 são instrumentos de triagem desenvolvidos por pesquisadores da Universidade de
                        Cambridge para avaliar a presença de traços do espectro autista em adultos com inteligência
                        média ou acima da média.
                      </p>
                      <p className="text-emerald-700 leading-relaxed mb-4">
                        O AQ-50 é a versão original, composta por 50 afirmações sobre preferências, comportamentos e
                        formas de pensar, desenvolvida por Baron-Cohen et al. (2001).
                      </p>
                      <div className="flex items-center text-emerald-600 mb-4">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span className="text-sm">Estudo original – Journal of Autism and Developmental Disorders</span>
                      </div>
                      <p className="text-emerald-700 leading-relaxed mb-4">
                        O AQ-10 é uma versão reduzida, validada para uso como triagem rápida em contextos clínicos e de
                        pesquisa.
                      </p>
                      <div className="flex items-center text-emerald-600 mb-6">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          Estudo de validação – Journal of the American Academy of Child & Adolescent Psychiatry
                        </span>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 mb-2 flex items-center">⚠️ Aviso importante</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        Estes testes têm caráter exclusivamente informativo e não substituem uma avaliação clínica
                        completa. Um escore elevado pode indicar a necessidade de investigação mais aprofundada, mas não
                        configura, por si só, um diagnóstico de autismo.
                      </p>
                      <p className="text-amber-700 text-sm leading-relaxed mt-2">
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

          {/* References Section */}
          <div className="mt-8 max-w-3xl mx-auto">
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Referências</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    <strong>AQ-50:</strong> Baron-Cohen, S., Wheelwright, S., Skinner, R., Martin, J., & Clubley, E.
                    (2001). The autism-spectrum quotient (AQ): Evidence from Asperger syndrome/high-functioning autism,
                    males and females, scientists and mathematicians.{" "}
                    <em>Journal of Autism and Developmental Disorders</em>, 31(1), 5-17.
                  </p>
                  <p>
                    <strong>AQ-10:</strong> Allison, C., Auyeung, B., & Baron-Cohen, S. (2012). Toward brief "red flags"
                    for autism screening: the short autism spectrum quotient and the short quantitative checklist in
                    1,000 cases and 3,000 controls.
                    <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 51(2), 202-212.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
