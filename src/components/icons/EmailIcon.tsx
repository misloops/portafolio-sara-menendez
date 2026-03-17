type IconProps = {
  className?: string;
};

export function EmailIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7" />
    </svg>
  );
}
