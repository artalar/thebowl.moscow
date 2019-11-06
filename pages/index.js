import { useContext } from 'react'

import { ThemeProvider, themeContext, useTheme } from '../src/libs'
import { Button } from '../src/blocks'

function App() {
  const { toggleTheme } = useContext(themeContext)

  return <Button onClick={toggleTheme}>
    Toggle theme
    </Button >
}


export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
