
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface BannerSlide {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  backgroundColor: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    title: "Summer Collection 2025",
    description: "Discover our new summer collections and save up to 50% on selected items.",
    buttonText: "Shop Now",
    buttonLink: "/collections/summer",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?fit=crop&w=800&h=500",
    backgroundColor: "bg-shopsy-light"
  },
  {
    id: 2,
    title: "Latest Electronics",
    description: "Upgrade your tech with our latest gadgets and electronics arrivals.",
    buttonText: "Explore",
    buttonLink: "/categories/electronics",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=800&h=500",
    backgroundColor: "bg-blue-50"
  },
  {
    id: 3,
    title: "Home Decor Collection",
    description: "Transform your space with our curated home decor collection.",
    buttonText: "Discover More",
    buttonLink: "/categories/home-decor",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?fit=crop&w=800&h=500",
    backgroundColor: "bg-green-50"
  }
];

export function HeroBanner() {
  return (
    <section className="relative">
      <Carousel 
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        className="hero-carousel"
      >
        {bannerSlides.map((slide) => (
          <div 
            key={slide.id} 
            className={`${slide.backgroundColor} py-12 md:py-24`}
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-left mb-8 md:mb-0 md:pr-8 animate-fade-in">
                  <h1 className="text-3xl md:text-5xl font-bold text-shopsy-dark mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-shopsy-muted text-lg mb-6">
                    {slide.description}
                  </p>
                  <Button 
                    asChild
                    className="bg-shopsy-primary hover:bg-shopsy-primary/90 text-white px-8 py-6 rounded-full"
                  >
                    <Link to={slide.buttonLink}>
                      {slide.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="md:w-1/2 animate-slide-in">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default HeroBanner;
