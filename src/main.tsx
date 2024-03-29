import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/globals.ts'
import { UsersProvider } from './context/UsersContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <UsersProvider>
        <GlobalStyle/>
        <App />
      </UsersProvider>
  </React.StrictMode>,
)
