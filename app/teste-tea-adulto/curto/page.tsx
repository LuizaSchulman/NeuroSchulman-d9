"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TesteAQ10() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    genero: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.idade || !formData.genero || !formData.email) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    // Store form data in localStorage for the test
    localStorage.setItem("aq10-user-data", JSON.stringify(formData))

    // Redirect to test
    window.location.href = "/teste-tea-adulto/curto/iniciar"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-final.png"
                alt="Luiza Schulman - Neuropsicologia"
                width={180}
                height={60}
                className="h-12 w-auto"
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

          {/* Form Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-emerald-800">Informações Pessoais</CardTitle>
              <p className="text-emerald-600">Preencha os dados abaixo para iniciar o teste:</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome">Nome (opcional)</Label>
                  <Input
                    id="nome"
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="idade">Idade *</Label>
                  <Input
                    id="idade"
                    type="number"
                    min="18"
                    max="100"
                    value={formData.idade}
                    onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
                    placeholder="Sua idade"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="genero">Gênero *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, genero: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione seu gênero" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mulher">Mulher</SelectItem>
                      <SelectItem value="homem">Homem</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                      <SelectItem value="nao-comentar">Prefiro não comentar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="mt-1"
                    required
                  />
                  <p className="text-sm text-emerald-600 mt-1">Para receber os resultados, se desejado</p>
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                  Iniciar Teste
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Privacy Notice */}
          <Card className="mt-6 bg-gray-50 border-gray-200">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600">
                <strong>Política de Privacidade:</strong> Suas informações serão utilizadas apenas para fins de pesquisa
                e melhoria do serviço. Não compartilhamos dados pessoais com terceiros. Os resultados podem ser enviados
                para o e-mail informado, se solicitado.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
