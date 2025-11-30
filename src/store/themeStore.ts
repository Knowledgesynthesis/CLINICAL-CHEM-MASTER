import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface ThemeState {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark', // Default to dark mode as per requirements
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
      return { theme: newTheme }
    }),
  setTheme: (theme) =>
    set(() => {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      return { theme }
    }),
}))

// Initialize theme on load
if (typeof window !== 'undefined') {
  document.documentElement.classList.add('dark')
}
