import React from 'react';
import { cn } from '../utils/classNames';

type ContactCardProps = {
  href: string;
  title: string;
  icon: React.ReactNode;
  ariaLabel: string;
  isExternal?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

function ContactCard({ href, title, icon, ariaLabel, isExternal = false, size = 'md' }: ContactCardProps) {
  const externalProps = isExternal ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  const wrapperSizeClasses: Record<string, string> = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  const iconSizeClasses: Record<string, string> = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const gapClasses: Record<string, string> = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4'
  };

  const textSizeClasses: Record<string, string> = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  // Clone the icon element if it's a valid React element to apply sizing
  const iconWithSize = React.isValidElement(icon)
    ? React.cloneElement(icon, {
        ...icon.props,
        className: `${icon.props.className || ''} ${iconSizeClasses[size]} overflow-visible`.trim()
      })
    : icon;

  return (
    <a
      href={href}
      className={cn(
        'w-full min-h-[120px] px-3 py-4',
        'rounded-2xl border border-[#dbe3db]',
        'bg-[#ffffff66] shadow-[0_8px_24px_rgba(48,46,46,0.08)]',
        `flex flex-col items-center justify-center ${gapClasses[size]}`,
        'text-dark transition-all duration-200',
        'hover:bg-[#e8eee8] hover:shadow-[0_10px_28px_rgba(48,46,46,0.12)]'
      )}
      aria-label={ariaLabel}
      title={title}
      {...externalProps}
    >
      <div className={`${wrapperSizeClasses[size]} flex items-center justify-center`}>
        {iconWithSize}
      </div>
      <span className={`${textSizeClasses[size]} font-medium tracking-wide`}>{title}</span>
    </a>
  );
}

export default ContactCard;
