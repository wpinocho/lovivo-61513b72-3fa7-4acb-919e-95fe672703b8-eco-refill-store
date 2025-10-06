import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Leaf, Droplets, Award, Recycle } from 'lucide-react';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * Minimal eco-friendly cleaning & refillables store homepage
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    filteredProducts,
    loading,
  } = logic;

  // Find the starter kit product
  const starterKit = filteredProducts.find(p => p.slug === 'eco-refill-starter-kit');
  const refillProducts = filteredProducts.filter(p => p.slug !== 'eco-refill-starter-kit');

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section - "Less plastic" */}
      <section className="relative bg-gradient-to-br from-eco-lime via-white to-eco-lime/50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-eco-green/10 text-eco-green px-4 py-2 rounded-full text-sm font-medium">
                <Leaf className="h-4 w-4" />
                Certified Eco-Friendly
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-eco-dark leading-tight">
                Less plastic.
                <span className="block text-eco-green">More planet.</span>
              </h1>
              
              <p className="text-lg text-eco-dark/70 max-w-lg">
                Refillable cleaning solutions that are kind to your home and the Earth. 
                Join thousands making the switch to sustainable cleaning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-eco-green hover:bg-eco-green/90 text-white text-lg px-8 py-6"
                  onClick={() => {
                    const productsSection = document.getElementById('products');
                    productsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Go Refill
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-eco-green text-eco-green hover:bg-eco-green/10 text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&h=800&fit=crop" 
                  alt="Eco-friendly refill bottles"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="bg-eco-lime rounded-full p-3">
                    <Recycle className="h-6 w-6 text-eco-green" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-eco-green">2,847</div>
                    <div className="text-sm text-eco-dark/60">Bottles saved this month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottles Saved Indicator */}
      <section className="bg-eco-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-eco-lime">50K+</div>
              <div className="text-eco-lime/80 text-sm md:text-base">Plastic Bottles Saved</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-eco-lime">98%</div>
              <div className="text-eco-lime/80 text-sm md:text-base">Less Plastic Waste</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-eco-lime">100%</div>
              <div className="text-eco-lime/80 text-sm md:text-base">Plant-Based Formula</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-eco-lime">15K+</div>
              <div className="text-eco-lime/80 text-sm md:text-base">Happy Refill Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* Refill Starter Kit Section */}
      {starterKit && (
        <section className="py-16 bg-white" id="products">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">
                Start Your Refill Journey
              </h2>
              <p className="text-eco-dark/60 max-w-2xl mx-auto">
                Everything you need to begin living plastic-free. Our starter kit includes reusable bottles and concentrated refills.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-eco-lime/30 rounded-3xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white">
                    <img 
                      src={starterKit.images?.[0] || ''} 
                      alt={starterKit.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="inline-block bg-eco-green text-white text-xs px-3 py-1 rounded-full font-medium">
                      BEST VALUE
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-eco-dark">
                      {starterKit.title}
                    </h3>
                    <p className="text-eco-dark/70">
                      {starterKit.description}
                    </p>
                    
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-eco-green">
                        ${starterKit.price}
                      </span>
                      {starterKit.compare_at_price && (
                        <span className="text-lg text-eco-dark/40 line-through">
                          ${starterKit.compare_at_price}
                        </span>
                      )}
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-eco-green hover:bg-eco-green/90 text-white"
                      onClick={() => {
                        // Add to cart logic is handled by ProductCard
                        const productCard = document.querySelector(`[data-product-id="${starterKit.id}"]`);
                        if (productCard) {
                          const addButton = productCard.querySelector('button');
                          addButton?.click();
                        }
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Certifications Section */}
      <section className="py-16 bg-eco-lime/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">
              Certified & Trusted
            </h2>
            <p className="text-eco-dark/60">
              Our commitment to sustainability is backed by industry-leading certifications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-eco-lime rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-eco-green" />
              </div>
              <div className="font-semibold text-eco-dark">EPA Safer Choice</div>
              <div className="text-sm text-eco-dark/60">Certified safe ingredients</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-eco-lime rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-eco-green" />
              </div>
              <div className="font-semibold text-eco-dark">USDA Biobased</div>
              <div className="text-sm text-eco-dark/60">Plant-derived formula</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-eco-lime rounded-full flex items-center justify-center mx-auto">
                <Droplets className="h-8 w-8 text-eco-green" />
              </div>
              <div className="font-semibold text-eco-dark">Cruelty Free</div>
              <div className="text-sm text-eco-dark/60">Never tested on animals</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-eco-lime rounded-full flex items-center justify-center mx-auto">
                <Recycle className="h-8 w-8 text-eco-green" />
              </div>
              <div className="font-semibold text-eco-dark">Zero Waste</div>
              <div className="text-sm text-eco-dark/60">Compostable packaging</div>
            </div>
          </div>
        </div>
      </section>

      {/* Refill Products Section */}
      {!loading && refillProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">
                Individual Refills
              </h2>
              <p className="text-eco-dark/60">
                Stock up on your favorite cleaning solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {refillProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-eco-green to-eco-green/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Go Refill?
          </h2>
          <p className="text-xl text-eco-lime/90">
            Join the movement towards sustainable cleaning. Every refill makes a difference.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-eco-green hover:bg-eco-lime text-lg px-12 py-6"
            onClick={() => {
              const productsSection = document.getElementById('products');
              productsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Shop Refills Now
          </Button>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};