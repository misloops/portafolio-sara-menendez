import { cn } from '../utils/classNames';

interface ScrollableCaseStudyImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  viewportClassName?: string;
}

export function ScrollableCaseStudyImage({
  src,
  alt,
  caption,
  className,
  viewportClassName,
}: ScrollableCaseStudyImageProps) {
  return (
    <figure className={cn('w-full', className)}>
      <div className="rounded-2xl border border-dark/15 bg-white/65 shadow-[0_20px_45px_rgba(48,46,46,0.12)] backdrop-blur-sm overflow-hidden">
        <div className="flex items-center justify-between border-b border-dark/10 px-4 py-2.5 bg-white/80">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f2a7a7]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f2d28c]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#9fc8a1]" />
          </div>
          <p className="text-xs font-medium text-dark/60">Scroll to explore</p>
          <div className="text-[11px] text-dark/45">Preview</div>
        </div>

        <div
          className={cn(
            'relative overflow-y-auto',
            'h-[320px] md:h-[460px] lg:h-[620px]',
            viewportClassName
          )}
        >
          <img
            src={src}
            alt={alt}
            className="block w-full h-auto"
            loading="lazy"
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/8 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />

          <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs text-white">
            Scroll
          </div>
        </div>
      </div>

      {caption ? (
        <figcaption className="mt-3 text-sm text-dark/60">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
