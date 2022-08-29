import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeeProvider } from './contexts/CoffeeContext'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeProvider>
          <Router />
        </CoffeeProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
