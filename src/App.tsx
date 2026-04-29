import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import ServicesListPage from '@/pages/ServicesListPage'
import ServiceDetailPage from '@/pages/ServiceDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesListPage />} />
        <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
        {/* Redirects para URLs legacy */}
        <Route path="/inicio" element={<Navigate to="/" replace />} />
        <Route path="/sobre-mi" element={<Navigate to="/#sobre-mi" replace />} />
        <Route path="/testimonios" element={<Navigate to="/#testimonios" replace />} />
        <Route path="/contacto" element={<Navigate to="/#contacto" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
