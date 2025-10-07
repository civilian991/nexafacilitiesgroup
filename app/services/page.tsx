'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import CTA from '@/components/sections/CTA';

interface ServiceDetail {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export default function ServicesPage() {
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

  const services: ServiceDetail[] = [
    {
      icon: 'wind',
      title: 'HVAC System Maintenance',
      description: 'Complete heating, cooling, and ventilation system care to ensure optimal climate control year-round.',
      features: [
        'Regular maintenance inspections',
        'Filter replacements & cleaning',
        'System efficiency optimization',
        'Emergency repairs'
      ],
      color: 'var(--color-hvac)'
    },
    {
      icon: 'snowflake',
      title: 'Refrigeration Maintenance',
      description: 'Professional servicing of commercial refrigeration units to protect your inventory and maintain food safety.',
      features: [
        'Walk-in cooler maintenance',
        'Display case servicing',
        'Temperature monitoring',
        'Leak detection & repair'
      ],
      color: 'var(--color-refrigeration)'
    },
    {
      icon: 'zap',
      title: 'Emergency Troubleshooting',
      description: 'Fast response to critical system failures with expert diagnosis and immediate resolution.',
      features: [
        '24/7 emergency response',
        'Rapid diagnostic services',
        'Critical system repairs',
        'Downtime minimization'
      ],
      color: 'var(--color-emergency)'
    },
    {
      icon: 'briefcase',
      title: 'Project Implementation',
      description: 'End-to-end project management for HVAC/R installations and major system upgrades.',
      features: [
        'System design & planning',
        'Installation coordination',
        'Quality assurance testing',
        'Post-installation support'
      ],
      color: 'var(--color-project)'
    },
    {
      icon: 'pin',
      title: 'Multi-Location Support',
      description: 'Consistent, reliable service across all your commercial locations in multiple states.',
      features: [
        'Centralized service coordination',
        'Standardized maintenance protocols',
        'Regional technician networks',
        'Comprehensive reporting'
      ],
      color: 'var(--color-primary)'
    },
    {
      icon: 'settings',
      title: 'Preventive Maintenance',
      description: 'Proactive maintenance programs to prevent costly breakdowns and extend equipment life.',
      features: [
        'Scheduled maintenance visits',
        'Equipment performance monitoring',
        'Parts replacement planning',
        'Detailed maintenance logs'
      ],
      color: 'var(--color-accent)'
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Contact Us',
      description: 'Reach out via phone, email, or our website with your service needs.',
      color: 'var(--color-primary)'
    },
    {
      number: 2,
      title: 'Assessment',
      description: 'Our technicians evaluate your systems and provide detailed recommendations.',
      color: 'var(--color-secondary)'
    },
    {
      number: 3,
      title: 'Service Delivery',
      description: 'Expert maintenance performed efficiently with minimal disruption.',
      color: 'var(--color-accent)'
    },
    {
      number: 4,
      title: 'Follow-Up',
      description: 'Complete documentation and ongoing support to ensure satisfaction.',
      color: 'var(--color-success)'
    }
  ];

  const industries = [
    {
      icon: 'shopping-cart',
      title: 'Retail Stores',
      description: 'Keep your retail environment comfortable for customers and staff year-round.'
    },
    {
      icon: 'utensils',
      title: 'Restaurants',
      description: 'Critical refrigeration and climate control for food service operations.'
    },
    {
      icon: 'building-2',
      title: 'Supermarkets',
      description: 'Comprehensive HVAC/R maintenance for grocery and food retail locations.'
    },
    {
      icon: 'warehouse',
      title: 'Warehouses',
      description: 'Large-scale climate control and refrigeration for storage facilities.'
    },
    {
      icon: 'hotel',
      title: 'Hospitality',
      description: 'Maintain guest comfort with reliable HVAC systems for hotels and venues.'
    },
    {
      icon: 'briefcase',
      title: 'Commercial Offices',
      description: 'Professional climate control solutions for productive work environments.'
    }
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
            COMPREHENSIVE MAINTENANCE<br />SERVICES
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fadeInUp animate-delay-200">
            Professional HVAC/R solutions designed to keep your commercial facilities<br />
            running at peak performance 24/7/365
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">OUR CORE SERVICES</h2>
            <p className="text-xl text-gray-600">Expert maintenance solutions for every commercial need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-lg transition-transform group-hover:scale-110 group-hover:rotate-[-5deg]"
                  style={{ background: service.color, color: 'white' }}
                >
                  <Icon name={service.icon} size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-foreground">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Icon name="check" size={20} className="mr-2 flex-shrink-0 text-success mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all hover:scale-105"
                  >
                    Request Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">OUR SERVICE PROCESS</h2>
            <p className="text-xl text-gray-600">Simple, efficient, and transparent from start to finish</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-lg"
                  style={{ background: step.color, color: 'white' }}
                >
                  <span className="text-3xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">INDUSTRIES WE SERVE</h2>
            <p className="text-xl text-gray-600">Specialized maintenance solutions for diverse commercial sectors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Icon name={industry.icon} size={32} className="mr-3 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{industry.title}</h3>
                </div>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}