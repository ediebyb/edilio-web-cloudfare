import { MapPin, Globe, Table2, Database, Smartphone, TrendingUp, Brain } from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'marketing-digital',
    icon: MapPin,
    title: 'Marketing Digital',
    description:
      'Optimiza tu presencia en Google Maps y búsquedas locales. Atrae más clientes a tu negocio con un perfil completo y actualizado.',
    modalContent: {
      problem: 'Tu negocio no aparece cuando tus clientes te buscan en Google',
      solution: 'Optimización de Perfil de Google Business + Estrategia de contenidos locales',
      includes: [
        'Configuración y optimización completa de Google My Business',
        'Estrategia de reseñas y reputación online',
        'Contenido SEO local para aparecer en las primeras posiciones',
        'Gestión de Google Maps y directorios locales',
      ],
      results: [
        '+150% en llamadas y mensajes en 60 días',
        'Aparición en las 3 primeras posiciones de búsquedas locales',
        'Aumento del 40% en visitas a tu ubicación física',
      ],
      investment: 'Desde $500 USD (pago único) + mantenimiento opcional',
      duration: '2-3 semanas',
      cta: 'Quiero aparecer en Google',
    },
  },
  {
    id: 'transformacion-digital',
    icon: Globe,
    title: 'Transformación Digital',
    description:
      'Diseño y desarrollo de sitios web profesionales, rápidos y responsivos que convierten visitantes en clientes.',
    modalContent: {
      problem: 'Tu negocio sigue dependiendo de procesos manuales, Excel y WhatsApp',
      solution: 'Digitalización completa de tu operación con herramientas profesionales',
      includes: [
        'Creación de página web corporativa profesional',
        'Tienda online con carrito de compras (si aplica)',
        'Migración de procesos manuales a sistemas digitales',
        'Capacitación a tu equipo en herramientas digitales',
        'Integración con pasarelas de pago',
      ],
      results: [
        'Reducción del 60% en tiempo de gestión administrativa',
        'Ventas online 24/7 sin intervención manual',
        'Profesionalización de tu imagen de marca',
        'Centralización de información en la nube',
      ],
      investment: 'Desde $1,500 USD (según complejidad)',
      duration: '4-6 semanas',
      cta: 'Digitalizar mi negocio',
    },
  },
  {
    id: 'consultoria-negocios',
    icon: Table2,
    title: 'Consultoría de Negocios',
    description:
      'Automatiza tareas repetitivas y crea reportes inteligentes con macros y scripts personalizados para tu negocio.',
    modalContent: {
      problem: 'Tu negocio depende demasiado de ti. No puedes delegar ni escalar',
      solution: 'Acompañamiento personalizado para estructurar y hacer crecer tu PyME',
      includes: [
        'Diagnóstico completo de tu modelo de negocio',
        'Identificación de cuellos de botella y oportunidades',
        'Diseño de plan de crecimiento a 6-12 meses',
        'Sesiones quincenales de seguimiento (online)',
        'Acceso directo por WhatsApp para consultas urgentes',
        'Herramientas y plantillas personalizadas',
      ],
      results: [
        'Claridad en tu estrategia de crecimiento',
        'Reducción del estrés operativo del dueño',
        'Procesos documentados y delegables',
        'Aumento del 30-50% en rentabilidad',
      ],
      investment: '$300 USD/mes (mínimo 3 meses)',
      duration: 'Programa de 3-6 meses',
      cta: 'Agendar sesión de diagnóstico',
    },
  },
  {
    id: 'estrategia-ventas',
    icon: Database,
    title: 'Estrategia de Ventas',
    description:
      'Implementación y personalización de sistemas de gestión empresarial para optimizar tus procesos operativos.',
    modalContent: {
      problem: 'Tus ventas dependen del boca a boca y no tienes un proceso definido',
      solution: 'Sistema de ventas predecible y escalable',
      includes: [
        'Diseño de embudo de ventas personalizado',
        'Implementación de CRM (Customer Relationship Management)',
        'Scripts de venta y objeciones',
        'Automatización de seguimiento a prospectos',
        'Métricas y KPIs de ventas',
        'Capacitación a tu equipo comercial',
      ],
      results: [
        'Aumento del 40-80% en tasa de conversión',
        'Reducción del 50% en tiempo de seguimiento',
        'Ventas predecibles mes a mes',
        'Menor dependencia del dueño en el cierre',
      ],
      investment: 'Desde $800 USD (implementación) + $150/mes (CRM)',
      duration: '3-4 semanas',
      cta: 'Sistematizar mis ventas',
    },
  },
  {
    id: 'liderazgo-gestion',
    icon: Smartphone,
    title: 'Liderazgo y Gestión',
    description:
      'Aplicaciones móviles y web a medida que resuelven los desafíos específicos de tu PyME.',
    modalContent: {
      problem: 'El estrés y la sobrecarga están nublando tu criterio como líder',
      solution: 'Desarrollo de liderazgo consciente + herramientas de neuro-regulación',
      includes: [
        'Evaluación de estilo de liderazgo y puntos de estrés',
        'Técnicas de regulación neurofisiológica (MIELSY)',
        'Sesiones 1:1 de coaching ejecutivo',
        'Herramientas para delegación efectiva',
        'Gestión de equipos de alto rendimiento',
        'Bienestar ejecutivo y prevención de burnout',
      ],
      results: [
        'Reducción del 60% en niveles de estrés',
        'Mejor clima laboral en tu empresa',
        'Toma de decisiones más clara y estratégica',
        'Recuperación de 10+ horas semanales',
      ],
      investment: '$250 USD/sesión individual o $600 USD/pack de 3 sesiones',
      duration: 'Sesiones de 45-60 minutos',
      cta: 'Recuperar mi claridad mental',
    },
  },
  {
    id: 'automatizacion-procesos',
    icon: TrendingUp,
    title: 'Automatización de Procesos',
    description:
      'Aprende a invertir de forma inteligente y segura. Estrategias personalizadas para hacer crecer tu patrimonio.',
    modalContent: {
      problem: 'Pierdes horas en tareas repetitivas: copiar-pegar, enviar emails, actualizar hojas de cálculo',
      solution: 'Automatización de flujos de trabajo con Google Apps Script y herramientas no-code',
      includes: [
        'Mapeo de procesos actuales y detección de automatizables',
        'Creación de scripts personalizados en Google Sheets',
        'Automatización de emails y notificaciones',
        'Integración entre Google Forms, Sheets, Gmail y Calendar',
        'Dashboards automáticos de seguimiento',
        'Documentación de procesos',
      ],
      results: [
        'Recuperación de 15-20 horas/semana por empleado',
        'Eliminación del 95% de errores manuales',
        'Información actualizada en tiempo real',
        'Escalabilidad sin aumentar personal',
      ],
      investment: 'Desde $600 USD (por proceso automatizado)',
      duration: '2-3 semanas por proceso',
      cta: 'Automatizar mis procesos',
    },
  },
  {
    id: 'analisis-datos',
    icon: Brain,
    title: 'Análisis de Datos',
    description:
      'Consultoría de liderazgo y gestión del estrés para dueños de PyMEs. Lidera con claridad, energía y propósito.',
    modalContent: {
      problem: 'Tienes datos dispersos en Excel, Google Sheets y diferentes sistemas, pero no sabes qué hacer con ellos',
      solution: 'Dashboards ejecutivos que te muestran la salud real de tu negocio',
      includes: [
        'Auditoría de fuentes de datos actuales',
        'Diseño de KPIs relevantes para tu negocio',
        'Creación de dashboards en Google Data Studio o Power BI',
        'Integración de datos de ventas, inventario, finanzas',
        'Alertas automáticas cuando hay desviaciones',
        'Capacitación en interpretación de datos',
      ],
      results: [
        'Visibilidad completa de tu operación en tiempo real',
        'Detección temprana de problemas',
        'Toma de decisiones basada en datos, no en intuición',
        'Reducción del 80% en tiempo de generación de reportes',
      ],
      investment: 'Desde $700 USD (dashboard básico)',
      duration: '3-4 semanas',
      cta: 'Visualizar mis datos',
    },
  },
]
