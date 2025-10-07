'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
  color: string;
  isVisible: boolean;
}

function StatItem({ icon, value, label, color, isVisible }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);

      // Parse the target value
      const isPercentage = value.includes('%');
      const isPlus = value.includes('+');
      const isSlash = value.includes('/');

      if (isSlash) {
        // For 24/7, just display it directly
        setDisplayValue(value);
        return;
      }

      const target = parseInt(value.replace(/[^0-9]/g, ''));
      if (isNaN(target)) {
        setDisplayValue(value);
        return;
      }

      let current = 0;
      const increment = target / 50;
      const duration = 30;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
          if (isPlus) {
            setDisplayValue(target + '+');
          } else if (isPercentage) {
            setDisplayValue(target + '%');
          } else {
            setDisplayValue(String(target));
          }
        } else {
          setDisplayValue(String(Math.floor(current)));
        }
      }, duration);

      return () => clearInterval(timer);
    } else if (!isVisible && !hasAnimated) {
      // Before animation, show the value directly
      setDisplayValue(value);
    }
  }, [isVisible, value, hasAnimated]);

  return (
    <div className="text-center">
      <div
        className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-lg transition-transform hover:rotate-[-5deg]"
        style={{ background: color, color: 'white' }}
      >
        <Icon name={icon} size={32} />
      </div>
      <div
        className="text-5xl font-bold mb-2"
        style={{ color: 'var(--primary)' }}
      >
        {displayValue}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: 'building',
      value: '10+',
      label: 'States Covered',
      color: 'var(--primary)'
    },
    {
      icon: 'wrench',
      value: '500+',
      label: 'Stores Serviced',
      color: 'var(--secondary)'
    },
    {
      icon: 'clock',
      value: '24/7',
      label: 'Emergency Service',
      color: 'var(--accent)'
    },
    {
      icon: 'shield',
      value: '99%',
      label: 'Uptime Rate',
      color: 'var(--success)'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-gray-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StatItem {...stat} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}