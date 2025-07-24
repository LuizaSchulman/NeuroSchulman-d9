import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TesteTeaAdultoCurtoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 py-1">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-final.png" alt="Logo" width={32} height={32} className="rounded" />
            <span className="text-lg font-semibold text-gray-800">Neuropsicologia</span>
          </Link>
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-gray-800">
              <Link href="/teste-tea-adulto">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-semibold mb-4">Teste TEA Adulto (Curto)</h1>
        <p className="mb-4">Esta é uma versão curta do teste para Transtorno do Espectro Autista (TEA) em adultos.</p>
        {/* Adicione aqui o conteúdo do teste */}
      </main>
    </div>
  )
}
