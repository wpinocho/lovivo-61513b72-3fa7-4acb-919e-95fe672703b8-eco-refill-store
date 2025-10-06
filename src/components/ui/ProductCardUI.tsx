import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { Leaf } from "lucide-react"
import type { Product } from "@/lib/supabase"

/**
 * EDITABLE UI COMPONENT - ProductCardUI
 * Eco-friendly minimal design
 */

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-white border border-eco-green/20 hover:border-eco-green/40 transition-all hover:shadow-lg group">
          <CardContent className="p-4">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-eco-lime/20 rounded-xl mb-3 overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-eco-green/40">
                    <Leaf className="h-12 w-12" />
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {logic.discountPercentage && (
                    <span className="bg-eco-green text-white text-xs px-2 py-1 rounded-full font-medium">
                      -{logic.discountPercentage}%
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-eco-lime text-eco-green text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Out of stock
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-eco-dark font-semibold text-sm mb-1 line-clamp-2 group-hover:text-eco-green transition-colors">
                {logic.product.title}
              </h3>
              {logic.product.description && (
                <p className="text-eco-dark/60 text-xs mb-3 line-clamp-2">
                  {logic.product.description.replace(/<[^>]*>/g, '')}
                </p>
              )}
            </Link>

            {logic.hasVariants && logic.options && (
              <div className="mb-3 space-y-2">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className="text-xs font-medium text-eco-dark mb-1">{opt.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                        const isSelected = logic.selected[opt.name] === val
                        const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                        if (swatch) {
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              title={`${opt.name}: ${val}`}
                              className={`h-6 w-6 rounded-full border-2 ${
                                isSelected ? 'border-eco-green' : 'border-gray-300'
                              } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                              style={{ backgroundColor: swatch }}
                              aria-label={`${opt.name}: ${val}`}
                            />
                          )
                        }

                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => logic.handleOptionChange(opt.name, val)}
                            className={`border rounded-lg px-2 py-1 text-xs font-medium transition-all ${
                              isSelected 
                                ? 'border-eco-green bg-eco-green text-white' 
                                : logic.selected[opt.name] && !isSelected
                                  ? 'border-gray-300 bg-white text-gray-700 opacity-40'
                                  : 'border-eco-green/30 bg-white text-eco-dark hover:border-eco-green'
                            }`}
                            aria-pressed={isSelected}
                            aria-label={`${opt.name}: ${val}`}
                            title={`${opt.name}: ${val}`}
                          >
                            {val}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-eco-green font-bold text-lg">
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                  <span className="text-eco-dark/40 text-xs line-through">
                    {logic.formatMoney(logic.currentCompareAt)}
                  </span>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  logic.onAddToCartSuccess()
                  logic.handleAddToCart()
                }}
                disabled={!logic.canAddToCart}
                className="text-eco-green border-eco-green hover:bg-eco-green hover:text-white disabled:opacity-50 transition-all"
              >
                {logic.inStock ? 'Add' : 'Out of stock'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}