import { Heart, Leaf, Users, Award, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function About() {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/919893373884?text=Hi! I would like to know more about Maison de Flavors.', '_blank');
  };

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-[#6B7F5A]" />,
      title: "Made with Love",
      description: "Every treat is handcrafted with care and attention, ensuring the perfect balance of health and taste in every bite."
    },
    {
      icon: <Leaf className="h-8 w-8 text-[#6B7F5A]" />,
      title: "Natural Ingredients",
      description: "We source only the finest natural ingredients - no artificial preservatives, colors, or flavors ever make it into our kitchen."
    },
    {
      icon: <Users className="h-8 w-8 text-[#6B7F5A]" />,
      title: "Family First",
      description: "Our recipes are designed with families in mind - healthy enough for daily consumption, delicious enough for special occasions."
    },
    {
      icon: <Award className="h-8 w-8 text-[#6B7F5A]" />,
      title: "Quality Promise",
      description: "We never compromise on quality. Each order is prepared fresh with the same care we'd give to our own family's treats."
    }
  ];

  const healthyFeatures = [
    "No refined sugar - sweetened with dates, jaggery, and natural alternatives",
    "High in fiber from ragi, oats, and whole grain flours",
    "Rich in minerals and vitamins from natural ingredients",
    "Lower glycemic index for better blood sugar management",
    "No artificial preservatives or additives",
    "Suitable for health-conscious families and diabetic-friendly options"
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            At Maison de Flavors, we believe that healthy eating shouldn't mean sacrificing the joy of indulgence. 
            Our mission is to create wholesome treats that bring families together, using only natural ingredients 
            and traditional sweeteners that have nourished generations.
          </p>
          
          <div className="bg-[#F5F1E8] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We Started</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              "As a health-conscious individual, I was struggling to find treats that I could enjoy
               without compromising my wellness goals. Every store-bought option was 
                impossible to satisfy my sweet cravings while staying healthy. 
                That's when I decided to create something different - treats that are not just delicious, 
                but actually good for you. I started experimenting in my own kitchen, perfecting
                 recipes that use only natural ingredients and no refined sugar. Today, Maison de Flavors 
                 serves health-conscious individuals and families across Noida who share the same values of
                  wellness, taste, and quality."
            </p>
            <p className="text-[#6B7F5A] font-semibold mt-4">- Founder, Maison de Flavors</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide every decision we make, from ingredient selection to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-white hover:border-[#6B7F5A] transition-colors bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healthy Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What Makes Our Treats Healthy?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We've carefully crafted each recipe to maximize nutrition without compromising on taste. 
                  Here's what makes our treats special:
                </p>
              </div>

              <div className="space-y-4">
                {healthyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#6B7F5A] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <Button 
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-[#6B7F5A] hover:bg-[#5A6B4A] text-white"
              >
                Learn More About Our Ingredients
              </Button>
            </div>

            <div className="relative">
              <img 
                src="/images/NaturalIngredients.jpg" 
                alt="Natural ingredients" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-[#6B7F5A] text-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Fresh Daily</p>
                  <p className="text-sm text-green-200">Made to Order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              From ingredient selection to delivery, every step is designed with your health in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-[#6B7F5A] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sourcing</h3>
              <p className="text-gray-600">
                We carefully select premium natural ingredients from trusted suppliers, 
                ensuring freshness and quality in every batch.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-[#6B7F5A] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Crafting</h3>
              <p className="text-gray-600">
                Each treat is handcrafted in small batches using traditional techniques 
                combined with modern food safety standards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-[#6B7F5A] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Delivery</h3>
              <p className="text-gray-600">
                Fresh treats are carefully packaged and delivered to your doorstep 
                within 2-3 hours of preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#6B7F5A] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Healthy Treats Family
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Experience the perfect balance of health and indulgence. Your taste buds and your body will thank you.
          </p>
          <Button 
            onClick={handleWhatsAppContact}
            size="lg"
            className="bg-white text-[#6B7F5A] hover:bg-gray-100 px-8 py-4 text-lg"
          >
            Get in Touch with Us
          </Button>
        </div>
      </section>
    </div>
  );
}