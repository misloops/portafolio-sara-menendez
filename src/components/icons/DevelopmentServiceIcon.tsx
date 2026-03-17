type IconProps = {
  className?: string;
};

export function DevelopmentServiceIcon({ className = 'w-8 h-8 text-primary-400 stroke-current' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 6l-4 4m-4-4l-4-4" />
    </svg>
  );
}
