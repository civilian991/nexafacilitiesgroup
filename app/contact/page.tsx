'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    serviceType: '',
    urgency: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            location: '',
            serviceType: '',
            urgency: '',
            message: ''
          })
        }, 5000)
      } else {
        // Handle error
        alert('Failed to send request. Please try again or call us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send request. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: '📞',
      title: '24/7 Emergency Hotline',
      info: '+1-504-688-2541',
      subtext: 'Immediate response for critical issues',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: '📧',
      title: 'Email Support',
      info: 'service@nexafacilities.com',
      subtext: 'Response within 2 hours',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: '📍',
      title: 'Headquarters',
      info: 'Multi-State Operations',
      subtext: 'Serving 15+ states across the U.S.',
      gradient: 'from-green-500 to-teal-600'
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
              <span className="text-sm font-medium text-gray-300">24/7 Support Available</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black">
              <span className="block text-white mb-2">Get In</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">
                Touch
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Ready to optimize your facility operations? Our expert team is standing by
              to provide immediate assistance and customized solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative glass-card p-6 rounded-2xl text-center h-full">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-lg text-cyan-400 font-semibold mb-1">{method.info}</p>
                  <p className="text-sm text-gray-400">{method.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-3xl font-black text-white mb-6">
                Request <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Service</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="ABC Corp"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Service Type *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    >
                      <option value="">Select service</option>
                      <option value="hvac">HVAC Maintenance</option>
                      <option value="refrigeration">Refrigeration Service</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="preventive">Preventive Maintenance</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Urgency *</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    >
                      <option value="">Select urgency</option>
                      <option value="emergency">Emergency (24 hours)</option>
                      <option value="urgent">Urgent (48 hours)</option>
                      <option value="routine">Routine (1 week)</option>
                      <option value="planned">Planned Maintenance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Location/Facility</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="City, State or Facility Address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Describe your maintenance needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full group relative px-8 py-4 overflow-hidden rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                  <span className="relative text-white font-bold text-lg">
                    {isSubmitting ? 'Sending...' : isSubmitted ? '✓ Message Sent!' : 'Send Request'}
                  </span>
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              {/* Response Time */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Guaranteed Response Times
                </h3>
                <div className="space-y-3">
                  {[
                    { type: 'Emergency', time: '< 15 minutes', icon: '🚨' },
                    { type: 'Urgent', time: '< 2 hours', icon: '⚡' },
                    { type: 'Routine', time: '< 24 hours', icon: '📅' },
                    { type: 'Consultation', time: 'Same business day', icon: '💼' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-gray-300">{item.type}</span>
                      </div>
                      <span className="text-cyan-400 font-semibold">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Service Coverage
                </h3>
                <p className="text-gray-400 mb-4">
                  We provide comprehensive HVAC/R maintenance services across multiple states,
                  ensuring consistent quality and rapid response times.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {['New York', 'Texas', 'California', 'Florida', 'Illinois', 'Pennsylvania'].map((state, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm">{state}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  + 9 more states. Contact us for full coverage area.
                </p>
              </div>

              {/* Why Contact Us */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Why Choose Nexa?
                </h3>
                <ul className="space-y-3">
                  {[
                    '15+ years of industry experience',
                    '50+ certified technicians',
                    '24/7/365 emergency support',
                    '99.9% system uptime guarantee',
                    'Transparent, competitive pricing'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative glass-card p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-black text-white mb-4">
                🚨 Need Emergency Service?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Critical system failure? Don't wait - call our 24/7 emergency hotline now!
              </p>
              <a
                href="tel:+15046882541"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold text-xl rounded-xl hover:scale-105 transition-transform"
              >
                <span>📞</span>
                <span>+1-504-688-2541</span>
              </a>
              <p className="text-sm text-gray-400 mt-4">
                Average response time: Under 15 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}