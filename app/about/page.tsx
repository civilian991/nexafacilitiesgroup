'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import CTA from '@/components/sections/CTA';

export default function AboutPage() {
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

  const stats = [
    { value: '24/7', label: 'Emergency Service', description: 'Round-the-clock support when you need it' },
    { value: '99%', label: 'Uptime Rate', description: 'System reliability across all clients' },
    { value: '30+', label: 'Years Experience', description: 'International expertise in HVAC/R systems' },
    { value: '100%', label: 'Customer Satisfaction', description: 'Dedicated to reliable service delivery' }
  ];

  const values = [
    {
      icon: 'shield-check',
      title: 'Reliability',
      description: 'We show up on time, every time, and deliver consistent service you can count on. Your operations depend on us, and we take that responsibility seriously.',
      color: 'var(--color-primary)'
    },
    {
      icon: 'award',
      title: 'Expertise',
      description: 'Our technicians bring years of specialized experience in HVAC/R systems, ensuring professional-grade service for even the most complex challenges.',
      color: 'var(--color-secondary)'
    },
    {
      icon: 'zap',
      title: 'Speed',
      description: 'Fast response times minimize downtime and keep your business running. We understand that every minute counts in commercial operations.',
      color: 'var(--color-accent)'
    },
    {
      icon: 'handshake',
      title: 'Integrity',
      description: 'Honest assessments, transparent pricing, and straightforward communication build the trust that lasting partnerships require.',
      color: 'var(--color-success)'
    },
    {
      icon: 'target',
      title: 'Quality',
      description: 'Every job meets our high standards, from routine maintenance to emergency repairs. Quality work is the foundation of reliable systems.',
      color: 'var(--color-hvac)'
    },
    {
      icon: 'users',
      title: 'Customer Focus',
      description: 'Your business needs come first. We customize our services to fit your operations, schedules, and specific maintenance requirements.',
      color: 'var(--color-refrigeration)'
    }
  ];

  const approach = {
    left: [
      { title: 'Proactive Maintenance', description: "We don't wait for systems to fail. Regular inspections and preventive maintenance catch issues early, saving you time and money." },
      { title: 'Expert Diagnosis', description: 'Our technicians quickly identify root causes, not just symptoms. This ensures repairs are done right the first time.' },
      { title: 'Quality Parts & Tools', description: 'We use high-quality components and professional-grade equipment to ensure lasting repairs and reliable performance.' },
      { title: 'Clear Communication', description: "You'll always know what we're doing, why we're doing it, and what it costs. No surprises, no hidden fees." }
    ],
    right: [
      { title: 'Minimal Disruption', description: 'We work efficiently and respect your business operations, scheduling service to minimize impact on your daily activities.' },
      { title: 'Comprehensive Documentation', description: 'Detailed service reports keep you informed and create a maintenance history that helps with future planning.' },
      { title: 'Ongoing Support', description: "Our relationship doesn't end when the job is done. We provide follow-up support and answer any questions you have." },
      { title: 'Continuous Improvement', description: 'We stay current with industry best practices and new technologies to provide you with the most effective solutions.' }
    ]
  };

  const whyChooseUs = [
    { title: 'Multi-State Coverage', description: 'One reliable partner for all your locations, no matter where they are.' },
    { title: 'Experienced Technicians', description: 'Certified professionals with extensive HVAC/R expertise.' },
    { title: 'Fast Response Times', description: 'We minimize downtime with quick emergency response.' },
    { title: 'Transparent Pricing', description: 'No hidden fees or surprise charges—just honest service.' },
    { title: 'Proven Track Record', description: 'Trusted by commercial facilities for consistent, reliable maintenance.' },
    { title: 'Customized Solutions', description: 'Service plans tailored to your specific business needs.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white pt-32 pb-20"
        style={{ background: 'linear-gradient(135deg, oklch(0.35 0.18 250), oklch(0.42 0.16 240))' }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            ABOUT NEXA
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fadeInUp animate-delay-200">
            Your trusted partner in commercial HVAC/R services
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">WHO WE ARE</h2>
              <p className="text-lg leading-relaxed text-foreground">
                With over 30 years of international experience, Nexa Facilities Group brings expert HVAC/R solutions to commercial stores across multiple states in the U.S. Our team specializes in system maintenance, repairs, and installation, providing businesses with reliable services that keep their facilities safe, efficient, and fully operational.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                We have extensive experience in troubleshooting, servicing, and project management, handling systems of all sizes—from simple split units to large-scale commercial rooftop units. Our global experience allows us to apply best practices and proven solutions to every project we undertake.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                At Nexa Facilities Group, we are more than just a service provider—we are a trusted partner, committed to keeping commercial spaces comfortable, functional, and running smoothly, so our clients can focus on growing their business.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about-image.png"
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

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">NEXA BY THE NUMBERS</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-black mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">OUR CORE VALUES</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-8 bg-card border-l-4 border-border rounded-lg transition-all duration-300 hover:translate-x-2 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  borderLeftColor: value.color
                }}
              >
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg"
                  style={{ background: value.color, color: 'white' }}
                >
                  <Icon name={value.icon} size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">OUR APPROACH</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional service every time</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {approach.left.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {approach.right.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nexa */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">WHY BUSINESSES CHOOSE NEXA</h2>
            <p className="text-xl text-gray-600">The advantages of partnering with us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:shadow-md transition-all"
              >
                <Icon name="check" size={24} className="text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}