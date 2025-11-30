import { create } from 'zustand'

export interface Question {
  id: string
  question: string
  options: string[]
  correct: string
  rationale: string
  category: string
}

interface Answer {
  questionId: string
  selectedAnswer: string
  isCorrect: boolean
}

interface AssessmentState {
  currentAnswers: Answer[]
  addAnswer: (answer: Answer) => void
  clearAnswers: () => void
  getScore: () => { correct: number; total: number }
}

export const useAssessmentStore = create<AssessmentState>((set, get) => ({
  currentAnswers: [],
  addAnswer: (answer) =>
    set((state) => {
      // Remove any existing answer for this question
      const filtered = state.currentAnswers.filter(
        (a) => a.questionId !== answer.questionId
      )
      return { currentAnswers: [...filtered, answer] }
    }),
  clearAnswers: () => set({ currentAnswers: [] }),
  getScore: () => {
    const answers = get().currentAnswers
    const correct = answers.filter((a) => a.isCorrect).length
    return { correct, total: answers.length }
  },
}))
