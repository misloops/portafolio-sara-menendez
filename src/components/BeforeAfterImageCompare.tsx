import { useId, useState } from 'react';
import { cn } from '../utils/classNames';

interface BeforeAfterImageCompareProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterImageCompare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = 'Antes',
  afterLabel = 'Despues',
  className,
}: BeforeAfterImageCompareProps) {
  const [position, setPosition] = useState(50);
  const id = useId();

  return (
    <div className={cn('w-full', className)}>
      <div className="relative h-[280px] md:h-[360px] lg:h-[420px] overflow-hidden rounded-2xl border border-dark/15 bg-white/65 shadow-[0_20px_45px_rgba(48,46,46,0.12)] backdrop-blur-sm">
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
          aria-hidden="true"
        >
          <img
            src={afterSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(48,46,46,0.25)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-black/55 text-white shadow-lg"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="text-base leading-none">⇆</span>
        </div>

        <div className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs text-white">
          {beforeLabel}
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs text-white">
          {afterLabel}
        </div>
      </div>

      <label htmlFor={id} className="mt-4 block text-sm text-dark/70">
        Desliza para comparar
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="mt-2 w-full accent-[#98c29b]"
      />
      <p className="mt-2 text-sm text-dark/60">{position}%</p>
    </div>
  );
}
