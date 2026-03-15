import { cn } from '../../utils/classNames';

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  variant?: 'light' | 'white';
}

export function CaseStudySection({ 
  title, 
  children, 
  variant = 'white' 
}: CaseStudySectionProps) {
  const bgClass = variant === 'light' ? 'bg-[#ffffff40]' : 'bg-transparent';
  
  return (
    <section className={cn(
      'py-20 lg:py-28',
      'px-6 md:px-12 lg:px-16',
      bgClass
    )}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
