import { useState, useEffect, useContext, createContext } from 'react'

const themes = {
  light: 'light',
  dark: 'dark',
}

export const themeContext = createContext(themes.light)

export function ThemeProvider({ children }) {
  const [themeName, update] = useState(themes.light)

  function toggleTheme() {
    update(themeName === themes.light ? themes.dark : themes.light)
  }

  console.log('ThemeProvider', { themeName })

  return <themeContext.Provider value={{ themeName, toggleTheme }}>{children}</themeContext.Provider>
}

export function useTheme(loader) {
  const [state, update] = useState(null)
  const { themeName } = useContext(themeContext)

  useEffect(() => {
    loader(themeName).then(module => update(module.default))
  }, [themeName])

  return state
}