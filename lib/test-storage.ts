// Simple utility for storing test data
// In production, replace with proper backend storage

export interface UserData {
  nome?: string
  idade: string
  genero: string
  email: string
}

export interface TestResults {
  userData: UserData
  responses: string[]
  score: number
  interpretation: {
    level: string
    description: string
    color: string
  }
  timestamp: string
  testType: "AQ-10" | "AQ-50"
}

export const saveTestResults = async (results: TestResults) => {
  try {
    // For now, just store in localStorage
    // In production, send to your backend/database
    const allResults = JSON.parse(localStorage.getItem("all-test-results") || "[]")
    allResults.push({
      ...results,
      timestamp: new Date().toISOString(),
    })
    localStorage.setItem("all-test-results", JSON.stringify(allResults))

    // Here you would typically send to your backend:
    // await fetch('/api/save-test-results', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(results)
    // })

    return true
  } catch (error) {
    console.error("Error saving test results:", error)
    return false
  }
}

export const getTestResults = () => {
  try {
    return JSON.parse(localStorage.getItem("all-test-results") || "[]")
  } catch (error) {
    console.error("Error getting test results:", error)
    return []
  }
}

export const getAQ10Results = () => {
  try {
    const allResults = getTestResults()
    return allResults.filter((result: TestResults) => result.testType === "AQ-10")
  } catch (error) {
    console.error("Error getting AQ-10 results:", error)
    return []
  }
}

export const getAQ50Results = () => {
  try {
    const allResults = getTestResults()
    return allResults.filter((result: TestResults) => result.testType === "AQ-50")
  } catch (error) {
    console.error("Error getting AQ-50 results:", error)
    return []
  }
}
