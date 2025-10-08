import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="text-white pt-32 pb-20"
      style={{ backgroundImage: 'linear-gradient(135deg, oklch(0.3500 0.1800 250), oklch(0.4200 0.1600 240))' }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 animate-fadeInUp leading-relaxed">
          Dependable, efficient, and professional service designed to keep your business running smoothly without interruption.
        </h1>
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