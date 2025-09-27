import NexaLogo from './NexaLogo'

export default function Footer() {
  return (
    <footer className="relative py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <NexaLogo size={60} className="mb-4" animated={false} />
          <h3 className="text-2xl font-black text-white mb-2">NEXA FACILITIES GROUP</h3>
          <p className="text-gray-400 text-center max-w-xl">
            Your trusted partner for commercial HVAC/R maintenance across the United States
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">© 2025 Nexa Facilities Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}