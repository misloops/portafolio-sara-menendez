type IconProps = {
  className?: string;
};

export function OptimizationServiceIcon({ className = 'w-8 h-8 text-primary-400 stroke-current' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
