import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/data/services'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ServicesListPage() {
  return (
    <div className="min-h-screen bg-tech-blue">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Servicios para tu PyME
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Soluciones prácticas y personalizadas para hacer crecer tu negocio.
            <br />
            <span className="text-[#C5A059]">Haz clic en cualquier servicio para ver precios y detalles.</span>
          </motion.p>
        </div>
      </section>

      {/* Lista de servicios - Cards simplificadas */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/10"
                >
                  {/* Icono */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#C5A059]/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-[#C5A059]" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                    {service.title}
                  </h3>

                  {/* Dolor/Problema que resuelve */}
                  <p className="text-[#C5A059] font-medium text-sm mb-4 leading-relaxed">
                    {service.problem}
                  </p>

                  {/* Executive Summary - breve */}
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {service.executiveSummary}
                  </p>

                  {/* CTA - Ver más (aquí se ven los precios) */}
                  <Link
                    to={`/servicios/${service.id}`}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#C5A059] transition-colors group/btn"
                  >
                    Ver más y precios
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* CTA General */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">
              ¿No estás seguro qué necesitas?
            </p>
            <a
              href="https://ediliobeas.setmore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4AF6A] text-[#05121F] font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/30"
            >
              Agenda una consultoría gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
