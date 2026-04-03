import { Link } from 'react-router-dom';
import { cn, getCardClasses, getChipClasses } from '../utils/classNames';
import { Project } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps extends Omit<Project, 'category' | 'status'> {
  isLink?: boolean;
}

/**
 * ProjectCard Component
 * Reusable card for projects/case studies in gallery
 * Follows christinamday.com design patterns
 */
function ProjectCard({
  title,
  meta,
  description,
  image,
  tags,
  slug,
  externalUrl,
  translationKey,
  imageFit = 'contain',
  imagePosition = 'center',
  imagePaddingClassName = 'p-4',
  isLink = true
}: ProjectCardProps) {
  const hasInternalLink = Boolean(slug);
  const hasExternalLink = Boolean(externalUrl);
  const hasDualLinks = hasInternalLink && hasExternalLink;
  const { t } = useLanguage();

  // Use translated description if translationKey exists, otherwise fall back to prop
  const displayDescription = translationKey
    ? (t(`projectDescriptions.${translationKey}`) || description)
    : description;

  const imageFitClass = imageFit === 'cover' ? 'object-cover' : 'object-contain';
  const imagePositionClass = imagePosition === 'top' ? 'object-top' : imagePosition === 'bottom' ? 'object-bottom' : 'object-center';
  
  const cardContent = (
    <article className={cn(
      'flex flex-col h-full p-4 lg:p-4 rounded-2xl',
      hasInternalLink || hasExternalLink ? 'cursor-pointer' : 'cursor-default',
      getCardClasses(),
      'transition-all duration-300'
    )}>
      {/* Image Container Header - 220-240px height with padding */}
      <div className={cn(
        'relative mb-6 -mx-4 -mt-4 mb-6 h-56 rounded-t-2xl',
        'bg-gradient-to-br from-[#f5f3f5] via-[#e8e2e8] to-[#d4e2d2]',
        'flex items-center justify-center',
        'text-5xl overflow-hidden',
        'border-b border-[#dee2de]'
      )}>
        <div className='absolute inset-0 flex items-center justify-center overflow-hidden rounded-t-2xl bg-white'>
          {image.startsWith('/') || image.startsWith('http') ? (
            <img 
              src={image} 
              alt={title}
              loading="lazy"
              decoding="async"
              className={cn(
                'w-full h-full',
                imageFitClass,
                imagePositionClass,
                imagePaddingClassName,
                'group-hover:scale-105 transition-transform duration-300'
              )}
              style={{
                imageRendering: 'crisp-edges',
                WebkitFontSmoothing: 'antialiased',
                backfaceVisibility: 'hidden'
              }}
            />
          ) : (
            <span className="text-5xl flex items-center justify-center h-full">{image}</span>
          )}
        </div>
        <div className={cn(
          'absolute inset-0',
          'bg-black/0 group-hover:bg-black/5',
          'transition-all duration-300'
        )} />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow gap-2 lg:gap-4">
        
        {/* Title - 18-22px, serif, bold */}
        <h3 className={cn(
          'font-serif',
          'text-lg md:text-xl',
          'font-normal leading-tight',
          'text-dark',
          'group-hover:text-[#c3b7c3] transition-colors duration-200'
        )}>
          {title}
        </h3>

        {meta ? (
          <p className="text-sm md:text-base text-dark/70 leading-relaxed -mt-1 group-hover:text-[#c3b7c3] transition-colors duration-200">
            {meta}
          </p>
        ) : null}

        {/* Description - 14-16px, body */}
        <p className={cn(
          'text-sm md:text-base',
          'text-dark/70',
          'leading-relaxed',
          'flex-grow',
          'line-clamp-3',
          'group-hover:text-[#c3b7c3] transition-colors duration-200'
        )}>
          {displayDescription}
        </p>

        {/* Tags - 12-14px, inline, una línea */}
        <div className={cn(
          'flex gap-2 pt-2 lg:pt-6 overflow-x-auto whitespace-nowrap scrollbar-hide'
        )}>
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className={getChipClasses()}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Link - Always visible */}
        <div className={cn(
          'mt-4 pt-4 lg:mt-6 lg:pt-6 border-t border-[#dde2dd]',
          'flex items-center justify-between',
          'group',
          'hover:border-[#c3b7c3] transition-colors duration-300'
        )}>
          <span className={cn(
            'text-xs font-semibold uppercase tracking-widest',
            'text-dark/60',
            'group-hover:text-[#c3b7c3] transition-colors'
          )}>
            {slug ? t('projectCard.viewProject') : externalUrl ? t('projectCard.viewOnline') : t('projectCard.comingSoon')}
          </span>
          <svg className={cn(
            'w-4 h-4',
            'text-dark/40',
            'group-hover:text-[#c3b7c3] transition-colors',
            'group-hover:translate-x-1'
          )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </article>
  );

  // When both links exist, prioritize case study (internal link)
  if (hasDualLinks && isLink) {
    return (
      <Link
        to={`/proyectos/${slug}`}
        className="group hover:no-underline"
      >
        {cardContent}
      </Link>
    );
  }

  // Render as router link for case studies
  if (isLink && slug) {
    return (
      <Link
        to={`/proyectos/${slug}`}
        className="group hover:no-underline"
      >
        {cardContent}
      </Link>
    );
  }

  // Render as external link for projects
  if (isLink && externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:no-underline"
      >
        {cardContent}
      </a>
    );
  }

  // Render as static div for WIP
  return <div>{cardContent}</div>;
}

export default ProjectCard;
