import { cn } from '../../utils/classNames';

export type ImageItem = {
  src: string;
  alt: string;
};

export type ImageGroup = {
  title: string;
  note?: string;
  images: ImageItem[];
};

interface HorizontalImageGalleryProps {
  groups: ImageGroup[];
  containerClassName?: string;
  groupClassName?: string;
  imageMaxHeight?: string;
}

/**
 * HorizontalImageGallery Component
 * 
 * Reusable horizontal scrollable gallery for case study content
 * Supports multiple image groups with titles and notes
 * 
 * Usage:
 * ```tsx
 * <HorizontalImageGallery 
 *   groups={[
 *     {
 *       title: "Sistema visual",
 *       note: "Tokens y componentes",
 *       images: [{ src: "...", alt: "..." }, ...]
 *     }
 *   ]}
 * />
 * ```
 */
export function HorizontalImageGallery({
  groups,
  containerClassName,
  groupClassName,
  imageMaxHeight = 'max-h-[620px]'
}: HorizontalImageGalleryProps) {
  return (
    <div className={cn('space-y-8', containerClassName)}>
      {groups.map((group) => (
        <article 
          key={group.title}
          className={cn(
            'rounded-2xl border border-primary-300/30 bg-[#ffffff5c] backdrop-blur-sm p-4 md:p-6',
            groupClassName
          )}
        >
          {/* Header */}
          <div className="mb-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark">
              {group.title}
            </h3>
            {group.note && (
              <p className="mt-1 text-base md:text-lg text-dark/75 leading-relaxed">
                {group.note}
              </p>
            )}
          </div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-1">
            <div className="flex items-start gap-4 w-max min-w-full">
              {group.images.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={cn(
                    'w-auto h-auto object-contain rounded-lg',
                    imageMaxHeight
                  )}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
