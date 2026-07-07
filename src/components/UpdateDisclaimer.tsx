import { useState } from 'react';
import { cn } from '../utils/classNames';

interface UpdateDisclaimerProps {
  message?: string;
}

export function UpdateDisclaimer({ message = '¡Estoy actualizando la página y subiendo proyectos nuevos! Puede que encuentres algún detalle en construcción.' }: UpdateDisclaimerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Aviso de actualización"
      onClick={() => setVisible(false)}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/30 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal */}
      <div
        className={cn(
          'relative z-10',
          'bg-white/90 backdrop-blur-md',
          'rounded-2xl shadow-xl',
          'px-8 py-8 max-w-sm w-full',
          'border border-[#d8ded8]',
          'flex flex-col gap-3 items-center text-center'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-2xl" aria-hidden="true">🛠️</span>
        <p className="font-serif text-xl font-normal text-dark leading-snug">
          {message}
        </p>
      </div>
    </div>
  );
}

export default UpdateDisclaimer;

