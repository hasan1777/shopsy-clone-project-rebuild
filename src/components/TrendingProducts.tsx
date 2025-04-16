
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface TrendingProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const trendingProducts: TrendingProduct[] = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?fit=crop&w=300&h=300",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Canvas Tote Bag",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1605133659297-59a45a46ef77?fit=crop&w=300&h=300",
    category: "Fashion"
  },
  {
    id: 3,
    name: "Smart LED Light Strip",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1594549181132-9045fed330ce?fit=crop&w=300&h=300",
    category: "Home"
  },
  {
    id: 4,
    name: "Fitness Tracker Watch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?fit=crop&w=300&h=300",
    category: "Fitness"
  }
];

export function TrendingProducts() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-shopsy-dark">Trending Now</h2>
            <p className="text-shopsy-muted mt-2">The most popular products this week</p>
          </div>
          <Link to="/trending" className="flex items-center text-shopsy-primary font-semibold hover:underline">
            See All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-shopsy-primary text-white px-3 py-1 m-3 text-xs font-medium rounded">
                      TRENDING
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-shopsy-muted mb-1">{product.category}</div>
                    <h3 className="font-medium text-shopsy-dark">{product.name}</h3>
                    <div className="font-bold text-shopsy-primary mt-1">${product.price.toFixed(2)}</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            asChild
            className="bg-shopsy-dark hover:bg-shopsy-primary text-white px-8 py-6"
          >
            <Link to="/trending">
              View All Trending Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TrendingProducts;
