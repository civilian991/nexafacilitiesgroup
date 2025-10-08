'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    locations: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      locations: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white pt-32 pb-20"
        style={{ background: 'linear-gradient(135deg, oklch(0.35 0.18 250), oklch(0.42 0.16 240))' }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            GET IN TOUCH
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fadeInUp animate-delay-200">
            Expert care for your HVAC/R systems.<br />
            Get fast, professional service from our skilled team today.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">HOW TO REACH US</h2>
            <p className="text-xl text-gray-600">Choose the contact method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center p-8 bg-card border border-border rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all">
              <div
                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-lg"
                style={{ background: 'var(--color-primary)', color: 'white' }}
              >
                <Icon name="phone" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">CALL US</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a href="tel:1-504-688-2541" className="text-2xl font-bold text-primary hover:underline">
                1-504-688-2541
              </a>
              <p className="text-sm text-gray-500 mt-2">Available 24/7 for emergencies</p>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-card border border-border rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all">
              <div
                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-lg"
                style={{ background: 'var(--color-secondary)', color: 'white' }}
              >
                <Icon name="mail" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">EMAIL US</h3>
              <p className="text-gray-600 mb-4">Send us a detailed message</p>
              <a
                href="mailto:info@nexafacilitiesgroup.com"
                className="text-lg font-bold text-primary hover:underline break-all"
              >
                info@nexafacilitiesgroup.com
              </a>
              <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
            </div>

            {/* Emergency */}
            <div className="text-center p-8 bg-card border border-border rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all">
              <div
                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-lg"
                style={{ background: 'var(--color-emergency)', color: 'white' }}
              >
                <Icon name="alert-circle" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">EMERGENCY SERVICE</h3>
              <p className="text-gray-600 mb-4">24/7 urgent support</p>
              <a
                href="tel:1-504-688-2541"
                className="text-2xl font-bold hover:underline"
                style={{ color: 'var(--color-emergency)' }}
              >
                1-504-688-2541
              </a>
              <p className="text-sm text-gray-500 mt-2">Immediate response for critical issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">SEND US A MESSAGE</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              {showSuccess && (
                <div className="mb-6 p-4 bg-success/10 border border-success rounded-lg">
                  <div className="flex items-center text-success">
                    <Icon name="check" size={24} className="mr-2" />
                    <span className="font-semibold">Thank you! Your message has been sent successfully.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-2 text-foreground">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-2 text-foreground">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2 text-foreground">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2 text-foreground">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service...</option>
                    <option value="hvac">HVAC System Maintenance</option>
                    <option value="refrigeration">Refrigeration Maintenance</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="project">Project Implementation</option>
                    <option value="multi-location">Multi-Location Support</option>
                    <option value="preventive">Preventive Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="locations" className="block text-sm font-semibold mb-2 text-foreground">
                    Number of Locations
                  </label>
                  <input
                    type="number"
                    id="locations"
                    name="locations"
                    min="1"
                    value={formData.locations}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="1"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your maintenance needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 bg-primary text-white"
                >
                  SEND MESSAGE
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">CONTACT INFORMATION</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Phone</h4>
                    <p className="text-gray-600">Main: 1-504-688-2541</p>
                    <p className="text-gray-600">Emergency: 1-504-688-2541</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Email</h4>
                    <p className="text-gray-600">General: info@nexafacilitiesgroup.com</p>
                    <p className="text-gray-600">Support: support@nexafacilitiesgroup.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-600">Sunday: Emergency Service Only</p>
                    <p className="font-semibold text-secondary mt-2">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="map-pin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Service Area</h4>
                    <p className="text-gray-600">
                      Serving commercial facilities across multiple states in the United States with consistent, reliable HVAC/R
                      maintenance services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="mt-8 space-y-4">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <h4 className="font-bold mb-2 text-foreground">Need Immediate Assistance?</h4>
                  <p className="text-gray-600 mb-3">
                    Our emergency response team is available 24/7 to handle urgent maintenance needs.
                  </p>
                  <a
                    href="tel:1-504-688-2541"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-semibold transition-all"
                  >
                    <Icon name="phone" size={20} />
                    Call Emergency Line
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: 'How quickly can you respond to an emergency?',
                answer:
                  'Our emergency service team is available 24/7 with typical response times of 2-4 hours depending on your location. For critical system failures, we prioritize immediate dispatch.'
              },
              {
                question: 'Do you service all types of commercial facilities?',
                answer:
                  'Yes, we work with retail stores, restaurants, supermarkets, warehouses, hotels, and commercial offices. Our technicians are experienced with a wide range of HVAC/R systems.'
              },
              {
                question: 'Can you handle multiple locations?',
                answer:
                  'Absolutely. We specialize in multi-location service coordination, providing consistent maintenance across all your facilities with centralized reporting and management.'
              },
              {
                question: 'What areas do you serve?',
                answer:
                  'We provide services across multiple states in the United States. Contact us to confirm coverage in your specific area.'
              },
              {
                question: 'Do you offer preventive maintenance contracts?',
                answer:
                  'Yes, we offer customizable preventive maintenance programs designed to keep your systems running efficiently and minimize unexpected breakdowns. Contact us for a customized quote.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section
        className="py-16 text-white"
        style={{ background: 'linear-gradient(135deg, oklch(0.65 0.2 45), oklch(0.72 0.18 55))' }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don&apos;t wait for system failures. Contact Nexa Facilities Group today<br />
            and experience professional maintenance service you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1-504-688-2541"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              style={{
                background: 'white',
                color: 'oklch(0.35 0.18 250)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <Icon name="phone" size={20} />
              CALL NOW
            </a>
            <a
              href="mailto:info@nexafacilitiesgroup.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all hover:scale-105"
            >
              <Icon name="mail" size={20} />
              EMAIL US
            </a>
          </div>
        </div>
      </section>
    </>
  );
}