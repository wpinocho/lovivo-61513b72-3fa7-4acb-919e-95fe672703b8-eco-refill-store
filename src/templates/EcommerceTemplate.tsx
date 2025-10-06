import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Leaf } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * Eco-friendly minimal design
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white border-b border-eco-green/10 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-eco-green rounded-full flex items-center justify-center">
                <Leaf className="h-5 w-5 text-eco-lime" />
              </div>
              <span className="text-xl font-bold text-eco-dark">EcoRefill</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-eco-dark/70 hover:text-eco-green transition-colors font-medium"
              >
                Tienda
              </Link>
              <Link 
                to="/about" 
                className="text-eco-dark/70 hover:text-eco-green transition-colors font-medium"
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/blog" 
                className="text-eco-dark/70 hover:text-eco-green transition-colors font-medium"
              >
                Blog
              </Link>
              <a 
                href="#impact" 
                className="text-eco-dark/70 hover:text-eco-green transition-colors font-medium"
              >
                Impacto
              </a>
            </nav>
          </div>

          {/* Cart */}
          {showCart && (
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative hover:bg-eco-lime/50"
            >
              <ShoppingCart className="h-5 w-5 text-eco-green" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-eco-green text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          )}
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-eco-dark">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-eco-dark text-white py-12 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-eco-green rounded-full flex items-center justify-center">
                <Leaf className="h-5 w-5 text-eco-lime" />
              </div>
              <span className="text-xl font-bold">EcoRefill</span>
            </div>
            <p className="text-white/70 text-sm">
              Soluciones de limpieza sostenibles para un planeta más saludable. Una recarga a la vez.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4 text-eco-lime">Tienda</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Kits de Inicio
              </Link>
              <Link 
                to="/" 
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Recargas
              </Link>
              <Link 
                to="/" 
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Accesorios
              </Link>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4 text-eco-lime">Aprende</h3>
            <div className="space-y-2">
              <Link 
                to="/about" 
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/blog" 
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Blog
              </Link>
              <a 
                href="#" 
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Cómo Funciona
              </a>
              <a 
                href="#" 
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Nuestro Impacto
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-eco-lime">Conecta</h3>
            <SocialLinks />
            <div className="mt-4 space-y-2">
              <a 
                href="#" 
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Contáctanos
              </a>
              <a 
                href="#" 
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            &copy; 2024 EcoRefill. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Leaf className="h-4 w-4 text-eco-lime" />
            <span>Corporación B Certificada</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}