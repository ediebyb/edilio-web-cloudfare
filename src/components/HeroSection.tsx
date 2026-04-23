import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Carousel from './Carousel'

export default function HeroSection() {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#servicios')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Fondo oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-brand-dark/40" aria-hidden="true" />
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Carousel />
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#servicios"
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Desplazarse hacia abajo"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}
