import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleWhatsAppOrder = () => {
    window.open(
      'https://wa.me/919893373884?text=Hi! I would like to place an order from Maison de Flavors.',
      '_blank'
    );
  };

  return (
    <header className="bg-white shadow-sm border-b border-[#F5F1E8] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo + Brand Name + Tagline */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/assets/Logo.png"
              alt="Maison de Flavors"
              className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 drop-shadow-md"
            />
           <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#6B7F5A] tracking-tight leading-tight">
                Maison de Flavors
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#6B7F5A]/80 font-medium tracking-wide">
                Healthy & Delicious
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base lg:text-lg font-medium transition-colors hover:text-[#6B7F5A] ${
                  location.pathname === item.href
                    ? 'text-[#6B7F5A] border-b-2 border-[#6B7F5A]'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Order Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleWhatsAppOrder}
              className="bg-[#6B7F5A] hover:bg-[#5A6B4A] text-white text-base px-6 py-2.5 rounded-xl shadow-md"
            >
              Order on WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[#F5F1E8]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-lg font-medium transition-colors hover:text-[#6B7F5A] ${
                    location.pathname === item.href
                      ? 'text-[#6B7F5A] bg-[#F5F1E8]'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-[#6B7F5A] hover:bg-[#5A6B4A] text-white text-lg py-2.5 rounded-xl shadow-md"
                >
                  Order on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
