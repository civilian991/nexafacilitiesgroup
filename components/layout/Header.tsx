'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white/95 backdrop-blur-md'
        }`}
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/nexa-logo.png"
                alt="Nexa Facilities Group"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="hover:opacity-70 transition-opacity"
                style={{ color: 'var(--foreground)' }}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="hover:opacity-70 transition-opacity"
                style={{ color: 'var(--foreground)' }}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="hover:opacity-70 transition-opacity"
                style={{ color: 'var(--foreground)' }}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  background: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col space-y-1.5 p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
                style={{ background: 'var(--foreground)' }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
                style={{ background: 'var(--foreground)' }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
                style={{ background: 'var(--foreground)' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-64 h-full bg-white shadow-lg z-40 md:hidden transition-transform duration-350 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ boxShadow: 'var(--shadow-xl)' }}
      >
        <div className="p-6 space-y-4">
          <Link
            href="/"
            className="block py-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--foreground)' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block py-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--foreground)' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--foreground)' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--foreground)' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}