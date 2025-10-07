import Icon from '@/components/ui/Icon';

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 text-white"
      style={{ backgroundImage: 'linear-gradient(135deg, oklch(0.3500 0.1800 250), oklch(0.4200 0.1600 240))' }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90">
          Experience the Nexa difference with professional maintenance services you can rely on.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:1-504-688-2541"
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
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
            className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <Icon name="mail" size={20} />
            EMAIL US
          </a>
        </div>
      </div>
    </section>
  );
}