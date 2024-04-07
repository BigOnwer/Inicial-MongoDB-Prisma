import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Toaster } from 'sonner'

function App() {
  

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | PiuPiu"/>
      <Toaster richColors theme="dark"/>
      <RouterProvider router={router}/>
    </HelmetProvider>
  )
}

export default App
