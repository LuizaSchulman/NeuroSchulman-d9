// Types for test results
export interface AQTestResult {
  score: number
  testType: "AQ-10" | "AQ-50"
  responses: string[]
  completedAt: string
}

export interface TDAHTestResult {
  answers: Record<number, string>
  impactAreas: string[]
  partAScore: number
  partBScore: number
  resultType: string
  resultMessage: string
  totalQuestions: number
  answeredQuestions: number
  completedAt: string
}

// AQ Test Storage Functions
export function saveAQResult(result: AQTestResult): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("aq-test-result", JSON.stringify(result))
  }
}

export function updateAQResult(result: AQTestResult): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("aq-test-result", JSON.stringify(result))
  }
}

export function getAQResult(): AQTestResult | null {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("aq-test-result")
    return stored ? JSON.parse(stored) : null
  }
  return null
}

export function clearAQResult(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("aq-test-result")
  }
}

// TDAH Test Storage Functions
export function saveTDAHResult(result: TDAHTestResult): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("tdah-test-result", JSON.stringify(result))
  }
}

export function getTDAHResult(): TDAHTestResult | null {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("tdah-test-result")
    return stored ? JSON.parse(stored) : null
  }
  return null
}

export function clearTDAHResult(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("tdah-test-result")
  }
}

// General utility functions
export function clearAllTestResults(): void {
  clearAQResult()
  clearTDAHResult()
}

export function hasAnyTestResults(): boolean {
  return getAQResult() !== null || getTDAHResult() !== null
}
