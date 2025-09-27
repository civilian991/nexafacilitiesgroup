'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [activeService, setActiveService] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: 'HVAC Maintenance',
      description: 'Keep heating, cooling, and ventilation systems running efficiently',
      icon: '🔧',
      gradient: 'from-blue-500 to-purple-600',
      features: ['System Servicing', 'Preventive Maintenance', 'Emergency Repairs']
    },
    {
      title: 'Refrigeration Services',
      description: 'Ensure commercial refrigeration units operate reliably and safely',
      icon: '❄️',
      gradient: 'from-cyan-500 to-blue-600',
      features: ['Commercial Units', 'Safety Compliance', 'Energy Optimization']
    },
    {
      title: 'System Troubleshooting',
      description: 'Quick identification and resolution of any operational issues',
      icon: '🔍',
      gradient: 'from-purple-500 to-pink-600',
      features: ['Rapid Diagnostics', 'Expert Solutions', '24/7 Support']
    },
    {
      title: 'Multi-State Support',
      description: 'Consistent maintenance services across several states',
      icon: '🌐',
      gradient: 'from-green-500 to-teal-600',
      features: ['Multiple Locations', 'Standardized Service', 'Regional Expertise']
    }
  ]

  const stats = [
    { value: '99.9%', label: 'Uptime Guarantee', icon: '⚡' },
    { value: '< 15min', label: 'Response Time', icon: '⏱️' },
    { value: '50%', label: 'Energy Savings', icon: '🌱' },
    { value: '24/7/365', label: 'AI Monitoring', icon: '👁️' }
  ]

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

{/* Hero Section with Parallax and 3D Effects */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="grid3d" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 30 30 0 0 M 30 30 L 60 60 30 90 0 60 L 30 30"
                      fill="none"
                      stroke="url(#gridGradient)"
                      strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid3d)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">Multi-State HVAC/R Experts</span>
            </div>

            {/* Main Heading with Gradient Animation */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
              <span className="block text-white mb-2">Fast, Professional</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">
                Maintenance You Can Trust
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Expert maintenance for HVAC/R systems across multiple states.
              Fast, reliable, and professional service that keeps your business fully operational.
            </p>

            {/* CTA Buttons with Advanced Styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="group relative px-8 py-4 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Request Service</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative px-8 py-4 glass-card text-white font-bold text-lg hover:bg-white/10 transition-all duration-300">
                <span className="flex items-center space-x-2">
                  <span>Contact Us Today</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Live Stats Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-2xl hover:bg-white/10 transition-all group">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Services Section with 3D Cards */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive maintenance solutions for commercial stores, specializing in HVAC/R systems
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-500 hover:scale-105 ${
                  index === activeService ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity`}></div>

                {/* Card Content */}
                <div className="relative glass-card p-8 rounded-2xl h-full">
                  {/* Icon with Animation */}
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <svg className="w-4 h-4 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <Link href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      <span>Explore</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full">
                <span className="text-sm font-medium text-cyan-400">BREAKTHROUGH TECHNOLOGY</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white">
                Why Choose
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Nexa Facilities Group
                </span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Maintenance Team',
                    description: 'Our skilled technicians specialize in HVAC/R systems, providing reliable maintenance and repairs',
                    icon: '👨‍🔧'
                  },
                  {
                    title: 'Multi-State Experience',
                    description: 'We manage operations across multiple states, delivering consistent, professional service',
                    icon: '🗺️'
                  },
                  {
                    title: 'Customer-Centered Approach',
                    description: 'Your business operations are our priority; we deliver solutions tailored to your needs',
                    icon: '🤝'
                  }
                ].map((feature, index) => (
                  <div key={index} className="group flex space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="group relative px-8 py-4 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                <span className="relative text-white font-bold">Request Demo</span>
              </button>
            </div>

            {/* Right Visual - Interactive Dashboard */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>

              {/* Main Dashboard */}
              <div className="relative glass-card p-8 rounded-3xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">System Analytics</h3>
                    <span className="flex items-center space-x-2">
                      <span className="flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-sm text-green-400">Live</span>
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Energy Efficiency', value: '94.7%', trend: '+2.3%' },
                      { label: 'System Health', value: '99.9%', trend: '+0.1%' },
                      { label: 'Cost Savings', value: '$48.2K', trend: '+12%' },
                      { label: 'CO₂ Reduced', value: '2.4T', trend: '+18%' }
                    ].map((metric, index) => (
                      <div key={index} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-sm text-green-400">{metric.trend}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="h-32 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 flex items-center justify-center">
                    <div className="flex space-x-2">
                      {[40, 70, 45, 90, 65, 85, 50].map((height, index) => (
                        <div
                          key={index}
                          className="w-4 bg-gradient-to-t from-cyan-400 to-purple-600 rounded-t animate-pulse-slow"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Modern Design */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of companies revolutionizing their facility operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Nexa's team handles all our HVAC maintenance across 5 states. Incredibly reliable service.",
                author: "Sarah Chen",
                role: "Operations Director, RetailChain",
                rating: 5
              },
              {
                quote: "Fast response time and expert technicians. They keep our stores running without interruptions.",
                author: "Michael Rodriguez",
                role: "Facilities Manager, ShopMart",
                rating: 5
              },
              {
                quote: "Professional, dependable, and efficient. Nexa is our trusted maintenance partner.",
                author: "Jennifer Park",
                role: "Regional Manager, StoreNet",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity"></div>
                <div className="relative glass-card p-8 rounded-2xl h-full">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>

                  {/* Author */}
                  <div className="pt-4 border-t border-gray-700">
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Futuristic Design */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>

            {/* Content */}
            <div className="relative glass-card p-12 md:p-16 rounded-3xl text-center">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Need Expert Maintenance?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Trust Nexa Facilities Group for reliable HVAC/R maintenance that keeps your business running.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg transform hover:scale-105 transition-all">
                  <span className="relative z-10">Request Service</span>
                </button>

                <button className="px-8 py-4 rounded-2xl border-2 border-gray-600 text-white font-bold text-lg hover:bg-white/10 hover:border-gray-400 transition-all">
                  Get Quote
                </button>
              </div>

              <p className="mt-8 text-sm text-gray-400">
                24/7 Emergency Service · Multi-State Coverage · Free Consultation
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}