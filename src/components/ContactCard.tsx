import React from 'react';
import { cn } from '../utils/classNames';

type ContactCardProps = {
  href: string;
  title: string;
  icon: React.ReactNode;
  ariaLabel: string;
  isExternal?: boolean;
};

function ContactCard({ href, title, icon, ariaLabel, isExternal = false }: ContactCardProps) {
  const externalProps = isExternal ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  // Clone the icon element if it's a valid React element to apply sizing
  const iconWithSize = React.isValidElement(icon)
    ? React.cloneElement(icon, {
        ...icon.props,
        className: 'w-9 h-9 overflow-visible'
      })
    : icon;

  return (
    <a
      href={href}
      className={cn(
        'w-full min-h-[120px] px-3 py-4',
        'rounded-2xl border border-[#dbe3db]',
        'bg-[#ffffff66] shadow-[0_8px_24px_rgba(48,46,46,0.08)]',
        'flex flex-col items-center justify-center gap-3',
        'text-dark transition-all duration-200',
        'hover:bg-[#e8eee8] hover:shadow-[0_10px_28px_rgba(48,46,46,0.12)]'
      )}
      aria-label={ariaLabel}
      title={title}
      {...externalProps}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        {iconWithSize}
      </div>
      <span className="text-sm font-medium tracking-wide">{title}</span>
    </a>
  );
}

export default ContactCard;
