import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Clock, Mountain, Coffee } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logo from './components/Logo';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useAnalytics } from './hooks/useAnalytics';
import {
  ASSETS,
  STATS,
  PILLARS,
  TOUR_STEPS,
  INCLUDED_ITEMS,
  EXPERIENCES,
  REVIEWS,
  DISTANCE_POINTS,
  FAQ_ITEMS,
  WHATSAPP_URL,
  EMAIL,
  NAV_LINKS,
  GOOGLE_MAPS_URL,
} from './constants';

// ---------------------------------------------------------------------------
// WhatsApp floating button
// ---------------------------------------------------------------------------
function WhatsAppFloat() {
  const { trackWhatsAppClick } = useAnalytics();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar Coffee Tour por WhatsApp"
      onClick={() => trackWhatsAppClick('floating_button')}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#20b95a] hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all duration-300"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-white"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ---------------------------------------------------------------------------
// Stats bar
// ---------------------------------------------------------------------------
function StatsBar() {
  return (
    <section className="bg-brand-navy py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center px-4"
            >
              <span className="text-3xl sm:text-4xl font-serif font-bold text-brand-gold leading-none">
                {stat.value}
              </span>
              <span className="mt-1 text-white font-semibold text-sm sm:text-base">
                {stat.label}
              </span>
              <span className="mt-0.5 text-white/50 text-xs">{stat.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Why Choose Section (replaces SearchSection)
// ---------------------------------------------------------------------------
function WhyChooseSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="tour" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            isVisible ? 'scroll-visible' : 'scroll-hidden'
          }`}
        >
          {/* Left column */}
          <div>
            <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-3">
              Una experiencia que va más allá del café
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark leading-tight mb-5">
              ¿Por qué elegir nuestro Coffee Tour?
            </h2>
            <p className="text-brand-dark/70 text-base leading-relaxed mb-8">
              La Palma &amp; El Tucán es una finca cafetera activa de 5 hectáreas ubicada a
              1.700 msnm en Zipacón, Cundinamarca. Exportamos a más de 30 países y cultivamos
              variedades de clase mundial como{' '}
              <span className="font-semibold text-brand-dark">Gesha, Sidra, Mokka y Java</span>.
              Nuestro Coffee Tour te lleva detrás de escena: de los cafetales al laboratorio de
              catación, con almuerzo farm-to-table incluido.
            </p>

            <ul className="space-y-4">
              {PILLARS.map((pillar) => (
                <li key={pillar.title} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center text-xl"
                    aria-hidden="true"
                  >
                    {pillar.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-brand-dark">{pillar.title}</p>
                    <p className="text-brand-dark/60 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: 2x2 photo grid */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src={ASSETS.CAFETALES}
              alt="Cafetales de especialidad"
              className="w-full h-52 object-cover rounded-2xl"
              loading="lazy"
            />
            <img
              src={ASSETS.DEGUSTACION}
              alt="Degustación de café de especialidad"
              className="w-full h-52 object-cover rounded-2xl"
              loading="lazy"
            />
            <img
              src={ASSETS.PROCESSING}
              alt="Planta de procesamiento de café"
              className="w-full h-52 object-cover rounded-2xl"
              loading="lazy"
            />
            <img
              src={ASSETS.COMIDA}
              alt="Almuerzo farm-to-table"
              className="w-full h-52 object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Tour Steps Section (replaces CabinSection)
// ---------------------------------------------------------------------------
function TourStepsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick, trackReserveClick } = useAnalytics();

  return (
    <section id="incluye" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-3">
            Tu día en la finca
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark leading-tight mb-4">
            3 pasos para vivir el café desde adentro
          </h2>
          <p className="text-brand-dark/60 text-base italic">
            De la semilla a la taza. Una experiencia completa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Photo gallery */}
          <div className="flex flex-col gap-3">
            <img
              src={ASSETS.CAFETALES}
              alt="Recorrido por los cafetales de La Palma y El Tucán"
              className="w-full object-cover rounded-2xl"
              style={{ height: '280px' }}
              loading="lazy"
            />
            <div className="grid grid-cols-2 gap-3">
              <img
                src={ASSETS.PROCESSING}
                alt="Planta de procesamiento de café"
                className="w-full object-cover rounded-2xl"
                style={{ height: '180px' }}
                loading="lazy"
              />
              <img
                src={ASSETS.DEGUSTACION}
                alt="Degustación de café de especialidad"
                className="w-full object-cover rounded-2xl"
                style={{ height: '180px' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Steps + Included + Ideal para + CTAs */}
          <div className="space-y-6">
            {/* Tour Steps */}
            <div className="space-y-5">
              {TOUR_STEPS.map((step) => (
                <div key={step.number} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-pink text-white flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                  <div>
                    <p className="font-serif font-semibold text-brand-dark text-lg">
                      {step.title}
                    </p>
                    <p className="text-brand-dark/60 text-sm mb-2">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-brand-dark/70">
                          <svg
                            className="flex-shrink-0 w-4 h-4 mt-0.5 text-brand-pink"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2 6L4.5 8.5L10 3"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <hr className="border-brand-beige" />

            {/* Included items */}
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-4">
                ¿Qué incluye?{' '}
                <span className="text-brand-pink">· $492.000 COP/persona</span>
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {INCLUDED_ITEMS.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-2 text-sm text-brand-dark/80"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4 mt-0.5 text-brand-green"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6L4.5 8.5L10 3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal para */}
            <div className="bg-brand-light rounded-2xl p-5">
              <p className="font-semibold text-brand-dark text-sm mb-3 uppercase tracking-widest">
                Ideal para
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-brand-dark/80">
                <span>☕ Amantes del café</span>
                <span>🌿 Exploradores de naturaleza</span>
                <span>👨‍👩‍👧 Familias y parejas</span>
                <span>✨ Turistas buscando lo auténtico</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('tour_steps_section')}
                className="flex-1 bg-[#25D366] text-white text-center px-6 py-3.5 rounded-full font-semibold hover:bg-[#20b95a] transition-all duration-200 hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
              >
                Reservar mi tour
              </a>
              <a
                href="#reservar"
                onClick={() => trackReserveClick('tour_steps_section')}
                className="flex-1 border-2 border-brand-pink text-brand-pink text-center px-6 py-3.5 rounded-full font-semibold hover:bg-brand-pink hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Experiences Section
// ---------------------------------------------------------------------------
function ExperiencesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experiencias" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-3">
            Más allá del café
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark leading-tight mb-4">
            Experiencias que complementan tu visita
          </h2>
          <p className="text-brand-dark/60 text-base">La finca tiene mucho más para ti:</p>
        </div>

        {/* Experience cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-3xl mb-4 block" aria-hidden="true">
                {exp.icon}
              </span>
              <h3 className="font-serif font-semibold text-brand-dark text-lg mb-2 group-hover:text-brand-pink transition-colors duration-200">
                {exp.title}
              </h3>
              <p className="text-brand-dark/60 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Overlay image */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={ASSETS.BOSQUE}
            alt="Bosque de niebla en La Palma y El Tucán"
            className="w-full h-72 sm:h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/40 to-transparent flex flex-col justify-end p-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Una finca de clase mundial para una experiencia única
            </h3>
            <p className="text-white/80 text-sm sm:text-base mb-2">
              La Palma &amp; El Tucán no es un tour turístico más.
            </p>
            <p className="text-white/70 text-sm sm:text-base mb-3">
              Es una finca cafetera activa reconocida internacionalmente, donde el café, la
              naturaleza y la gastronomía se unen en una experiencia que no encontrarás en otro
              lugar de Colombia.
            </p>
            <p className="text-brand-gold text-sm italic">
              Visitarnos es vivir esa historia desde adentro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Reviews Section
// ---------------------------------------------------------------------------
function ReviewsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Lo que dicen nuestros visitantes
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
            Experiencias reales. Momentos reales.
          </h2>

          {/* Rating */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl font-serif font-bold text-white">4.9</span>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-0.5" aria-label="Calificación: 5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-brand-gold"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/60 text-xs">(127 reseñas)</span>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className="glass-morphism rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-0.5" aria-label={`${review.stars} estrellas`}>
                {Array.from({ length: review.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-brand-gold"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed flex-1">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Distance Section
// ---------------------------------------------------------------------------
function DistanceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-3">
            Transporte incluido
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
            Tu único trabajo: llegar a Libertario Calle 85
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Left: navy card — transport info */}
          <div className="bg-brand-navy rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-pink/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-pink" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-bold">
                ¿Cómo funciona el transporte?
              </h3>
            </div>

            <ul className="space-y-4 mb-6">
              {DISTANCE_POINTS.map((point) => (
                <li key={point.text} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0" aria-hidden="true">
                    {point.icon}
                  </span>
                  <span className="text-white/80 text-sm">{point.text}</span>
                </li>
              ))}
            </ul>

            {/* Info box */}
            <div className="bg-white/10 rounded-xl p-4 flex gap-3">
              <Clock className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-brand-gold font-semibold text-sm mb-1">
                  Punto de encuentro
                </p>
                <p className="text-white/70 text-xs leading-relaxed">
                  Libertario Coffee Roasters · Kr 13 #85-13, Chapinero, Bogotá.<br />
                  Finca ubicada en Zipacón, Cundinamarca.
                </p>
              </div>
            </div>
          </div>

          {/* Right: light card — what to find at the farm */}
          <div className="bg-brand-light rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                <Mountain className="w-5 h-5 text-brand-green" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-brand-pink" aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold text-brand-dark">
                  ¿Qué encontrarás en la finca?
                </h3>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                '1.700 msnm con microclima único de montaña',
                '5 hectáreas de cafetales de especialidad',
                'Bosque de niebla con senderos y cascadas',
                'Huerta orgánica y gastronomía farm-to-table',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 w-4 h-4 mt-0.5 text-brand-green"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6L4.5 8.5L10 3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-brand-dark/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Sustainability info box */}
            <div className="bg-brand-green/10 border border-brand-green/20 rounded-xl p-4">
              <p className="text-brand-green font-semibold text-sm mb-1">
                Green Travel Award Winner
              </p>
              <p className="text-brand-dark/60 text-xs leading-relaxed">
                Reconocidos por nuestro compromiso con la sostenibilidad y la agricultura
                regenerativa.
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps link */}
        <div className="text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-pink underline underline-offset-4 text-sm hover:text-brand-pink/80 transition-colors duration-200 font-medium"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Urgency Section
// ---------------------------------------------------------------------------
function UrgencySection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick, trackReserveClick } = useAnalytics();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.CAFETALES}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/75" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <span className="text-5xl mb-6 block" aria-hidden="true">
            ☕
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Los cupos son limitados{' '}
            <span className="text-brand-pink italic">y se agotan rápido</span>
          </h2>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8">
            Grupos pequeños para garantizar una experiencia personalizada. Si tienes una fecha
            en mente, reserva cuanto antes.
          </p>

          {/* Animated badge */}
          <div className="flex justify-center mb-8">
            <span className="relative inline-flex items-center gap-2 bg-brand-pink/20 border border-brand-pink/40 text-brand-pink text-sm font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse flex-shrink-0" />
              Cupos limitados · Reserva hoy
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('urgency_section')}
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#20b95a] transition-all duration-200 hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
            >
              Reservar mi Coffee Tour
            </a>
            <a
              href="#reservar"
              onClick={() => trackReserveClick('urgency_section')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-brand-dark transition-all duration-200 hover:-translate-y-0.5"
            >
              Ver más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FAQ Section
// ---------------------------------------------------------------------------
function FaqSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-brand-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
            Todo lo que necesitas saber
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-brand-light/50 transition-colors duration-200"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-brand-dark text-sm sm:text-base">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="flex-shrink-0 w-5 h-5 text-brand-pink" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 w-5 h-5 text-brand-dark/40" aria-hidden="true" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-brand-dark/70 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CTA Final
// ---------------------------------------------------------------------------
function CtaFinal() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick, trackEmailClick } = useAnalytics();

  return (
    <section id="reservar" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.CAFETALES}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          {/* Animated badge */}
          <div className="flex justify-center mb-6">
            <span className="relative inline-flex items-center gap-2 bg-brand-pink/20 border border-brand-pink/40 text-brand-pink text-sm font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse flex-shrink-0" />
              Cupos limitados
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Reserva tu Coffee Tour en minutos
          </h2>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10">
            Así de sencillo es vivir la experiencia cafetera más especial de Colombia.
          </p>

          {/* 3 steps */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 mb-10">
            {[
              '1. Escríbenos por WhatsApp',
              '2. Confirmamos tu fecha',
              '3. ¡Nos vemos en la finca!',
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-3 sm:gap-4">
                <div className="glass-morphism rounded-xl px-4 py-3 text-white text-sm font-medium text-center">
                  {step}
                </div>
                {i < 2 && (
                  <span className="text-white/30 hidden sm:block text-xl" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('cta_final')}
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#20b95a] transition-all duration-200 hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
            >
              Reservar por WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              onClick={() => trackEmailClick('cta_final')}
              className="bg-brand-pink text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5"
            >
              Escribir por correo
            </a>
          </div>

          {/* Trust note */}
          <p className="text-white/50 text-xs">
            Respuesta inmediata · Hablamos español e inglés · $492.000 COP todo incluido
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="light" size="md" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Finca cafetera de clase mundial a 90 minutos de Bogotá. Coffee Tour con
              transporte incluido, degustación guiada y almuerzo farm-to-table.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  WhatsApp: +57 318 956 5617
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {EMAIL}
                </a>
              </li>
              <li>Zipacón, Cundinamarca, Colombia</li>
            </ul>

            {/* Social links */}
            <div className="mt-6 space-y-2">
              <h5 className="font-semibold text-white text-xs uppercase tracking-widest mb-3">
                Redes sociales
              </h5>
              {[
                { label: 'Instagram', url: 'https://instagram.com/lapalmayeltucan_hotel', handle: '@lapalmayeltucan_hotel' },
                { label: 'Facebook', url: 'https://facebook.com/lapalmayeltucan', handle: 'Facebook' },
                { label: 'TikTok', url: 'https://tiktok.com/@lapalmayeltucan', handle: 'TikTok' },
                { label: 'LinkedIn', url: 'https://linkedin.com/company/lapalmayeltucan', handle: 'LinkedIn' },
                { label: 'Website', url: 'https://lapalmayeltucanhotel.com', handle: 'lapalmayeltucanhotel.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/50 hover:text-white text-xs transition-colors duration-200"
                  aria-label={`${social.label}: ${social.handle}`}
                >
                  {social.handle}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {currentYear} La Palma &amp; El Tucán. Coffee Tour · Zipacón, Cundinamarca
            · A 90 minutos de Bogotá
          </p>
          <p>Green Travel Award Winner · Sustainability First</p>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// App root
// ---------------------------------------------------------------------------
export default function App() {
  useAnalytics(true);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhyChooseSection />
        <TourStepsSection />
        <ExperiencesSection />
        <ReviewsSection />
        <DistanceSection />
        <UrgencySection />
        <FaqSection />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
