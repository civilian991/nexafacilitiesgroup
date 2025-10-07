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
              Nexa Facilities Group provides expert maintenance services for commercial stores
              across multiple states in the U.S., specializing in HVAC/R systems. Our skilled
              team handles all aspects of system maintenance and repairs, ensuring your
              facilities remain fully operational and efficient.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground)' }}>
              We bring extensive experience in project implementation, system servicing, and
              troubleshooting, delivering reliable solutions that keep your business running
              without interruptions.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground)' }}>
              With Nexa Facilities Group, you can trust that your commercial spaces are in the
              hands of experts committed to keeping your operations smooth, safe, and fully
              functional.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80"
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