type IconProps = {
  className?: string;
};

export function LinkedInIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10v7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7.5h.01" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-4a2 2 0 0 1 4 0v4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v-3" />
    </svg>
  );
}
