import { cn, getChipClasses } from '../../utils/classNames';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { CaseStudyPager } from '../../components/case-study/CaseStudyPager';

export function OhmiosRecordsCaseStudy() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(120deg, #f2e8f0 0%, #ede6eb 8%, #e8dce8 10%, #d4c4d4 24%, #b8d4c0 45%, #a8d8b0 70%, #b0deb8 85%, #f0e8f0 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />

      <section
        className={cn(
          'relative',
          'pt-32 pb-16 lg:pt-40 lg:pb-24',
          'px-4 lg:px-6',
          'bg-transparent',
          'overflow-hidden'
        )}
      >
        <div className={cn('relative z-10', 'max-w-7xl mx-auto', 'px-4 lg:px-6')}>
          <div className={cn('flex flex-col gap-4 lg:gap-8', 'text-left', 'max-w-4xl')}>
            <p className={cn('text-sm font-semibold uppercase tracking-widest', 'text-dark/60')}>Diseño Web</p>

            <h1 className={cn('font-serif', 'text-4xl md:text-5xl lg:text-6xl', 'font-normal leading-[1.02]', 'text-dark')}>
              Ohmios Records Online
            </h1>

            <div className={cn('flex flex-col gap-2 lg:gap-6', 'max-w-3xl')}>
              <p className="heading-subtitle">Tienda online para sello de discos en vinilo.</p>
              <p className={cn('text-lg md:text-xl', 'leading-[1.6]', 'text-dark/75', 'max-w-3xl')}>
                Un proyecto que une música independiente y diseño digital. Desde 2022 desarrollo y mantenimiento de la plataforma e-commerce para vender vinilos y lanzamientos digitales.
              </p>
            </div>

            <div className={cn('flex flex-wrap gap-2 lg:gap-3', 'pt-2 lg:pt-4')}>
              {['Diseño Web', 'WordPress', 'WooCommerce', 'Tienda online'].map((chip) => (
                <span key={chip} className={getChipClasses()}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <img
            src="/assets/projects/ohmios-records/OHMIOS-RECORDS_COVER.png"
            alt="Ohmios Records Online - Cover"
            className="w-full h-auto object-contain rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-dark mb-4">Reto</h3>
            <p className="text-base md:text-[17px] leading-[28px] text-dark/80">
              Ohmios necesitaba una tienda online funcional y rápida para vender vinilos y lanzamientos digitales, manteniendo la identidad cultural de una tienda física con años de trayectoria.
            </p>
          </article>

          <article className="rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-dark mb-4">Objetivo</h3>
            <ul className="space-y-3 text-base md:text-[17px] leading-[28px] text-dark/80">
              <li className="flex gap-3"><span className="text-primary-400 font-bold">•</span><span>Mejorar experiencia de compra para seguidores del sello.</span></li>
              <li className="flex gap-3"><span className="text-primary-400 font-bold">•</span><span>Dar autonomía al cliente para gestión de catálogo.</span></li>
              <li className="flex gap-3"><span className="text-primary-400 font-bold">•</span><span>Conservar la personalidad visual del universo musical.</span></li>
            </ul>
          </article>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
          <div className="lg:col-span-4 rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-dark mb-4">Mi rol</h3>
            <p className="text-base md:text-[17px] leading-[28px] text-dark/80 mb-4">
              Desarrollo completo en WordPress + WooCommerce y diseño UX/UI minimalista orientado a conversión.
            </p>
            <ul className="space-y-3 text-base md:text-[17px] leading-[28px] text-dark/80">
              <li className="flex gap-3"><span className="text-primary-400 font-bold">•</span><span>Arquitectura de tienda y configuración WooCommerce.</span></li>
              <li className="flex gap-3"><span className="text-primary-400 font-bold">•</span><span>Optimización mobile para sesiones de compra rápidas.</span></li>
              <li className="flex gap-3"><span className="text-primary-400 font-bold">•</span><span>Mantenimiento continuo de catálogo y estructura.</span></li>
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6">
              <h3 className="font-serif text-2xl font-bold text-dark mb-3">Solución</h3>
              <p className="text-dark/80 leading-relaxed">
                Tienda clara y ligera, con estructura de catalogo centrada en descubrimiento y compra.
              </p>
            </article>
            <article className="rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6">
              <h3 className="font-serif text-2xl font-bold text-dark mb-3">Resultado</h3>
              <p className="text-dark/80 leading-relaxed">
                Mejor experiencia de compra y mayor coherencia de marca para nuevos lanzamientos.
              </p>
            </article>
            <article className="rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6 md:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-dark mb-3">Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-dark/80">
                <p><strong>Valor:</strong> equilibrio entre funcionalidad y cultura de marca.</p>
                <p><strong>Tecnología:</strong> WordPress + WooCommerce optimizado.</p>
                <p><strong>Resultado:</strong> e-commerce usable y coherente visualmente.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CaseStudyPager
        previousLabel="Volver a proyectos"
        previousHref="/proyectos"
        nextLabel="Trick Tales"
        nextHref="/proyectos/trick-tales-app"
      />

      <Footer />
    </div>
  );
}
