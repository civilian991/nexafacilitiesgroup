import React from 'react'

interface NexaLogoProps {
  size?: number
  className?: string
  animated?: boolean
}

export default function NexaLogo({ size = 48, className = '', animated = true }: NexaLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle with Gradient */}
      <defs>
        {/* Main Gradient */}
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
        </linearGradient>

        {/* Animated Gradient for hover effect */}
        <linearGradient id="logoGradientAnimated" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }}>
            {animated && (
              <animate
                attributeName="stop-color"
                values="#06b6d4;#a855f7;#06b6d4"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </stop>
          <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }}>
            {animated && (
              <animate
                attributeName="stop-color"
                values="#a855f7;#ec4899;#a855f7"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </stop>
          <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }}>
            {animated && (
              <animate
                attributeName="stop-color"
                values="#ec4899;#06b6d4;#ec4899"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </stop>
        </linearGradient>

        {/* Glow Effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shadow */}
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Outer Ring */}
      <circle cx="100" cy="100" r="95" stroke="url(#logoGradient)" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="100" cy="100" r="85" stroke="url(#logoGradient)" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Main Circle Background */}
      <circle cx="100" cy="100" r="80" fill="#030712" filter="url(#shadow)" />
      <circle
        cx="100"
        cy="100"
        r="78"
        stroke={animated ? "url(#logoGradientAnimated)" : "url(#logoGradient)"}
        strokeWidth="2"
        fill="none"
      />

      {/* Hexagon Shape (representing structure/facilities) */}
      <g transform="translate(100, 100)">
        {/* Hexagon outline */}
        <path
          d="M -40 0 L -20 -35 L 20 -35 L 40 0 L 20 35 L -20 35 Z"
          stroke={animated ? "url(#logoGradientAnimated)" : "url(#logoGradient)"}
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
        />

        {/* Inner hexagon */}
        <path
          d="M -30 0 L -15 -26 L 15 -26 L 30 0 L 15 26 L -15 26 Z"
          fill="url(#logoGradient)"
          opacity="0.2"
        />
      </g>

      {/* Letter N (stylized) */}
      <g transform="translate(100, 100)">
        <path
          d="M -25 20 L -25 -20 L -20 -20 L -20 8 L 15 -20 L 25 -20 L 25 20 L 20 20 L 20 -8 L -15 20 Z"
          fill={animated ? "url(#logoGradientAnimated)" : "url(#logoGradient)"}
          filter="url(#glow)"
        />
      </g>

      {/* Tech dots (representing innovation) */}
      {animated && (
        <>
          <circle cx="50" cy="50" r="2" fill="url(#logoGradient)" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="50" r="2" fill="url(#logoGradient)" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="150" r="2" fill="url(#logoGradient)" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="150" r="2" fill="url(#logoGradient)" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="1.5s" repeatCount="indefinite" />
          </circle>
        </>
      )}
    </svg>
  )
}