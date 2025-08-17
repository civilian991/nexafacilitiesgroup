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
        <header className="pt-8 pb-6 px-4 sm:pt-12 sm:pb-8 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent block sm:inline">
                NEXA
              </span>
              <span className="text-gray-100 block sm:inline text-2xl sm:text-5xl md:text-7xl">
                FACILITIES
              </span>
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent block sm:inline">
                GROUP
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide px-4 sm:px-0">
              Engineering Excellence • Industrial Innovation
            </p>
          </div>
        </header>

        {/* Industrial Animation Section */}
        <section className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-6xl w-full">
            <div className="relative h-48 sm:h-64 md:h-96">
              {/* SVG HVAC Service Animation - Responsive viewBox */}
              <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                {/* Industrial AC Unit Base */}
                <g transform="translate(400, 200)">
                  {/* Main Unit Housing */}
                  <rect x="-150" y="-80" width="300" height="160" fill="#4a5568" rx="4" />
                  <rect x="-145" y="-75" width="290" height="150" fill="#2d3748" rx="3" />
                  
                  {/* Ventilation Grilles */}
                  <g>
                    {[-60, -40, -20, 0, 20, 40, 60].map((y) => (
                      <rect key={y} x="-130" y={y - 5} width="100" height="8" fill="#1a202c" rx="1" />
                    ))}
                  </g>
                  
                  {/* Fan Housing */}
                  <circle cx="50" cy="0" r="45" fill="#4a5568" />
                  <circle cx="50" cy="0" r="40" fill="#2d3748" />
                  
                  {/* Rotating Fan Blades */}
                  <g transform="translate(50, 0)" className="animate-spin-fast origin-center">
                    {[0, 60, 120, 180, 240, 300].map((angle) => (
                      <path
                        key={angle}
                        d="M 0,0 L 30,5 L 35,0 L 30,-5 Z"
                        fill="#718096"
                        transform={`rotate(${angle})`}
                      />
                    ))}
                    <circle r="8" fill="#1a202c" />
                  </g>
                  
                  {/* Control Panel */}
                  <rect x="-20" y="-60" width="50" height="30" fill="#1a202c" rx="2" />
                  <rect x="-15" y="-55" width="40" height="20" fill="#111827" rx="1" />
                  
                  {/* LED Indicators */}
                  <circle cx="-5" cy="-45" r="3" fill="#10b981" className="animate-pulse" />
                  <circle cx="5" cy="-45" r="3" fill="#f59e0b" className="animate-blink" />
                  <circle cx="15" cy="-45" r="3" fill="#ef4444" />
                  
                  {/* Digital Display */}
                  <rect x="-10" y="-40" width="30" height="10" fill="#064e3b" />
                  <text x="5" y="-33" textAnchor="middle" className="fill-green-400" style={{ fontSize: '8px', fontFamily: 'monospace' }}>
                    72°F
                  </text>
                </g>

                {/* Refrigerant Pipes with Flow Animation */}
                <g>
                  {/* Supply Line */}
                  <rect x="250" y="250" width="300" height="8" fill="#4a5568" rx="4" />
                  <rect x="250" y="252" width="300" height="4" fill="#3b82f6" rx="2">
                    <animate attributeName="x" values="250;550;250" dur="3s" repeatCount="indefinite" />
                  </rect>
                  
                  {/* Return Line */}
                  <rect x="250" y="265" width="300" height="8" fill="#4a5568" rx="4" />
                  <rect x="550" y="267" width="300" height="4" fill="#ef4444" rx="2">
                    <animate attributeName="x" values="550;250;550" dur="3s" repeatCount="indefinite" />
                  </rect>
                </g>

                {/* Technician Character */}
                <g transform="translate(200, 250)">
                  {/* Body */}
                  <rect x="-20" y="-50" width="40" height="60" fill="#f59e0b" rx="2" />
                  
                  {/* Head with Hard Hat */}
                  <circle cy="-60" r="15" fill="#fbbf24" />
                  <path d="M -18,-65 Q 0,-75 18,-65" fill="#ef4444" />
                  <rect x="-20" y="-65" width="40" height="3" fill="#dc2626" />
                  
                  {/* Arms - Animated */}
                  <rect x="-25" y="-40" width="8" height="30" fill="#f59e0b" rx="2" 
                    className="origin-top animate-arm-move" />
                  <rect x="17" y="-40" width="8" height="30" fill="#f59e0b" rx="2" />
                  
                  {/* Legs */}
                  <rect x="-15" y="10" width="10" height="30" fill="#1e40af" rx="2" />
                  <rect x="5" y="10" width="10" height="30" fill="#1e40af" rx="2" />
                  
                  {/* Tool Belt */}
                  <rect x="-20" y="5" width="40" height="8" fill="#92400e" />
                  
                  {/* Wrench in Hand - Animated */}
                  <g transform="translate(-30, -20)" className="animate-tool-use">
                    <rect x="0" y="0" width="4" height="20" fill="#6b7280" />
                    <circle cx="2" cy="-2" r="6" fill="none" stroke="#6b7280" strokeWidth="3" />
                    <circle cx="2" cy="22" r="6" fill="none" stroke="#6b7280" strokeWidth="3" />
                  </g>
                </g>

                {/* Toolbox */}
                <g transform="translate(150, 300)">
                  <rect x="-30" y="-20" width="60" height="40" fill="#dc2626" rx="2" />
                  <rect x="-25" y="-15" width="50" height="30" fill="#ef4444" rx="1" />
                  <rect x="-5" y="-25" width="10" height="10" fill="#991b1b" rx="1" />
                  
                  {/* Tools */}
                  <rect x="-20" y="-10" width="3" height="15" fill="#6b7280" />
                  <rect x="-10" y="-10" width="3" height="15" fill="#6b7280" />
                  <rect x="0" y="-10" width="3" height="15" fill="#6b7280" />
                  <rect x="10" y="-10" width="3" height="15" fill="#6b7280" />
                </g>

                {/* Pressure Gauge */}
                <g transform="translate(600, 150)">
                  <circle r="30" fill="#374151" />
                  <circle r="25" fill="#f3f4f6" />
                  <circle r="2" fill="#111827" />
                  
                  {/* Gauge Needle - Animated */}
                  <rect x="-1" y="-20" width="2" height="20" fill="#ef4444" className="origin-bottom animate-gauge" />
                  
                  {/* Gauge Markings */}
                  {[-60, -30, 0, 30, 60].map((angle) => (
                    <rect
                      key={angle}
                      x="-1"
                      y="-23"
                      width="2"
                      height="5"
                      fill="#6b7280"
                      transform={`rotate(${angle})`}
                    />
                  ))}
                </g>

                {/* Diagnostic Tablet */}
                <g transform="translate(100, 200)">
                  <rect x="-25" y="-15" width="50" height="30" fill="#1f2937" rx="2" />
                  <rect x="-22" y="-12" width="44" height="24" fill="#111827" />
                  
                  {/* Screen Content */}
                  <rect x="-20" y="-10" width="40" height="2" fill="#10b981" className="animate-pulse" />
                  <rect x="-20" y="-5" width="30" height="2" fill="#3b82f6" />
                  <rect x="-20" y="0" width="35" height="2" fill="#3b82f6" />
                  <rect x="-20" y="5" width="25" height="2" fill="#f59e0b" />
                </g>

                {/* Status Text */}
                <text x="400" y="50" textAnchor="middle" className="fill-gray-400 font-bold" style={{ fontSize: 'clamp(16px, 3vw, 24px)' }}>
                  HVAC EXCELLENCE IN PROGRESS
                </text>
                <text x="400" y="80" textAnchor="middle" className="fill-gray-500 animate-pulse" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
                  Servicing Your Comfort
                </text>
              </svg>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 sm:mt-8 max-w-2xl mx-auto px-4 sm:px-0">
              <div className="bg-gray-800 h-3 sm:h-4 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-progress" />
              </div>
              <p className="text-center mt-2 sm:mt-3 text-sm sm:text-base text-gray-400">Loading excellence...</p>
            </div>
          </div>
        </section>

        {/* Email Capture Form */}
        <section className="py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Get Notified When We Launch</h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-base"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 touch-manipulation"
                >
                  {isSubmitting ? 'Submitting...' : 'Notify Me'}
                </button>
              </form>
            ) : (
              <div className="text-center p-4 sm:p-6 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-base sm:text-lg">✓ Thank you! We'll notify you when we launch.</p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="px-2">
                <p className="text-gray-500 italic text-sm sm:text-base">"Precision in Every Detail"</p>
              </div>
              <div className="px-2">
                <p className="text-gray-500 italic text-sm sm:text-base">"Building Tomorrow, Today"</p>
              </div>
              <div className="px-2">
                <p className="text-gray-500 italic text-sm sm:text-base">"Where Innovation Meets Infrastructure"</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 text-center text-gray-600 text-xs sm:text-sm px-2">
              © 2025 Nexa Facilities Group. Engineering the Future.
            </div>
          </div>
        </footer>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes arm-move {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-20deg); }
          75% { transform: rotate(20deg); }
        }
        
        @keyframes tool-use {
          0%, 100% { transform: translate(-30px, -20px) rotate(0deg); }
          50% { transform: translate(-30px, -20px) rotate(-15deg); }
        }
        
        @keyframes gauge {
          0%, 100% { transform: rotate(-30deg); }
          50% { transform: rotate(30deg); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
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
        
        .animate-spin-fast {
          animation: spin-fast 2s linear infinite;
        }
        
        .animate-arm-move {
          animation: arm-move 3s ease-in-out infinite;
        }
        
        .animate-tool-use {
          animation: tool-use 2s ease-in-out infinite;
        }
        
        .animate-gauge {
          animation: gauge 4s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 2s ease-in-out infinite;
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
        
        .origin-bottom {
          transform-origin: bottom;
        }
      `}</style>
    </div>
  )
}