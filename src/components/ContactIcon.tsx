import { cn } from '../utils/classNames';
import React from 'react';

type ContactIconProps = {
  href: string;
  title: string;
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  isExternal?: boolean;
};

function ContactIcon({
  href,
  title,
  icon,
  size = 'md',
  isExternal = false
}: ContactIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-14 h-14'
  };

  const iconSizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-8 h-8'
  };

  const externalProps = isExternal ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  // Clone the icon element if it's a valid React element and add className
  const iconWithSize = React.isValidElement(icon)
    ? React.cloneElement(icon, {
        ...icon.props,
        className: icon.props.className || iconSizeClasses[size]
      })
    : icon;

  return (
    <a
      href={href}
      className={cn(
        sizeClasses[size],
        'flex items-center justify-center text-dark',
        'transition-all duration-200 hover:bg-[#e3e8e3] rounded-full',
        'overflow-visible'
      )}
      title={title}
      {...externalProps}
    >
      {iconWithSize}
    </a>
  );
}

export default ContactIcon;
