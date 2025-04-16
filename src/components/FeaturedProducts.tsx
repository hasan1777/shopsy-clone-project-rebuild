
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Star, ShoppingCart, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    category: "electronics",
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fit=crop&w=300&h=300",
    isFeatured: true,
    isOnSale: true
  },
  {
    id: 2,
    name: "Premium Cotton T-Shirt",
    category: "fashion",
    price: 29.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?fit=crop&w=300&h=300",
    isFeatured: true
  },
  {
    id: 3,
    name: "Smart Watch Series 5",
    category: "electronics",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?fit=crop&w=300&h=300",
    isNew: true,
    isFeatured: true
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    category: "fashion",
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?fit=crop&w=300&h=300",
    isFeatured: true,
    isOnSale: true
  },
  {
    id: 5,
    name: "Smart Home Speaker",
    category: "electronics",
    price: 129.99,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?fit=crop&w=300&h=300",
    isFeatured: true
  },
  {
    id: 6,
    name: "Ceramic Coffee Mug Set",
    category: "home",
    price: 24.99,
    oldPrice: 32.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1541145091430-2c71e7e15d0f?fit=crop&w=300&h=300",
    isFeatured: true,
    isOnSale: true
  },
  {
    id: 7,
    name: "Men's Running Shoes",
    category: "sports",
    price: 119.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fit=crop&w=300&h=300",
    isNew: true,
    isFeatured: true
  },
  {
    id: 8,
    name: "Skincare Gift Set",
    category: "beauty",
    price: 49.99,
    oldPrice: 59.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?fit=crop&w=300&h=300",
    isFeatured: true,
    isOnSale: true
  }
];

export function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <section className="bg-shopsy-bg-light py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-shopsy-dark">Featured Products</h2>
            <p className="text-shopsy-muted mt-2">Explore our top picks just for you</p>
          </div>
          <Link to="/products" className="flex items-center text-shopsy-primary font-semibold hover:underline">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="border-b w-full justify-start">
            <TabsTrigger value="all" className="px-8">All</TabsTrigger>
            <TabsTrigger value="new" className="px-8">New Arrivals</TabsTrigger>
            <TabsTrigger value="sale" className="px-8">On Sale</TabsTrigger>
            <TabsTrigger value="featured" className="px-8">Featured</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={toggleWishlist}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="new" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter(product => product.isNew)
                .map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    isWishlisted={wishlist.includes(product.id)}
                    onToggleWishlist={toggleWishlist}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="sale" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter(product => product.isOnSale)
                .map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    isWishlisted={wishlist.includes(product.id)}
                    onToggleWishlist={toggleWishlist}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="featured" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter(product => product.isFeatured)
                .map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    isWishlisted={wishlist.includes(product.id)}
                    onToggleWishlist={toggleWishlist}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
}

function ProductCard({ product, isWishlisted, onToggleWishlist }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover"
          />
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className={`absolute top-2 right-2 bg-white rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-400'}`}
          onClick={() => onToggleWishlist(product.id)}
        >
          <Heart className="h-5 w-5" fill={isWishlisted ? "currentColor" : "none"} />
        </Button>

        {product.isNew && (
          <div className="absolute top-2 left-2 bg-shopsy-secondary text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        {product.isOnSale && !product.isNew && (
          <div className="absolute top-2 left-2 bg-shopsy-primary text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>
      <CardContent className="pt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-shopsy-dark hover:text-shopsy-primary truncate">{product.name}</h3>
        </Link>
        <p className="text-sm text-shopsy-muted mb-2 capitalize">{product.category}</p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-4 w-4" 
              fill={i < Math.floor(product.rating) ? "#FFC107" : "none"}
              stroke={i < Math.floor(product.rating) ? "#FFC107" : "currentColor"}
            />
          ))}
          <span className="text-xs text-shopsy-muted ml-1">({product.rating})</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-shopsy-primary">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-shopsy-muted line-through ml-2 text-sm">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full bg-shopsy-dark hover:bg-shopsy-primary text-white">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default FeaturedProducts;
