'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutSection() {
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: 'var(--primary)' }}
        >
          WHO WE ARE
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground)' }}>
              Nexa Facilities Group delivers professional maintenance services for commercial stores across multiple states in the U.S., with a strong focus on HVAC/R systems. With over 30 years of international experience, our team brings unmatched knowledge and expertise to every project, ensuring your facilities remain efficient, reliable, and fully operational.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground)' }}>
              Our skilled professionals handle every aspect of system care, servicing, and repairs, supported by extensive experience in troubleshooting and project implementation. This allows us to deliver dependable solutions that keep your business running without disruption.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground)' }}>
              When you partner with Nexa Facilities Group, you gain more than a service provider—you gain a trusted partner backed by decades of proven expertise, committed to keeping your commercial spaces safe, comfortable, and performing at their best.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
            <Image
              src="/hero-image.png"
              alt="HVAC Technician at Work"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}