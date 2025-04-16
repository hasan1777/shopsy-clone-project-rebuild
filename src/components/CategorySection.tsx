
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
  image: string;
  itemCount: number;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?fit=crop&w=300&h=300",
    itemCount: 254,
    link: "/categories/fashion"
  },
  {
    id: 2,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?fit=crop&w=300&h=300",
    itemCount: 189,
    link: "/categories/electronics"
  },
  {
    id: 3,
    name: "Home & Garden",
    image: "https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?fit=crop&w=300&h=300", 
    itemCount: 132,
    link: "/categories/home-garden"
  },
  {
    id: 4,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?fit=crop&w=300&h=300",
    itemCount: 87,
    link: "/categories/beauty"
  },
  {
    id: 5,
    name: "Sports",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?fit=crop&w=300&h=300",
    itemCount: 76,
    link: "/categories/sports"
  },
  {
    id: 6,
    name: "Books",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?fit=crop&w=300&h=300",
    itemCount: 54,
    link: "/categories/books"
  }
];

export function CategorySection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-shopsy-dark">Shop by Categories</h2>
            <p className="text-shopsy-muted mt-2">Find everything you need in one place</p>
          </div>
          <Link to="/categories" className="flex items-center text-shopsy-primary font-semibold hover:underline">
            Browse All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link to={category.link} key={category.id}>
              <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:translate-y-[-5px]">
                <CardContent className="p-0 relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm text-white/80">{category.itemCount} products</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
