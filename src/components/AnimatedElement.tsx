
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [once, threshold]);

  return (
    <div
      ref={elementRef}
      className={cn(
        isVisible ? `animate-${animation}` : 'opacity-0',
        className
      )}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
