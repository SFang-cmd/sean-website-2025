import { createContext, useContext } from 'react'

interface LayoutContextType {
  selected: string
  setSelected: (value: string) => void
}

// Provide a default value that matches the interface
const defaultContext: LayoutContextType = {
  selected: 'home',
  setSelected: () => {}, // No-op function as default
}

export const LayoutContext = createContext<LayoutContextType>(defaultContext)

export function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutContextProvider')
  }
  return context
}