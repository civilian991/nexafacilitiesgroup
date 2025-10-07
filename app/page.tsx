import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <WhyChooseUs />
      <CTA />
    </>
  );
}