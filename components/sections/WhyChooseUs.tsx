'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon';

interface FeatureProps {
  title: string;
  description: string;
}

function Feature({ title, description }: FeatureProps) {
  return (
    <div className="flex items-start group">
      <div className="flex-shrink-0 mr-4">
        <Icon
          name="check"
          size={32}
          className="transition-transform group-hover:scale-110"
          style={{ color: 'var(--success)' }}
        />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const features = [
    {
      title: 'Expert Maintenance Team',
      description: 'Our skilled technicians specialize in HVAC/R systems, providing reliable maintenance and repairs.'
    },
    {
      title: 'Multi-State Experience',
      description: 'We manage operations across multiple states, delivering consistent, professional service.'
    },
    {
      title: 'Efficient & Reliable',
      description: 'We focus on keeping your systems running smoothly, minimizing downtime and disruptions.'
    },
    {
      title: 'Project Expertise',
      description: 'From system servicing to project support, we handle complex maintenance challenges with precision.'
    },
    {
      title: 'Customer-Centered',
      description: 'Your business operations are our priority; we deliver maintenance solutions tailored to your needs.'
    },
    {
      title: 'Fast Response Time',
      description: 'Quick response to service requests ensures minimal disruption to your business operations.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-20 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: 'var(--primary)' }}
        >
          WHY CHOOSE NEXA
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}