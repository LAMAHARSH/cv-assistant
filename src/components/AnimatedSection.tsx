
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  animationType?: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right';
  delay?: 'delay-100' | 'delay-200' | 'delay-300' | 'delay-400' | 'delay-500';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className,
  animationType = 'fade-in-up',
  delay,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`animate-${animationType}`);
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationType]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn('opacity-0', className, delay)}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
