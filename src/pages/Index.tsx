import { ArrowRight, Heart, Leaf, Clock, MapPin, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function Index() {
  const handleWhatsAppOrder = () => {
    window.open('https://wa.me/919893373884?text=Hi! I would like to place an order from Maison de Flavors.', '_blank');
  };

  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-[#6B7F5A]" />,
      title: "Natural Ingredients",
      description: "Made with wholesome, natural ingredients - no artificial additives or preservatives"
    },
    {
      icon: <Heart className="h-8 w-8 text-[#6B7F5A]" />,
      title: "No Refined Sugar",
      description: "Sweetened naturally with dates, jaggery, and other healthy alternatives"
    },
    {
      icon: <Clock className="h-8 w-8 text-[#6B7F5A]" />,
      title: "Fresh Daily",
      description: "Baked fresh to order with 2-3 hours notice for the best quality and taste"
    }
  ];

  const testimonials = [
    {
      name: "Saloni",
      text: "Thanks for the ragi banana cake - it was really flavourful and moist.",
      rating: 5
    },
    {
      name: "Priyank",
      text: "I really enjoyed your Choco Ragi muffins, they were rich in taste.",
      rating: 5
    },
    {
      name: "Priya",
      text: "Dates and walnut brownie was perfect for guilt free treat.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5F1E8] to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Wholesome Treats
                  <span className="text-[#6B7F5A] block">Made with Love</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Natural ingredients, no refined sugar, delivered fresh to Noida. 
                  Indulge guilt-free in our healthy, delicious treats.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsAppOrder}
                  size="lg"
                  className="bg-[#6B7F5A] hover:bg-[#5A6B4A] text-white px-8 py-4 text-lg"
                >
                  Order Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/menu">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#6B7F5A] text-[#6B7F5A] hover:bg-[#6B7F5A] hover:text-white px-8 py-4 text-lg w-full sm:w-auto"
                  >
                    View Menu
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#6B7F5A]" />
                  <span>Noida Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-[#6B7F5A]" />
                  <span>2-3 Hours Notice</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#6B7F5A] rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/assets/ragibananacake.png" 
                  alt="Healthy cakes and treats" 
                  className="rounded-2xl w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Heart className="h-8 w-8 text-red-500 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Maison de Flavors?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe healthy doesn't mean compromising on taste. Every treat is crafted with care, 
              using only the finest natural ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-[#F5F1E8] hover:border-[#6B7F5A] transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Popular Treats
            </h2>
            <p className="text-xl text-gray-600">
              Handcrafted with love, naturally sweetened, and absolutely delicious
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/assets/ragibananacake.png" 
                alt="Ragi Banana Cake" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ragi Banana Cake</h3>
                <p className="text-gray-600 mb-4">Moist, naturally sweet, rich in iron</p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#6B7F5A]" />
                  <span className="text-sm text-gray-600">No refined sugar</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/assets/dateswalnutbrownie.png" 
                alt="Dates & Walnut Brownie" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dates & Walnut Brownie</h3>
                <p className="text-gray-600 mb-4">Fudgy, guilt-free, no refined sugar</p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#6B7F5A]" />
                  <span className="text-sm text-gray-600">Natural sweetness</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/assets/oatsjaggry.png" 
                alt="Oats Jaggery Cake" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Oats Jaggery Cake</h3>
                <p className="text-gray-600 mb-4">Light, mildly spiced, perfect for all ages</p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#6B7F5A]" />
                  <span className="text-sm text-gray-600">High fiber</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button 
                size="lg"
                className="bg-[#6B7F5A] hover:bg-[#5A6B4A] text-white px-8 py-4"
              >
                View Full Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of happy customers who've made the healthy choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-[#F5F1E8]">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#6B7F5A] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Indulge Guilt-Free?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Order your favorite healthy treats now. Fresh, natural, and delivered to your doorstep in Noida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppOrder}
              size="lg"
              className="bg-white text-[#6B7F5A] hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Order on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}