'use client'

import { useState, FormEvent } from 'react'

export default function UnderConstructionPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
          animation: 'slide 20s linear infinite'
        }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-12 pb-8 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                NEXA
              </span>
              <span className="text-gray-100">
                FACILITIES
              </span>
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                GROUP
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
              Engineering Excellence • Industrial Innovation
            </p>
          </div>
        </header>

        {/* Industrial Animation Section */}
        <section className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-6xl w-full">
            <div className="relative h-64 md:h-96">
              {/* SVG Industrial Animation */}
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {/* Conveyor Belt */}
                <rect x="100" y="300" width="600" height="20" fill="#4a5568" />
                <rect x="100" y="300" width="600" height="4" fill="#2d3748">
                  <animate attributeName="x" values="100;100;90;100" dur="0.5s" repeatCount="indefinite" />
                </rect>
                
                {/* Moving Boxes on Conveyor */}
                <g className="animate-conveyor">
                  <rect x="150" y="280" width="40" height="40" fill="#f6ad55" rx="2" />
                  <rect x="350" y="280" width="40" height="40" fill="#ed8936" rx="2" />
                  <rect x="550" y="280" width="40" height="40" fill="#f6ad55" rx="2" />
                </g>

                {/* Gear 1 - Large */}
                <g transform="translate(200, 150)">
                  <circle r="60" fill="none" stroke="#718096" strokeWidth="4" />
                  <g className="animate-spin-slow origin-center">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                      <rect
                        key={angle}
                        x="-10"
                        y="-70"
                        width="20"
                        height="20"
                        fill="#4a5568"
                        transform={`rotate(${angle})`}
                        rx="2"
                      />
                    ))}
                    <circle r="30" fill="#2d3748" />
                    <circle r="10" fill="#1a202c" />
                  </g>
                </g>

                {/* Gear 2 - Medium */}
                <g transform="translate(320, 130)">
                  <circle r="40" fill="none" stroke="#718096" strokeWidth="3" />
                  <g className="animate-spin-reverse origin-center">
                    {[0, 60, 120, 180, 240, 300].map((angle) => (
                      <rect
                        key={angle}
                        x="-8"
                        y="-48"
                        width="16"
                        height="16"
                        fill="#4a5568"
                        transform={`rotate(${angle})`}
                        rx="2"
                      />
                    ))}
                    <circle r="20" fill="#2d3748" />
                    <circle r="8" fill="#1a202c" />
                  </g>
                </g>

                {/* Piston */}
                <g transform="translate(500, 150)">
                  <rect x="-20" y="0" width="40" height="100" fill="#4a5568" rx="4" />
                  <rect x="-15" width="30" height="60" fill="#718096" rx="2" className="animate-piston" />
                  <circle cy="0" r="25" fill="#2d3748" />
                  <circle cy="0" r="10" fill="#1a202c" />
                </g>

                {/* Robotic Arm */}
                <g transform="translate(650, 200)">
                  <rect x="-5" y="0" width="10" height="80" fill="#4a5568" rx="2" 
                    className="origin-top animate-swing" />
                  <circle cy="0" r="12" fill="#2d3748" />
                  <rect x="-15" y="75" width="30" height="15" fill="#f6ad55" rx="2"
                    className="origin-top animate-swing" />
                </g>

                {/* Wrench Tool */}
                <g transform="translate(100, 100)" className="animate-rotate">
                  <path d="M10,10 L30,30 L28,32 L8,12 Z" fill="#718096" />
                  <circle cx="10" cy="10" r="8" fill="none" stroke="#718096" strokeWidth="3" />
                  <rect x="26" y="28" width="12" height="4" fill="#718096" transform="rotate(45 32 30)" />
                </g>

                {/* Status Text */}
                <text x="400" y="50" textAnchor="middle" className="fill-gray-400 text-2xl font-bold">
                  BUILDING SOMETHING GREAT
                </text>
                <text x="400" y="80" textAnchor="middle" className="fill-gray-500 text-lg animate-pulse">
                  Under Construction
                </text>
              </svg>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-gray-800 h-4 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-progress" />
              </div>
              <p className="text-center mt-3 text-gray-400">Loading excellence...</p>
            </div>
          </div>
        </section>

        {/* Email Capture Form */}
        <section className="py-12 px-6">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Get Notified When We Launch</h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Notify Me'}
                </button>
              </form>
            ) : (
              <div className="text-center p-6 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-lg">✓ Thank you! We'll notify you when we launch.</p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-gray-500 italic">"Precision in Every Detail"</p>
              </div>
              <div>
                <p className="text-gray-500 italic">"Building Tomorrow, Today"</p>
              </div>
              <div>
                <p className="text-gray-500 italic">"Where Innovation Meets Infrastructure"</p>
              </div>
            </div>
            <div className="mt-6 text-center text-gray-600 text-sm">
              © 2025 Nexa Facilities Group. Engineering the Future.
            </div>
          </div>
        </footer>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes piston {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        
        @keyframes swing {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        
        @keyframes conveyor {
          from { transform: translateX(0); }
          to { transform: translateX(200px); }
        }
        
        @keyframes rotate {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(70px); }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 35%; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        
        .animate-piston {
          animation: piston 2s ease-in-out infinite;
        }
        
        .animate-swing {
          animation: swing 3s ease-in-out infinite;
        }
        
        .animate-conveyor {
          animation: conveyor 4s linear infinite;
        }
        
        .animate-rotate {
          animation: rotate 4s ease-in-out infinite;
        }
        
        .animate-progress {
          animation: progress 3s ease-in-out infinite;
        }
        
        .origin-center {
          transform-origin: center;
        }
        
        .origin-top {
          transform-origin: top;
        }
      `}</style>
    </div>
  )
}