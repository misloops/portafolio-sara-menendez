type IconProps = {
  className?: string;
};

export function CVIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.8 3.2l1.8 1.8" />
    </svg>
  );
}
