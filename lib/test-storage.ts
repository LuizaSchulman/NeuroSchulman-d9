export interface UserData {
  name: string
  email: string
  age: string
  gender: string
  education: string
  previousDiagnosis: string
}

export interface AQTestResult {
  userData: UserData
  answers: string[]
  score: number
  testType: "AQ-10" | "AQ-50"
  completedAt: string
  totalQuestions: number
  answeredQuestions: number
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

// AQ Test Functions
export const saveUserData = (userData: UserData): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("aq_user_data", JSON.stringify(userData))
  }
}

export const getUserData = (): UserData | null => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("aq_user_data")
    return data ? JSON.parse(data) : null
  }
  return null
}

export const saveAQResult = (result: AQTestResult): void => {
  if (typeof window !== "undefined") {
    const existingResults = getAQResults()
    const updatedResults = [...existingResults, result]
    localStorage.setItem("aq_test_results", JSON.stringify(updatedResults))
  }
}

export const getAQResults = (): AQTestResult[] => {
  if (typeof window !== "undefined") {
    const results = localStorage.getItem("aq_test_results")
    return results ? JSON.parse(results) : []
  }
  return []
}

export const getLatestAQResult = (): AQTestResult | null => {
  const results = getAQResults()
  return results.length > 0 ? results[results.length - 1] : null
}

// TDAH Test Functions
export const saveTDAHResult = (result: TDAHTestResult): void => {
  if (typeof window !== "undefined") {
    const existingResults = getTDAHResults()
    const updatedResults = [...existingResults, result]
    localStorage.setItem("tdah_test_results", JSON.stringify(updatedResults))
  }
}

export const getTDAHResults = (): TDAHTestResult[] => {
  if (typeof window !== "undefined") {
    const results = localStorage.getItem("tdah_test_results")
    return results ? JSON.parse(results) : []
  }
  return []
}

export const getLatestTDAHResult = (): TDAHTestResult | null => {
  const results = getTDAHResults()
  return results.length > 0 ? results[results.length - 1] : null
}

// Clear Functions
export const clearAQData = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("aq_user_data")
    localStorage.removeItem("aq_test_results")
  }
}

export const clearTDAHData = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("tdah_test_results")
  }
}

export const clearAllTestData = (): void => {
  clearAQData()
  clearTDAHData()
}
