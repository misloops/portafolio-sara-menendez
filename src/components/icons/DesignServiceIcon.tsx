type IconProps = {
  className?: string;
};

export function DesignServiceIcon({ className = 'w-8 h-8 text-primary-400 stroke-current' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .267M7 21H5m12 0h2m0-12V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12" />
    </svg>
  );
}
