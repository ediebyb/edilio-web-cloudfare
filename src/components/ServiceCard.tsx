import { motion } from 'framer-motion'
import type { Service } from '@/types'
import { cardHover } from '@/utils/animations'

interface ServiceCardProps {
  service: Service
  onLearnMore: (service: Service) => void
}

export default function ServiceCard({ service, onLearnMore }: ServiceCardProps) {
  const Icon = service.icon

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onLearnMore(service)
  }

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="bg-white rounded-2xl p-6 border border-gray-100 cursor-default flex flex-col h-full"
    >
      {/* Ícono */}
      <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-xl mb-4">
        <Icon size={24} className="text-brand-primary" aria-hidden="true" />
      </div>

      {/* Título */}
      <h3 className="text-lg font-heading font-semibold text-brand-dark mb-2">
        {service.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      {/* CTA */}
      <button
        onClick={handleClick}
        className="mt-4 inline-flex items-center text-brand-primary text-sm font-medium hover:text-brand-secondary transition-colors duration-200 group"
        aria-label={`Saber más sobre ${service.title}`}
      >
        Saber más
        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
      </button>
    </motion.div>
  )
}
