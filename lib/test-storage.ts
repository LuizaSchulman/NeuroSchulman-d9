// Tipos para os resultados dos testes
export interface AQResult {
  version: "AQ-10" | "AQ-50"
  score: number
  maxScore: number
  percentage: number
  interpretation: string
  answers: Record<number, number>
  completedAt: string
}

export interface TDAHResult {
  partAScore: number
  partBScore: number
  impactAreas: string[]
  resultType: string
  resultMessage: string
  totalQuestions: number
  answeredQuestions: number
  answers: Record<number, string>
  completedAt: string
}

// Funções para AQ (Autismo)
export function saveAQResult(result: AQResult): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("aq_test_result", JSON.stringify(result))
  }
}

export function getAQResult(): AQResult | null {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("aq_test_result")
    return stored ? JSON.parse(stored) : null
  }
  return null
}

export function clearAQResult(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("aq_test_result")
  }
}

// Funções para TDAH
export function saveTDAHResult(result: TDAHResult): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("tdah_test_result", JSON.stringify(result))
  }
}

export function getTDAHResult(): TDAHResult | null {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("tdah_test_result")
    return stored ? JSON.parse(stored) : null
  }
  return null
}

export function clearTDAHResult(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("tdah_test_result")
  }
}

// Função para limpar todos os resultados
export function clearAllResults(): void {
  clearAQResult()
  clearTDAHResult()
}
