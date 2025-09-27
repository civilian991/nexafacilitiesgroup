'use client'

import { useState } from 'react'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'hvac' | 'refrigeration' | 'troubleshooting' | 'project'>('hvac')

  const services = {
    hvac: {
      title: 'HVAC System Maintenance & Repairs',
      description: 'Keep heating, cooling, and ventilation systems running efficiently',
      icon: '🔧',
      gradient: 'from-blue-500 to-purple-600',
      details: [
        {
          name: 'Preventive Maintenance',
          description: 'Regular inspections and tune-ups to prevent breakdowns and extend equipment life',
          features: ['Quarterly inspections', 'Filter replacements', 'Performance optimization', 'Energy audits']
        },
        {
          name: 'Emergency Repairs',
          description: '24/7 emergency response for critical HVAC failures',
          features: ['Rapid response', 'Expert diagnostics', 'Temporary solutions', 'Permanent fixes']
        },
        {
          name: 'System Upgrades',
          description: 'Modernize your HVAC systems for improved efficiency',
          features: ['Equipment replacement', 'Control system updates', 'Smart thermostat integration', 'Zoning solutions']
        }
      ]
    },
    refrigeration: {
      title: 'Refrigeration Maintenance',
      description: 'Ensure commercial refrigeration units operate reliably and safely',
      icon: '❄️',
      gradient: 'from-cyan-500 to-blue-600',
      details: [
        {
          name: 'Walk-in Coolers & Freezers',
          description: 'Complete maintenance for commercial cold storage units',
          features: ['Temperature monitoring', 'Seal inspections', 'Compressor maintenance', 'Defrost system checks']
        },
        {
          name: 'Display Cases',
          description: 'Service for retail refrigeration display units',
          features: ['Glass door maintenance', 'LED lighting upgrades', 'Temperature calibration', 'Energy optimization']
        },
        {
          name: 'Ice Machines',
          description: 'Keep your ice production running smoothly',
          features: ['Cleaning & sanitization', 'Water filter changes', 'Production optimization', 'Compliance checks']
        }
      ]
    },
    troubleshooting: {
      title: 'System Troubleshooting & Repairs',
      description: 'Quick identification and resolution of any operational issues',
      icon: '🔍',
      gradient: 'from-purple-500 to-pink-600',
      details: [
        {
          name: 'Performance Analysis',
          description: 'Comprehensive system performance evaluation',
          features: ['Efficiency testing', 'Airflow measurements', 'Pressure diagnostics', 'Electrical analysis']
        },
        {
          name: 'Fault Detection',
          description: 'Advanced diagnostic tools to identify problems',
          features: ['Thermal imaging', 'Refrigerant leak detection', 'Vibration analysis', 'Control system diagnostics']
        },
        {
          name: 'Root Cause Analysis',
          description: 'Identify underlying issues to prevent recurring problems',
          features: ['Historical data review', 'Component testing', 'System optimization', 'Preventive recommendations']
        }
      ]
    },
    project: {
      title: 'Project Support & Implementation',
      description: 'Professional assistance in maintaining and managing HVAC/R projects',
      icon: '📊',
      gradient: 'from-green-500 to-teal-600',
      details: [
        {
          name: 'Project Planning',
          description: 'Strategic planning for maintenance projects across locations',
          features: ['Timeline development', 'Resource allocation', 'Budget planning', 'Risk assessment']
        },
        {
          name: 'Implementation Support',
          description: 'Expert guidance through complex projects',
          features: ['Technical expertise', 'Vendor coordination', 'Quality assurance', 'Progress monitoring']
        },
        {
          name: 'Multi-Site Coordination',
          description: 'Seamless project execution across multiple facilities',
          features: ['Centralized management', 'Standardized processes', 'Regional coordination', 'Consolidated reporting']
        }
      ]
    }
  }

  return (
    <>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">Comprehensive HVAC/R Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black">
              <span className="block text-white mb-2">Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">
                Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              At Nexa Facilities Group, we provide comprehensive maintenance solutions
              for commercial stores, specializing in HVAC/R systems.
            </p>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as 'hvac' | 'refrigeration' | 'troubleshooting' | 'project')}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  activeTab === key
                    ? 'text-white'
                    : 'glass-card text-gray-300 hover:text-white'
                }`}
              >
                {activeTab === key && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl`}></div>
                )}
                <span className="relative flex items-center space-x-2">
                  <span className="text-2xl">{service.icon}</span>
                  <span>{service.title.split(' ')[0]}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="glass-card rounded-3xl p-8">
            <div className="text-center mb-12">
              <span className="text-6xl mb-6 block">{services[activeTab].icon}</span>
              <h2 className="text-4xl font-black text-white mb-4">
                {services[activeTab].title}
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {services[activeTab].description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services[activeTab].details.map((detail, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${services[activeTab].gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative glass-card p-6 rounded-2xl h-full">
                    <h3 className="text-xl font-bold text-white mb-3">{detail.name}</h3>
                    <p className="text-gray-400 mb-4">{detail.description}</p>
                    <ul className="space-y-2">
                      {detail.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-4">
            Our Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Process</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We follow a proven methodology to ensure consistent, high-quality service delivery
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Initial Assessment', description: 'We evaluate your facility needs and identify issues', icon: '📋' },
              { step: '2', title: 'Custom Plan', description: 'Develop a tailored maintenance strategy for your systems', icon: '📈' },
              { step: '3', title: 'Expert Execution', description: 'Our certified technicians perform the required services', icon: '🔨' },
              { step: '4', title: 'Ongoing Support', description: 'Regular monitoring and maintenance to prevent issues', icon: '🛡️' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-4xl font-black text-white mb-8 text-center">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Our Services</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Fast Response Times',
                  description: 'Less than 15-minute average response for emergency calls',
                  icon: '⚡'
                },
                {
                  title: 'Certified Technicians',
                  description: 'EPA and NATE certified professionals with ongoing training',
                  icon: '🎓'
                },
                {
                  title: 'Multi-State Coverage',
                  description: 'Consistent service quality across all your locations',
                  icon: '🗺️'
                },
                {
                  title: '24/7 Availability',
                  description: 'Round-the-clock emergency support when you need it most',
                  icon: '🕐'
                },
                {
                  title: 'Preventive Focus',
                  description: 'Proactive maintenance to prevent costly breakdowns',
                  icon: '🛡️'
                },
                {
                  title: 'Energy Optimization',
                  description: 'Reduce energy costs by up to 30% with our efficiency programs',
                  icon: '🌱'
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-white mb-12">
            Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Coverage</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { state: 'Northeast Region', cities: ['New York', 'Boston', 'Philadelphia', 'Newark'] },
              { state: 'Southeast Region', cities: ['Atlanta', 'Miami', 'Orlando', 'Charlotte'] },
              { state: 'Central Region', cities: ['Chicago', 'Dallas', 'Houston', 'Denver'] }
            ].map((region, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">{region.state}</h3>
                <ul className="space-y-2">
                  {region.cities.map((city, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 mt-8">
            And many more locations across 15+ states. Contact us to confirm service in your area.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative glass-card p-12 md:p-16 rounded-3xl text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let us handle your facility maintenance needs with professionalism and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg transform hover:scale-105 transition-all">
                  <span className="relative z-10">Request Service</span>
                </button>
                <button className="px-8 py-4 rounded-2xl border-2 border-gray-600 text-white font-bold text-lg hover:bg-white/10 hover:border-gray-400 transition-all">
                  Get Free Quote
                </button>
              </div>
              <p className="mt-8 text-sm text-gray-400">
                24/7 Emergency Service • Multi-State Coverage • Free Consultation
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}