'use client'

import { useState } from 'react'

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0)

  const values = [
    {
      title: 'Reliability',
      description: 'We deliver consistent, dependable service you can count on, 24/7',
      icon: '🛡️',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Expertise',
      description: 'Our technicians are certified professionals with years of experience',
      icon: '⚙️',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Efficiency',
      description: 'Fast response times and streamlined maintenance processes',
      icon: '⚡',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team, invested in your success',
      icon: '🤝',
      gradient: 'from-green-500 to-teal-600'
    }
  ]

  const milestones = [
    { year: '2010', event: 'Company Founded', description: 'Started with a vision to revolutionize facility maintenance', icon: '🚀' },
    { year: '2013', event: 'Multi-State Expansion', description: 'Extended operations across 5 states', icon: '📍' },
    { year: '2016', event: '500+ Clients', description: 'Reached milestone of serving 500 commercial clients', icon: '🎯' },
    { year: '2019', event: 'Technology Integration', description: 'Launched IoT-based monitoring systems', icon: '💻' },
    { year: '2023', event: 'Industry Leader', description: 'Recognized as top HVAC/R service provider', icon: '🏆' },
    { year: '2025', event: 'Continuous Growth', description: 'Expanding services and reaching new markets', icon: '📈' }
  ]

  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: '📅' },
    { number: '1,500+', label: 'Happy Clients', icon: '😊' },
    { number: '50+', label: 'Expert Technicians', icon: '👷' },
    { number: '15+', label: 'States Covered', icon: '🗺️' },
    { number: '24/7', label: 'Emergency Support', icon: '🚨' },
    { number: '99.9%', label: 'Uptime Rate', icon: '⚡' }
  ]

  const team = [
    { role: 'HVAC Technicians', count: '25+', icon: '🔧' },
    { role: 'Refrigeration Specialists', count: '15+', icon: '❄️' },
    { role: 'Project Managers', count: '8', icon: '📋' },
    { role: 'Support Staff', count: '12', icon: '💼' }
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
              <span className="text-sm font-medium text-gray-300">Expert HVAC/R Services Since 2010</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black">
              <span className="block text-white mb-2">Who</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">
                We Are
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Your trusted partner in commercial facility maintenance, delivering excellence
              across multiple states with expertise, innovation, and unwavering commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-lg">
                <p>
                  Nexa Facilities Group provides expert maintenance services for commercial stores
                  across multiple states in the U.S., specializing in HVAC/R systems. Our skilled
                  team handles all aspects of system maintenance and repairs, ensuring your
                  facilities remain fully operational and efficient.
                </p>
                <p>
                  We bring extensive experience in project implementation, system servicing, and
                  troubleshooting, delivering reliable solutions that keep your business running
                  without interruptions. No matter the size of the store or the complexity of the
                  system, we provide fast, professional, and dependable maintenance services.
                </p>
                <p>
                  With Nexa Facilities Group, you can trust that your commercial spaces are in the
                  hands of experts committed to keeping your operations smooth, safe, and fully
                  functional.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl text-center group hover:bg-white/10 transition-all">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative glass-card p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400">
                  To provide exceptional facility maintenance services that ensure optimal performance,
                  energy efficiency, and reliability for commercial properties across the nation. We
                  strive to be the trusted partner that businesses rely on for all their HVAC/R needs,
                  delivering solutions that minimize downtime and maximize operational efficiency.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative glass-card p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400">
                  To be the leading facilities management company in America, recognized for our
                  innovation, reliability, and commitment to excellence. We envision a future where
                  every commercial facility operates at peak efficiency through smart maintenance
                  solutions, sustainable practices, and cutting-edge technology integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-4">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Values</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setActiveValue(index)}
                  className={`group relative p-6 rounded-xl transition-all transform hover:scale-105 ${
                    activeValue === index ? 'scale-105' : ''
                  }`}
                >
                  {activeValue === index && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-xl`}></div>
                  )}
                  <div className={`relative glass-card p-6 rounded-xl h-full ${
                    activeValue !== index ? 'hover:bg-white/10' : ''
                  }`}>
                    <div className="text-3xl mb-2">{value.icon}</div>
                    <div className={`font-semibold ${
                      activeValue === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {value.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="text-5xl mb-4">{values[activeValue].icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4">{values[activeValue].title}</h3>
              <p className="text-lg text-gray-400">{values[activeValue].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            15 years of innovation, growth, and excellence in facility management
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className="flex-1">
                    <div className={`glass-card rounded-2xl p-6 ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    }`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-3xl">{milestone.icon}</span>
                        <div className="text-2xl font-bold text-cyan-400">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.event}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full border-4 border-gray-950 shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-4">
            Our Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Team</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Our success is built on the expertise and dedication of our team. With over 50 certified
            technicians and support staff, we deliver excellence in every service call.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl text-center group hover:bg-white/10 transition-all">
                <div className="text-5xl mb-3">{member.icon}</div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-1">
                  {member.count}
                </div>
                <div className="text-gray-400">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-4xl font-black text-center text-white mb-12">
              Nexa by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Numbers</span>
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Nexa Facilities Group</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Expert Maintenance Team',
                description: 'Skilled technicians specializing in HVAC/R systems',
                icon: '👨‍🔧'
              },
              {
                title: 'Multi-State Experience',
                description: 'Consistent service across multiple locations',
                icon: '🗺️'
              },
              {
                title: 'Efficient & Reliable',
                description: 'Minimizing downtime and operational disruptions',
                icon: '⚡'
              },
              {
                title: 'Project Expertise',
                description: 'Complex maintenance challenges handled with care',
                icon: '🏗️'
              },
              {
                title: 'Customer-Centered',
                description: 'Solutions tailored to your specific needs',
                icon: '🎯'
              },
              {
                title: 'Proven Track Record',
                description: '15+ years and 1500+ satisfied clients',
                icon: '🏆'
              }
            ].map((reason, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative glass-card p-6 rounded-2xl h-full">
                  <div className="text-3xl mb-3">{reason.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
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
                Partner with Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the growing list of businesses that trust Nexa Facilities Group
                for their facility maintenance needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg transform hover:scale-105 transition-all">
                  <span className="relative z-10">Get Started Today</span>
                </button>
                <button className="px-8 py-4 rounded-2xl border-2 border-gray-600 text-white font-bold text-lg hover:bg-white/10 hover:border-gray-400 transition-all">
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}