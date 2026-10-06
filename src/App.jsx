import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import LeadzumpPage from './pages/LeadzumpPage'
import RcxPage from './pages/RcxPage'
import SiteZumpPage from './pages/SiteZumpPage'
import VastraLoopPage from './pages/VastraLoopPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sitezump" element={<SiteZumpPage />} />
          <Route path="/leadzump" element={<LeadzumpPage />} />
          <Route path="/vastra-loop" element={<VastraLoopPage />} />
          <Route path="/rcx" element={<RcxPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
