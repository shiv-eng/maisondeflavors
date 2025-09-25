import { useState } from 'react';
import { Phone, Clock, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleWhatsAppOrder = () => {
    window.open('https://wa.me/919893373884?text=Hi! I would like to place an order from Maison de Flavors.', '_blank');
  };

  const handleWhatsAppContact = (message?: string) => {
    const defaultMessage = 'Hi! I have a question about Maison de Flavors.';
    const finalMessage = message || defaultMessage;
    window.open(`https://wa.me/919893373884?text=${encodeURIComponent(finalMessage)}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! My name is ${formData.name}. Phone: ${formData.phone}. Message: ${formData.message}`;
    handleWhatsAppContact(message);
    setFormData({ name: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-[#6B7F5A]" />,
      title: "WhatsApp Orders",
      details: "+91 9893373884",
      description: "Quick and easy ordering via WhatsApp"
    },
    {
      icon: <Clock className="h-6 w-6 text-[#6B7F5A]" />,
      title: "Operating Hours",
      details: "9:00 AM - 9:00 PM",
      description: "Daily"
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#6B7F5A]" />,
      title: "Delivery Area",
      details: "Noida",
      description: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6B7F5A] to-[#5A6B4A] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-green-100 mb-8">
            Ready to order healthy treats? Have questions about our ingredients? 
            We're here to help you make the best choice for your family.
          </p>
          <Button 
            onClick={handleWhatsAppOrder}
            size="lg"
            className="bg-white text-[#6B7F5A] hover:bg-gray-100 px-8 py-4 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Order Now on WhatsApp
          </Button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for orders, questions, or custom requests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-2 border-[#F5F1E8] hover:border-[#6B7F5A] transition-colors text-center">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-2xl font-bold text-[#6B7F5A] mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our ingredients, custom orders, or bulk orders for events? 
                  Fill out the form and we'll get back to you via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Enter your WhatsApp number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your requirements, questions, or special requests..."
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#6B7F5A] hover:bg-[#5A6B4A] text-white"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Order Guide</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#6B7F5A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <p className="text-gray-700 text-sm">Browse our menu and decide what you'd like</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#6B7F5A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <p className="text-gray-700 text-sm">WhatsApp us with your order details</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#6B7F5A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-gray-700 text-sm">We'll confirm availability and total amount</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#6B7F5A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <p className="text-gray-700 text-sm">Fresh treats delivered in 2-3 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#6B7F5A] text-white rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Custom Orders</h3>
                <p className="text-green-100 text-sm mb-4">
                  Planning a birthday party, anniversary, or special celebration? 
                  We create custom healthy cakes tailored to your preferences.
                </p>
                <ul className="text-green-200 text-sm space-y-2">
                  <li>• Custom flavors and designs</li>
                  <li>• Advance booking required (24-48 hours)</li>
                  <li>• Special dietary requirements accommodated</li>
                  <li>• Bulk orders for events available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}