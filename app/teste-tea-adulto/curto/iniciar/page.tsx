import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 py-1">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-final.png" alt="Logo" width={32} height={32} className="rounded" />
            <span className="text-lg font-semibold text-gray-800">Neuropsicologia</span>
          </Link>
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-gray-800">
              <Link href="/teste-tea-adulto/curto">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 mt-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-semibold mb-4">Bem-vindo ao Teste de TEA (Adulto) - Versão Curta</h1>
          <p className="text-gray-700 mb-8">
            Este teste tem como objetivo auxiliar na identificação de características associadas ao Transtorno do
            Espectro Autista (TEA) em adultos.
          </p>
          <p className="text-gray-700 mb-8">
            Lembre-se que este teste não substitui uma avaliação profissional completa. Se você tiver preocupações,
            procure um especialista.
          </p>
          <Link href="/teste-tea-adulto/curto/questionario">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Iniciar Teste
            </Button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-100 text-center p-4">
        <p className="text-gray-500 text-sm">© 2023 Neuropsicologia. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
