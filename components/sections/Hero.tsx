import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="text-white pt-32 pb-20"
      style={{ backgroundImage: 'linear-gradient(135deg, oklch(0.3500 0.1800 250), oklch(0.4200 0.1600 240))' }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
          FAST, PROFESSIONAL MAINTENANCE
          <br />
          YOU CAN TRUST
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeInUp animate-delay-200">
          Expert HVAC/R maintenance across multiple states.
          <br />
          Fast, reliable, and professional service that keeps your business fully operational.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-400">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 inline-block"
            style={{
              background: 'white',
              color: 'oklch(0.35 0.18 250)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            REQUEST SERVICE
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-semibold transition-all hover:scale-105 inline-block"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}