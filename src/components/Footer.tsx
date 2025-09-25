import { Heart, Phone, Clock, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const handleWhatsAppContact = () => {
    window.open(
      'https://wa.me/919893373884?text=Hi! I have a question about Maison de Flavors.',
      '_blank'
    );
  };

  const handleInstagramClick = () => {
    window.open(
      'https://www.instagram.com/maisondeflavors?utm_source=qr&igsh=NmRwNGVuYzFjaXJx',
      '_blank'
    );
  };

  return (
    <footer className="bg-[#6B7F5A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section - same as header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-5">
              <img
                src="/images/Logo.png"
                alt="Maison de Flavors"
                className="h-16 w-16 drop-shadow-md filter brightness-105 contrast-110"
              />
              <div>
                <h3 className="text-xl font-bold">Maison de Flavors</h3>
                <p className="text-sm text-green-200">Healthy & Delicious</p>
              </div>
            </div>
            <p className="text-green-100 text-sm">
              Wholesome treats made with love, using natural ingredients and no
              refined sugar. Bringing you guilt-free indulgence, one bite at a
              time.
            </p>
            <div className="flex items-center space-x-2 text-green-200">
              <Heart className="h-4 w-4 fill-current" />
              <span className="text-sm">Made with Love</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-200" />
                <button
                  onClick={handleWhatsAppContact}
                  className="text-green-100 hover:text-white transition-colors"
                >
                  +91 9893373884 (WhatsApp)
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-green-200" />
                <span className="text-green-100">9:00 AM - 9:00 PM (Daily)</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-200" />
                <span className="text-green-100">Delivery in Noida</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <button
                onClick={handleInstagramClick}
                className="text-green-200 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-green-200">Pre-orders only</p>
              <p className="text-sm text-green-200">2-3 hours notice required</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            © 2024 Maison de Flavors. All rights reserved. | Healthy treats made
            with natural ingredients.
          </p>
        </div>
      </div>
    </footer>
  );
}
