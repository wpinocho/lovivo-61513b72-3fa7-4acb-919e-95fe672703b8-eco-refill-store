import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Leaf, Heart, Users, Award, Target, Recycle } from 'lucide-react';
import type { UseAboutLogicReturn } from '@/components/headless/HeadlessAbout';

/**
 * EDITABLE UI - AboutUI
 * Professional About Us page for eco-friendly store
 */

interface AboutUIProps {
  logic: UseAboutLogicReturn;
}

export const AboutUI = ({ logic }: AboutUIProps) => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eco-lime via-white to-eco-lime/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-eco-green/10 text-eco-green px-4 py-2 rounded-full text-sm font-medium">
              <Leaf className="h-4 w-4" />
              Nuestra Historia
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-eco-dark">
              Sobre Nosotros
            </h1>
            
            <p className="text-xl text-eco-dark/70 max-w-3xl mx-auto">
              Creando un futuro más limpio y sostenible, una recarga a la vez
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-eco-dark">
                Nuestra Misión
              </h2>
              <p className="text-lg text-eco-dark/70">
                En EcoRefill, creemos que la limpieza del hogar no debería costarle al planeta. 
                Fundada en 2020, nuestra misión es revolucionar la industria de productos de limpieza 
                eliminando el desperdicio de plástico de un solo uso.
              </p>
              <p className="text-lg text-eco-dark/70">
                Cada año, miles de millones de botellas de plástico terminan en vertederos y océanos. 
                Nosotros ofrecemos una alternativa: productos de limpieza concentrados y recargables 
                que son igual de efectivos pero infinitamente más amigables con el medio ambiente.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=800&fit=crop" 
                  alt="Eco-friendly mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-eco-lime/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-eco-dark mb-4">
              Nuestros Valores
            </h2>
            <p className="text-eco-dark/60 max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-eco-lime rounded-full flex items-center justify-center">
                <Leaf className="h-8 w-8 text-eco-green" />
              </div>
              <h3 className="text-2xl font-bold text-eco-dark">Sostenibilidad</h3>
              <p className="text-eco-dark/70">
                Cada producto está diseñado pensando en el planeta. Usamos ingredientes 
                biodegradables y envases 100% reciclables.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-eco-lime rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-eco-green" />
              </div>
              <h3 className="text-2xl font-bold text-eco-dark">Transparencia</h3>
              <p className="text-eco-dark/70">
                Creemos en la honestidad total. Todos nuestros ingredientes están claramente 
                listados y explicados.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-eco-lime rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-eco-green" />
              </div>
              <h3 className="text-2xl font-bold text-eco-dark">Comunidad</h3>
              <p className="text-eco-dark/70">
                Construimos una comunidad de personas comprometidas con un estilo de vida 
                más sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-eco-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-eco-lime/80 max-w-2xl mx-auto">
              Juntos estamos haciendo una diferencia real
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-eco-lime">50K+</div>
              <div className="text-eco-lime/80">Botellas de Plástico Ahorradas</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-eco-lime">15K+</div>
              <div className="text-eco-lime/80">Familias Eco-Conscientes</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-eco-lime">98%</div>
              <div className="text-eco-lime/80">Reducción de Residuos</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-eco-lime">100%</div>
              <div className="text-eco-lime/80">Ingredientes Naturales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=800&fit=crop" 
                  alt="Environmental commitment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-bold text-eco-dark">
                Nuestro Compromiso Ambiental
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-eco-lime rounded-full flex items-center justify-center flex-shrink-0">
                    <Recycle className="h-6 w-6 text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-eco-dark mb-2">Cero Residuos</h3>
                    <p className="text-eco-dark/70">
                      Todos nuestros envases son reciclables o compostables. No generamos residuos innecesarios.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-eco-lime rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-eco-dark mb-2">Carbono Neutral</h3>
                    <p className="text-eco-dark/70">
                      Compensamos el 100% de nuestras emisiones de carbono a través de proyectos de reforestación.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-eco-lime rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-eco-dark mb-2">Certificaciones</h3>
                    <p className="text-eco-dark/70">
                      Certificados por EPA Safer Choice, USDA Biobased, y Cruelty Free International.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-eco-green to-eco-green/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Únete al Movimiento
          </h2>
          <p className="text-xl text-eco-lime/90">
            Cada recarga cuenta. Comienza tu viaje hacia un hogar más sostenible hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="/"
              className="inline-flex items-center justify-center bg-white text-eco-green hover:bg-eco-lime text-lg px-12 py-4 rounded-lg font-semibold transition-colors"
            >
              Ir a la Tienda
            </a>
            <a 
              href="#"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 text-lg px-12 py-4 rounded-lg font-semibold transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};