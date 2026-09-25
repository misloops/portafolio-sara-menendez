import Header from '../components/Header';
import Footer from '../components/Footer';
import { cn } from '../utils/classNames';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { UpdateDisclaimer } from '../components/UpdateDisclaimer';
import ohmiosCoverImage from '../assets/projects/ohmios-records/Ohmios_cover.jpg';
import ohmiosProductMobileImage from '../assets/projects/ohmios-records/Ohmios_movil_producto 1.jpg';
import ohmiosPlayerMobileImage from '../assets/projects/ohmios-records/ohmios_movil_reproductor 2.jpg';

const serviceIcons: Record<string, ReactNode> = {
  development: (
    <svg className="w-10 h-10 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8M12 17v4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9l3 3 3-3" />
    </svg>
  ),
  maintenance: (
    <svg className="w-10 h-10 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  redesign: (
    <svg className="w-10 h-10 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  )
};

export function WordPressPageEn() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #d99a8a 0%, #e8927c 20%, #efb5a6 40%, #e7ccc2 55%, #e3e6e3 70%, #c3c7c3 85%, #dee2de 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Helmet>
        <title>WordPress Design & Development | Sara Menéndez</title>
        <meta name="description" content="WordPress specialist for corporate sites, online stores and redesigns. Fast, secure and SEO-friendly websites built for growth." />
        <link rel="canonical" href="https://portafolio-sara-menendez.vercel.app/wordpress-en" />
      </Helmet>

      <Header />

      <UpdateDisclaimer message="I'm currently updating this page and adding new projects! You may find some details still in progress." />

      {/* Header Spacer */}
      <div className="h-16 lg:h-20" />

      {/* Hero Section */}
      <section className={cn('py-4 lg:py-10', 'px-4 lg:px-6', 'bg-transparent')}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className={cn('font-serif', 'text-4xl md:text-5xl lg:text-6xl', 'font-normal text-dark mb-4 lg:mb-8', 'leading-tight')}>
              WordPress design & development
            </h1>
            <p className="heading-subtitle mb-4 lg:mb-8">
              WordPress is the most widely used content management system in the world, and it's not by chance.
            </p>
            <p className="text-dark/80 font-semibold leading-relaxed max-w-2xl">
              Its flexibility, scalability and ease of management make it one of the best options for companies, brands and professionals who need a solid and easy-to-manage website.
            </p>
          </div>
        </div>
      </section>

      {/* 2 info columns */}
      <section className="py-10 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className={cn('flex flex-col gap-3', 'rounded-xl p-6 lg:p-8', 'bg-[#fbebe7]/70 backdrop-blur-sm', 'border border-[#e8927c]/40')}>
              <h3 className="text-xl font-serif font-bold text-dark">What can I offer you?</h3>
              <p className="text-dark/70 leading-relaxed">
                As a freelance web designer specialising in WordPress, I have more than six years of experience creating, redesigning and optimising websites tailored to each client's needs. From corporate sites to online stores, my goal is to build a website that not only looks good, but works efficiently and helps you achieve your business objectives.
              </p>
            </div>
            <div className={cn('flex flex-col gap-3', 'rounded-xl p-6 lg:p-8', 'bg-[#fbebe7]/70 backdrop-blur-sm', 'border border-[#e8927c]/40')}>
              <h3 className="text-xl font-serif font-bold text-dark">Why work with a WordPress specialist?</h3>
              <p className="text-dark/70 leading-relaxed">
                WordPress is an accessible tool, but behind a professional website there is much more than installing a theme and adding a few plugins. Optimisation, security, performance, compatibility and positioning require technical knowledge that makes the difference between a website that merely exists and one that adds real value to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className={cn('font-serif', 'text-3xl md:text-4xl', 'font-bold text-dark mb-12')}>Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className={cn('bg-white/40 backdrop-blur-sm rounded-xl', 'p-6 lg:p-8', 'border border-[#c3c7c3]', 'hover:border-[#e3e6e3] hover:bg-white/60', 'transition-all duration-300', 'group')}>
              <div className={cn('mb-6 p-4 rounded-lg w-fit', 'bg-[#f3f5f3]', 'group-hover:bg-[#eaecea]', 'transition-colors duration-300')}>{serviceIcons.development}</div>
              <h3 className="text-xl font-serif font-bold text-dark mb-3">Web design and development from scratch</h3>
              <p className="text-dark/70 leading-relaxed">I build your digital presence from the ground up. Responsive design, clean development and optimisation so your website not only looks great, but works and converts.</p>
            </div>
            <div className={cn('bg-white/40 backdrop-blur-sm rounded-xl', 'p-6 lg:p-8', 'border border-[#c3c7c3]', 'hover:border-[#e3e6e3] hover:bg-white/60', 'transition-all duration-300', 'group')}>
              <div className={cn('mb-6 p-4 rounded-lg w-fit', 'bg-[#f3f5f3]', 'group-hover:bg-[#eaecea]', 'transition-colors duration-300')}>{serviceIcons.maintenance}</div>
              <h3 className="text-xl font-serif font-bold text-dark mb-3">Maintenance</h3>
              <p className="text-dark/70 leading-relaxed">A website needs constant care to keep working properly. Updates, security, backups and technical reviews are part of preventive maintenance that avoids future problems. A well-maintained site is safer, faster and far less prone to unexpected errors.</p>
            </div>
            <div className={cn('bg-white/40 backdrop-blur-sm rounded-xl', 'p-6 lg:p-8', 'border border-[#c3c7c3]', 'hover:border-[#e3e6e3] hover:bg-white/60', 'transition-all duration-300', 'group')}>
              <div className={cn('mb-6 p-4 rounded-lg w-fit', 'bg-[#f3f5f3]', 'group-hover:bg-[#eaecea]', 'transition-colors duration-300')}>{serviceIcons.redesign}</div>
              <h3 className="text-xl font-serif font-bold text-dark mb-3">Web redesign</h3>
              <p className="text-dark/70 leading-relaxed">If your website looks outdated, doesn't reflect your company's quality or simply isn't generating results, I can help you renew it completely. I work on structure, user experience, visual design and performance to create attractive, intuitive websites ready to convert visits into opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className={cn('font-serif', 'text-3xl md:text-4xl', 'font-bold text-dark mb-12 lg:mb-16')}>Case studies</h2>

          {/* Featured Project: Ohmios Records */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-16 lg:mb-20">
            {/* Left column: Title + Home image */}
            <div className="flex flex-col gap-4 md:gap-5">
              <div className="flex flex-col gap-2 md:min-h-[132px]">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-dark leading-tight">Ohmios Records</h3>
                <p className="text-base font-semibold text-dark/70">Design & development · Online store · Maintenance</p>
                <p className="text-sm italic text-dark/50">Asturias 2023–2026</p>
              </div>
              <img src={ohmiosCoverImage} alt="Ohmios Records - Home" className="w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Right column: Intro + Mobile screenshots */}
            <div className="flex flex-col gap-4 md:gap-5 md:pt-[132px]">
              <h3 className="text-sm md:text-base font-semibold italic text-dark/80 leading-relaxed" style={{ fontFamily: 'Gilroy, DM Sans, sans-serif' }}>
                Online store for an electronic music vinyl record label.
              </h3>

              <a href="https://ohmiosrecords.com/" target="_blank" rel="noopener noreferrer" className={cn('self-stretch sm:self-start inline-flex items-center justify-center rounded-xl border', 'px-4 py-2 text-base font-semibold', 'bg-[#e3e6e3] text-[#4d4d4d] border-[#e3e6e3]', 'hover:bg-[#e3e6e3] transition-all duration-200')}>View online</a>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 items-start">
                <div className="flex flex-col gap-2 items-center lg:items-start">
                  <p className="text-sm font-semibold text-dark/70 text-center lg:text-left">Product page</p>
                  <img src={ohmiosProductMobileImage} alt="Ohmios Records - Product Page Mobile" className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-none h-auto max-h-[460px] lg:max-h-[520px] object-contain rounded-lg shadow-lg mx-auto lg:mx-0" />
                </div>

                <div className="flex flex-col gap-2 items-center lg:items-start">
                  <p className="text-sm font-semibold text-dark/70 text-center lg:text-left">Player</p>
                  <img src={ohmiosPlayerMobileImage} alt="Ohmios Records - Player Mobile" className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-none h-auto max-h-[460px] lg:max-h-[520px] object-contain rounded-lg shadow-lg mx-auto lg:mx-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 1: Isabel Felip + Beatriz Galindo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-10 lg:mb-12">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark leading-tight">Isabel Felip</h3>
              <p className="text-base font-semibold text-dark/70">Web design and development</p>
              <p className="text-sm italic text-dark/50">2026</p>
              <p className="text-base text-dark/70 leading-relaxed">Website for a psychologist and psychotherapist specialising in systemic family therapy and trauma. Warm, accessible design aimed at building trust and facilitating first contact.</p>
              <a href="https://isabelfelip.com/" target="_blank" rel="noopener noreferrer" className={cn('self-start inline-flex items-center justify-center rounded-xl border mt-2', 'px-4 py-2 text-base font-semibold', 'bg-[#e3e6e3] text-[#4d4d4d] border-[#e3e6e3]', 'hover:bg-[#e3e6e3] transition-all duration-200')}>View online</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark leading-tight">Beatriz Galindo</h3>
              <p className="text-base font-semibold text-dark/70">Web design and development</p>
              <p className="text-sm italic text-dark/50">2026</p>
              <p className="text-base text-dark/70 leading-relaxed">Portfolio website for a psychologist specialising in trauma, attachment and gender. Clean, professional design that conveys calm and clinical rigour.</p>
              <a href="https://beatrizgalindonavarro.com/" target="_blank" rel="noopener noreferrer" className={cn('self-start inline-flex items-center justify-center rounded-xl border mt-2', 'px-4 py-2 text-base font-semibold', 'bg-[#e3e6e3] text-[#4d4d4d] border-[#e3e6e3]', 'hover:bg-[#e3e6e3] transition-all duration-200')}>View online</a>
            </div>
            <img src="/assets/projects/isabel-felip/ISABEL_FELIP_entera.jpg" alt="Isabel Felip" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/assets/projects/beatriz-galindo/B_GALINDO_entera.jpg" alt="Beatriz Galindo" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Row 2: Aty Beauty + Menlo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-10 lg:mb-12">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark leading-tight">Aty Beauty</h3>
              <p className="text-base font-semibold text-dark/70">Web design and development</p>
              <p className="text-sm italic text-dark/50">2025</p>
              <p className="text-base text-dark/70 leading-relaxed">Corporate website for a beauty academy specialising in professional training. Modern design focused on student acquisition.</p>
              <a href="https://atybeautyacademia.com/" target="_blank" rel="noopener noreferrer" className={cn('self-start inline-flex items-center justify-center rounded-xl border mt-2', 'px-4 py-2 text-base font-semibold', 'bg-[#e3e6e3] text-[#4d4d4d] border-[#e3e6e3]', 'hover:bg-[#e3e6e3] transition-all duration-200')}>View online</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark leading-tight">Menlo Artist</h3>
              <p className="text-base font-semibold text-dark/70">Web design and development</p>
              <p className="text-sm italic text-dark/50">2025</p>
              <p className="text-base text-dark/70 leading-relaxed">WordPress portfolio for an artist specialising in pet portraits. Minimalist design centred on the gallery and commission enquiries.</p>
              <a href="https://menloartist.com" target="_blank" rel="noopener noreferrer" className={cn('self-start inline-flex items-center justify-center rounded-xl border mt-2', 'px-4 py-2 text-base font-semibold', 'bg-[#e3e6e3] text-[#4d4d4d] border-[#e3e6e3]', 'hover:bg-[#e3e6e3] transition-all duration-200')}>View online</a>
            </div>
            <img src="/assets/projects/aty-beauty/ATY_entera.jpg" alt="Aty Beauty" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/assets/projects/menlo-artist/MENLO_entera.jpg" alt="Menlo Artist" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className={cn('font-serif', 'text-3xl md:text-4xl', 'font-bold text-dark mb-4')}>Does your website need a hand?</h2>
            <p className={cn('text-lg text-dark/75 mb-8', 'leading-relaxed')}>Tell me what's happening.</p>
            <Link
              to="/contacto-en"
              className={cn('inline-flex items-center justify-center rounded-xl border', 'px-6 py-3 lg:px-8 lg:py-4 min-h-12', 'text-base lg:text-lg font-semibold', 'bg-[#e3e6e3] text-[#4d4d4d] border-[#e3e6e3]', 'hover:bg-[#e3e6e3] hover:text-[#4d4d4d]', 'transition-all duration-200 ease-out')}>
              Let's talk →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default WordPressPageEn;
