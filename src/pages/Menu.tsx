import { ShoppingCart, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Menu() {
  const handleWhatsAppOrder = (itemName: string) => {
    const message = `Hi! I would like to order ${itemName} from Maison de Flavors. Please let me know the price and availability.`;
    window.open(`https://wa.me/919893373884?text=${encodeURIComponent(message)}`, '_blank');
  };

  const menuItems = [
    {
      id: 1,
      name: "Ragi Banana Cake",
      description: "Moist, naturally sweet, rich in iron. Made with finger millet flour and ripe bananas for a nutritious treat that's perfect for all ages.",
      image: "/assets/ragibananacake.png",
      features: ["Rich in Iron", "High Fiber", "Natural Sweetness", "Gluten Alternative"],
      popular: true
    },
    {
      id: 2,
      name: "Dates & Walnut Brownie",
      description: "Fudgy, guilt-free, no refined sugar. Dense chocolate brownies sweetened with dates and loaded with crunchy walnuts.",
      image: "/assets/dateswalnutbrownie.png",
      features: ["No Refined Sugar", "Rich in Antioxidants", "Healthy Fats", "Protein Rich"],
      popular: true
    },
    {
      id: 3,
      name: "Oats Jaggery Cake",
      description: "Light, mildly spiced, perfect for all ages. A wholesome cake made with rolled oats and traditional jaggery for natural sweetness.",
      image: "/assets/oatsjaggry.png",
      features: ["High Fiber", "Low Glycemic", "Heart Healthy", "Digestive Friendly"],
      popular: false
    },
    {
      id: 4,
      name: "Ragi Chocolate Chunk Cake",
      description: "Decadent with cocoa and jaggery. Rich chocolate cake made with ragi flour and studded with dark chocolate chunks for the ultimate indulgence.",
      image: "/assets/ragichocochunk.png",
      features: ["Dark Chocolate", "Mineral Rich", "Natural Cocoa", "Antioxidant Rich"],
      popular: true
    },
    {
      id: 5,
      name: "Oats & Dates Mini Bites",
      description: "Ideal tea-time snack. Bite-sized treats perfect for portion control, made with rolled oats and sweet dates for natural energy.",
      image: "/assets/oatsdatesminibite.png",
      features: ["Portion Control", "Energy Boosting", "No Added Sugar", "Perfect for Kids"],
      popular: false
    },
    {
      id: 6,
      name: "Custom Cakes",
      description: "Customization available for special occasions. Let us create a personalized healthy cake for your birthdays, anniversaries, or celebrations.",
      image: "/assets/muffin.png",
      features: ["Personalized Design", "Custom Flavors", "Special Occasions", "Advance Booking"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#6B7F5A] to-[#5A6B4A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Healthy Menu</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Every treat is made with natural ingredients, no refined sugar, and lots of love. 
            Perfect for health-conscious families who don't want to compromise on taste.
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-[#6B7F5A]">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover"
                  />
                  {item.popular && (
                    <Badge className="absolute top-4 left-4 bg-[#6B7F5A] text-white">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Popular
                    </Badge>
                  )}
                 
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{item.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Health Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {item.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-[#6B7F5A]" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleWhatsAppOrder(item.name)}
                    className="w-full bg-[#6B7F5A] hover:bg-[#5A6B4A] text-white"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Order on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Information */}
      <section className="py-16 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Order</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-[#6B7F5A] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Choose Your Treat</h3>
              <p className="text-gray-600 text-sm">Browse our menu and select your favorite healthy treats</p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#6B7F5A] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900">WhatsApp Order</h3>
              <p className="text-gray-600 text-sm">Click "Order on WhatsApp" and send us your requirements</p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#6B7F5A] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Fresh Delivery</h3>
              <p className="text-gray-600 text-sm">Get your treats delivered fresh in 2-3 hours across Noida</p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-[#6B7F5A]/20">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-[#6B7F5A]" />
                <span>Pre-orders only (2-3 hours notice)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-[#6B7F5A]" />
                <span>Delivery available in Noida (201301-201318)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-[#6B7F5A]" />
                <span>Operating hours: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}