import { cn } from '../utils/classNames';

function WhatCanIHelp() {
  return (
    <section id="servicios" className={cn(
      'py-16 md:py-24 lg:py-32',
      'px-6 md:px-12 lg:px-16',
    )}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className={cn(
            'text-4xl md:text-5xl lg:text-6xl font-bold',
            'text-dark mb-4'
          )}>
            ¿En qué puedo ayudarte?
          </h2>
          <p className={cn(
            'text-base md:text-lg text-dark/70',
            'max-w-2xl leading-relaxed'
          )}>
            Estos son mis servicios web. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        {/* Cards placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={cn(
                'rounded-2xl border border-neutral-200',
                'bg-white/60 backdrop-blur-sm',
                'p-8 min-h-[200px]'
              )}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatCanIHelp;
