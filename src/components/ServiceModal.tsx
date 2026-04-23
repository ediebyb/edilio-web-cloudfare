import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Clock, DollarSign } from 'lucide-react'
import type { Service } from '@/types'

interface ServiceModalProps {
  service: Service
  isOpen: boolean
  onClose: () => void
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service.modalContent) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleScrollToContact = () => {
    onClose()
    const target = document.querySelector('#contacto')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
              <h2 id="modal-title" className="text-xl font-heading font-bold text-brand-dark">
                {service.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Problem */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
                <h3 className="font-semibold text-red-900 mb-2">📍 El Problema</h3>
                <p className="text-red-800 text-sm leading-relaxed">{service.modalContent.problem}</p>
              </div>

              {/* Solution */}
              <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-4">
                <h3 className="font-semibold text-brand-primary mb-2">🎯 La Solución</h3>
                <p className="text-brand-dark text-sm leading-relaxed">{service.modalContent.solution}</p>
              </div>

              {/* Includes */}
              <div>
                <h3 className="font-semibold text-brand-dark mb-3 flex items-center gap-2">
                  <CheckCircle size={18} className="text-brand-primary" />
                  Qué Incluye
                </h3>
                <ul className="space-y-2">
                  {service.modalContent.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-brand-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
                <h3 className="font-semibold text-green-900 mb-3">📊 Resultados Esperados</h3>
                <ul className="space-y-2">
                  {service.modalContent.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-green-800">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Investment & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign size={18} className="text-brand-accent" />
                    <h4 className="font-semibold text-brand-dark text-sm">Inversión</h4>
                  </div>
                  <p className="text-sm text-gray-700">{service.modalContent.investment}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={18} className="text-brand-accent" />
                    <h4 className="font-semibold text-brand-dark text-sm">Duración</h4>
                  </div>
                  <p className="text-sm text-gray-700">{service.modalContent.duration}</p>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleScrollToContact}
                className="w-full py-4 bg-brand-primary text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {service.modalContent.cta}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
