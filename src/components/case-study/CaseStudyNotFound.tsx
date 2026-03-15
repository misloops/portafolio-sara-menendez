import { cn } from '../../utils/classNames';
import Header from '../Header';
import Footer from '../Footer';

export function CaseStudyNotFound() {
  return (
    <div className="min-h-screen text-dark">
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-dark/60 mb-4">
            Case Study
          </p>
          <h1 className="text-5xl font-bold text-dark mb-6">
            Página no encontrada
          </h1>
          <p className="text-lg text-dark/70 mb-8">
            Este case study aún no está disponible.
          </p>
          <a href="/" className={cn(
            'inline-flex px-6 py-3 font-semibold rounded-lg',
            'bg-primary-400 text-dark hover:bg-primary-500',
            'transition-all duration-300'
          )}>
            ← Volver al inicio
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
