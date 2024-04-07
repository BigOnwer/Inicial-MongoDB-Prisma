import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/globals.ts'
import { UsersProvider } from './context/UsersContext.tsx'
import { BooksProviders } from './context/BooksContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BooksProviders>
      <UsersProvider>
        <GlobalStyle/>
        <App />
      </UsersProvider>
    </BooksProviders>
      
  </React.StrictMode>,
)
