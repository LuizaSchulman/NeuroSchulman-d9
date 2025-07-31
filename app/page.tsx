import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Clock, Users, Award, MapPin, Phone, Mail, Calendar } from "lucide-react"

export default function Home() {
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
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#sobre" className="text-emerald-700 hover:text-orange-500 transition-colors">
                Sobre
              </Link>
              <Link href="#servicos" className="text-emerald-700 hover:text-orange-500 transition-colors">
                Serviços
              </Link>
              <Link href="#contato" className="text-emerald-700 hover:text-orange-500 transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Tests */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
              Testes Gratuitos de Rastreio de Autismo e TDAH em Adultos
            </h1>
            <p className="text-xl text-emerald-600 mb-8 max-w-3xl mx-auto">
              Identifique possíveis traços de neurodivergência com testes rápidos, online e gratuitos.
            </p>

            {/* Test Buttons - Horizontally Aligned */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto mb-8">
              <Link href="/teste-tea-adulto" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Teste Autismo Adulto
                </Button>
              </Link>

              <Link href="/teste-tdah-adulto" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Teste TDAH Adulto
                </Button>
              </Link>
            </div>

            {/* Privacy Notice */}
            <p className="text-sm text-emerald-600 max-w-2xl mx-auto">
              * Estes são testes de triagem e não substituem uma avaliação clínica profissional.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">Sobre Luiza Schulman</h2>
              <p className="text-emerald-700 mb-4 leading-relaxed">
                Neuropsicóloga especializada em avaliação e reabilitação neuropsicológica, com foco em transtornos do
                neurodesenvolvimento em adultos, incluindo TEA (Transtorno do Espectro Autista) e TDAH (Transtorno do
                Déficit de Atenção e Hiperatividade).
              </p>
              <p className="text-emerald-700 mb-6 leading-relaxed">
                Com formação sólida e experiência clínica, oferece atendimento personalizado e baseado em evidências
                científicas para promover o autoconhecimento e o desenvolvimento de estratégias adaptativas.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Neuropsicologia
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  TEA em Adultos
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  TDAH em Adultos
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Avaliação Neuropsicológica
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/luiza-photo.jpg"
                alt="Luiza Schulman - Neuropsicóloga"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">Serviços Oferecidos</h2>
            <p className="text-emerald-600 max-w-2xl mx-auto">
              Atendimento especializado em neuropsicologia com foco no adulto neurodivergente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-emerald-800">Avaliação Neuropsicológica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-emerald-600">
                  Avaliação completa das funções cognitivas, incluindo atenção, memória, funções executivas e
                  habilidades sociais.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-emerald-800">Diagnóstico TEA Adulto</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-emerald-600">
                  Investigação diagnóstica especializada para adultos com suspeita de Transtorno do Espectro Autista.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-emerald-800">Diagnóstico TDAH Adulto</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-emerald-600">
                  Avaliação especializada para diagnóstico de TDAH em adultos, incluindo análise de sintomas e impacto
                  funcional.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-emerald-800">Reabilitação Neuropsicológica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-emerald-600">
                  Desenvolvimento de estratégias e técnicas para otimizar o funcionamento cognitivo e adaptação social.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-emerald-800">Orientação Familiar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-emerald-600">
                  Suporte e orientação para familiares de pessoas neurodivergentes, promovendo compreensão e estratégias
                  de apoio.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-emerald-800">Consultoria Empresarial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-emerald-600">
                  Orientação para empresas sobre inclusão e adaptações para colaboradores neurodivergentes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Photos */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">Ambiente Acolhedor</h2>
            <p className="text-emerald-600 max-w-2xl mx-auto">
              Um espaço pensado para proporcionar conforto e tranquilidade durante os atendimentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/consultorio-1.jpg"
                alt="Consultório - Sala de atendimento"
                width={600}
                height={400}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/consultorio-2.jpg"
                alt="Consultório - Espaço de avaliação"
                width={600}
                height={400}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">Entre em Contato</h2>
            <p className="text-emerald-600 max-w-2xl mx-auto">
              Agende sua consulta ou tire suas dúvidas sobre os serviços oferecidos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <span className="text-emerald-700">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <span className="text-emerald-700">contato@luizaschulman.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <span className="text-emerald-700">São Paulo, SP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  <span className="text-emerald-700">Segunda a Sexta: 8h às 18h</span>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-emerald-800">Agende sua Consulta</CardTitle>
                <CardDescription className="text-emerald-600">
                  Entre em contato para agendar uma avaliação ou esclarecer dúvidas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Entrar em Contato
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Image
              src="/logo-final.png"
              alt="Luiza Schulman - Neuropsicologia"
              width={200}
              height={60}
              className="h-12 w-auto mx-auto mb-4 brightness-0 invert"
            />
            <p className="text-emerald-200 mb-4">Neuropsicologia especializada em adultos neurodivergentes</p>
            <p className="text-emerald-300 text-sm">© 2024 Luiza Schulman. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
