import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
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
              <Link href="/teste-tea-adulto/longo">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 mt-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-semibold mb-4">Instruções do Teste TEA Adulto (Longo)</h1>
          <p className="text-gray-700 mb-6">
            Leia atentamente as instruções antes de iniciar o teste. Este teste é projetado para avaliar traços
            associados ao Transtorno do Espectro Autista (TEA) em adultos.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Como Funciona</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              Você receberá uma série de afirmações. Para cada afirmação, indique o quanto você concorda ou discorda.
            </li>
            <li>Não há respostas certas ou erradas. Seja honesto em suas respostas.</li>
            <li>O teste é autoaplicável e leva aproximadamente 20-30 minutos para ser concluído.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2">Importante</h2>
          <p className="text-gray-700 mb-6">
            Este teste não é um diagnóstico. Se você está preocupado com a possibilidade de ter TEA, consulte um
            profissional de saúde qualificado.
          </p>

          <Link href="/teste-tea-adulto/longo/questionario">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Iniciar Teste
            </Button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-100 text-center p-4">
        <p className="text-gray-500">© 2024 Neuropsicologia. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
