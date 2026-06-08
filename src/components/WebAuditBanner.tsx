import Button from './Button';

/**
 * WebAuditBanner
 * Banner horizontal integrado, estilo tipográfico y colores del portfolio, con CTA usando el botón del sistema.
 */
export default function WebAuditBanner() {
  return (
    <section
      className="w-full py-10 px-4 bg-gray-50 border border-gray-200 rounded-xl my-12 flex justify-center animate-fade-in"
      aria-label="Auditoría web gratis"
    >
      <div className="flex flex-col md:flex-row items-center gap-4 max-w-3xl w-full">
        <div className="flex-1 text-center md:text-left">
          <span className="font-serif text-xl text-gray-900 block mb-1">
            ¿Tu web va lenta, se ha quedado obsoleta o algo no funciona como debería? ¿solo necesitas mantenimiento o pequeños cambios? Si este es tu caso, escríbeme y  haré un análisis de tu web sin coste alguno.',
          </span>
          <span className="font-sans text-base text-gray-700">
            Auditoría web gratis — cuéntamelo y le echo un vistazo.
          </span>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sara.m.pumariega@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <Button text="Lo quiero" variant="outline" size="md" />
        </a>
      </div>
    </section>
  );
}
