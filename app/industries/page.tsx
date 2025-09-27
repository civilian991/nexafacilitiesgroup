'use client'

import { useState } from 'react'

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(0)

  const industries = [
    {
      name: 'Retail & Commercial Stores',
      icon: '🏪',
      gradient: 'from-blue-500 to-purple-600',
      description: 'Comprehensive maintenance for retail chains and commercial stores across multiple locations',
      services: ['HVAC system maintenance', 'Refrigeration for perishables', 'Emergency repairs', 'Energy optimization'],
      benefits: ['Minimize customer disruption', 'Protect inventory', 'Reduce energy costs', 'Maintain comfort levels'],
      stats: { locations: '500+', uptime: '99.9%', savings: '25%' }
    },
    {
      name: 'Healthcare Facilities',
      icon: '🏥',
      gradient: 'from-cyan-500 to-blue-600',
      description: 'Specialized services for hospitals, clinics, and medical facilities requiring critical environment control',
      services: ['Critical environment control', 'Air quality management', 'Compliance maintenance', 'Redundant system support'],
      benefits: ['Ensure patient safety', 'Meet regulatory standards', 'Prevent contamination', 'Maintain sterile environments'],
      stats: { compliance: '100%', response: '< 15 min', reliability: '99.99%' }
    },
    {
      name: 'Educational Institutions',
      icon: '🎓',
      gradient: 'from-purple-500 to-pink-600',
      description: 'Reliable maintenance for schools, universities, and training centers ensuring optimal learning environments',
      services: ['Classroom climate control', 'Laboratory ventilation', 'Cafeteria refrigeration', 'Seasonal maintenance'],
      benefits: ['Optimize learning environment', 'Ensure student comfort', 'Reduce operational costs', 'Extend equipment life'],
      stats: { campuses: '100+', savings: '$500K/yr', efficiency: '+40%' }
    },
    {
      name: 'Food Service & Restaurants',
      icon: '🍔',
      gradient: 'from-orange-500 to-red-600',
      description: 'Critical refrigeration and HVAC services for restaurants and food service establishments',
      services: ['Walk-in cooler maintenance', 'Kitchen ventilation', 'Ice machine service', 'Grease trap compliance'],
      benefits: ['Protect food inventory', 'Ensure health compliance', 'Minimize downtime', 'Maintain customer comfort'],
      stats: { chains: '200+', response: '24/7', loss: '< 0.1%' }
    },
    {
      name: 'Grocery & Supermarkets',
      icon: '🛒',
      gradient: 'from-green-500 to-teal-600',
      description: 'Specialized refrigeration and HVAC solutions for grocery stores and supermarket chains',
      services: ['Display case maintenance', 'Cold storage systems', 'HVAC optimization', 'Energy management'],
      benefits: ['Preserve product quality', 'Reduce energy consumption', 'Prevent inventory loss', 'Ensure shopper comfort'],
      stats: { stores: '300+', energy: '-30%', uptime: '99.8%' }
    },
    {
      name: 'Office Buildings',
      icon: '🏢',
      gradient: 'from-indigo-500 to-purple-600',
      description: 'Professional maintenance for corporate and commercial office buildings',
      services: ['Tenant comfort systems', 'Building automation', 'Indoor air quality', 'Energy management'],
      benefits: ['Improve employee productivity', 'Reduce tenant complaints', 'Lower operating costs', 'Increase property value'],
      stats: { buildings: '150+', satisfaction: '+40%', costs: '-35%' }
    }
  ]

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
              <span className="text-sm font-medium text-gray-300">Serving Multiple Industries</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black">
              <span className="block text-white mb-2">Industries</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">
                We Serve
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Specialized HVAC/R maintenance solutions tailored to meet the unique
              demands of your industry and facility type.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Selector */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Industry Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`group relative p-4 rounded-xl transition-all transform hover:scale-105 ${
                  activeIndustry === index
                    ? 'scale-105'
                    : 'glass-card hover:bg-white/10'
                }`}
              >
                {activeIndustry === index && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} rounded-xl`}></div>
                )}
                <div className="relative text-center">
                  <div className="text-4xl mb-2">{industry.icon}</div>
                  <div className={`text-sm font-semibold ${
                    activeIndustry === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {industry.name.split(' ')[0]}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Industry Details */}
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-6xl">{industries[activeIndustry].icon}</span>
                  <h2 className="text-4xl font-black text-white">
                    {industries[activeIndustry].name}
                  </h2>
                </div>

                <p className="text-lg text-gray-400">
                  {industries[activeIndustry].description}
                </p>

                {/* Services List */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">Our Services Include:</h3>
                  {industries[activeIndustry].services.map((service, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>

                <button className="group relative px-8 py-3 overflow-hidden rounded-xl">
                  <div className={`absolute inset-0 bg-gradient-to-r ${industries[activeIndustry].gradient}`}></div>
                  <span className="relative text-white font-semibold">Learn More</span>
                </button>
              </div>

              {/* Right Content - Stats & Benefits */}
              <div className="space-y-6">
                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(industries[activeIndustry].stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-4 rounded-xl bg-white/5">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase mt-1">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Key Benefits */}
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    {industries[activeIndustry].benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${industries[activeIndustry].gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-white mb-4">
            Our Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            With over 15 years of experience, we understand the unique challenges and requirements of each industry we serve.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { number: '1,500+', label: 'Commercial Locations Serviced', icon: '📍' },
              { number: '15+', label: 'Years of Industry Experience', icon: '📅' },
              { number: '50+', label: 'Expert Technicians', icon: '👷' },
              { number: '99.9%', label: 'Average System Uptime', icon: '⚡' },
              { number: '24/7', label: 'Emergency Response', icon: '🚨' },
              { number: '30%', label: 'Average Energy Savings', icon: '🌱' }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl text-center group hover:bg-white/10 transition-all">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-white mb-12">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Stories</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Major Retail Chain',
                result: '25% Energy Cost Reduction',
                description: 'Implemented predictive maintenance program across 200+ stores',
                icon: '🏪'
              },
              {
                title: 'Healthcare Network',
                result: '99.99% Critical System Uptime',
                description: 'Maintained zero downtime for operating room HVAC systems',
                icon: '🏥'
              },
              {
                title: 'University Campus',
                result: '$500K Annual Savings',
                description: 'Optimized HVAC operations across 50+ campus buildings',
                icon: '🎓'
              }
            ].map((study, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative glass-card p-6 rounded-2xl h-full">
                  <div className="text-4xl mb-4">{study.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <div className="text-cyan-400 font-semibold mb-3">{study.result}</div>
                  <p className="text-gray-400">{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative glass-card p-12 md:p-16 rounded-3xl text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Let's Discuss Your Facility Needs
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our industry experts are ready to develop a customized maintenance solution for your facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg transform hover:scale-105 transition-all">
                  <span className="relative z-10">Get Industry-Specific Quote</span>
                </button>
                <button className="px-8 py-4 rounded-2xl border-2 border-gray-600 text-white font-bold text-lg hover:bg-white/10 hover:border-gray-400 transition-all">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}