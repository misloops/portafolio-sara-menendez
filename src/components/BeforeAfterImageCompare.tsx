import { useRef, useState } from 'react';
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

/**
 * BeforeAfterImageCompare Component
 * Interactive left-right slider to compare two images
 * Drag the handle or click anywhere on the image to move the divider
 */
export function BeforeAfterImageCompare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = 'Antes',
  afterLabel = 'Después',
  className,
}: BeforeAfterImageCompareProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'click') return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(newPosition);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(newPosition);
  };

  return (
    <div className={cn('w-full', className)}>
      <div
        ref={containerRef}
        className="relative h-[280px] md:h-[360px] lg:h-[420px] overflow-hidden rounded-2xl border border-dark/15 bg-white/65 shadow-[0_20px_45px_rgba(48,46,46,0.12)] backdrop-blur-sm cursor-col-resize"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={handleMouseUp}
        onClick={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Before Image (Background) */}
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
          loading="lazy"
          draggable={false}
        />

        {/* After Image (Overlay, clipped by width) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${position}%` }}
        >
          <img
            src={afterSrc}
            alt={afterAlt}
            className="absolute inset-0 h-full w-full object-cover select-none"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(48,46,46,0.25)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        {/* Handle (Drag Icon) */}
        <div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 -translate-x-1/2',
            'flex h-10 w-10 items-center justify-center',
            'rounded-full border-2 border-white bg-black/60',
            'text-white shadow-lg select-none pointer-events-none',
            'transition-all',
            isDragging && 'scale-110 bg-black/80'
          )}
          style={{ left: `${position}%` }}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>

        {/* Labels */}
        <div className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white pointer-events-none">
          {beforeLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white pointer-events-none">
          {afterLabel}
        </div>
      </div>

      <p className="mt-3 text-xs text-dark/50">Arrastra o haz clic para comparar</p>
    </div>
  );
}
