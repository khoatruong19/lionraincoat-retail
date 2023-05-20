import './App.css'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './pages/routes'

function App() {

  return (
    <BrowserRouter>
      <PageRoutes/>
    </BrowserRouter>
  )
}

export default App
