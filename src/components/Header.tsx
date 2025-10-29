import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'О нас', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Филиалы', href: '#locations' },
    { label: 'Вакансии', href: '#careers' },
    { label: 'Франшиза', href: '#franchise' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-[0.3em] text-white">
              CHOOSE ME
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-pistachio transition-colors duration-300 font-medium text-sm tracking-wider uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm bg-white/5 uppercase tracking-wider text-xs"
            >
              Сертификат
            </Button>
            <Button className="bg-pistachio hover:bg-pistachio/90 text-white uppercase tracking-wider text-xs">
              Записаться
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-pistachio transition-colors py-2 uppercase tracking-wider text-sm"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="outline" className="border-white/30 text-white w-full uppercase">
                Сертификат
              </Button>
              <Button className="bg-pistachio hover:bg-pistachio/90 text-white w-full uppercase">
                Записаться
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
