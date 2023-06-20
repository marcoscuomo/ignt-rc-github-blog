import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { IssueProvider } from './contexts/IssuesContexts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <IssueProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssueProvider>
    </ThemeProvider>
  )
}
