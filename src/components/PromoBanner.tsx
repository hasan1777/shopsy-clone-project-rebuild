
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function PromoBanner() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Promo Banner */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl overflow-hidden relative">
            <div className="p-8 md:p-10 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block bg-shopsy-secondary/10 text-shopsy-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">Limited Time</span>
                <h3 className="text-2xl md:text-3xl font-bold text-shopsy-dark mb-3">Flash Sale! Up to 50% Off</h3>
                <p className="text-shopsy-muted mb-6">Don't miss out on our biggest sale of the season. Grab your favorites before they're gone!</p>
              </div>
              <Button 
                asChild
                className="bg-shopsy-secondary hover:bg-shopsy-secondary/90 text-white"
              >
                <Link to="/flash-sale">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 bg-contain bg-no-repeat bg-right-bottom" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588373472190-cb57e59c1b6e?fit=crop&w=200&h=400')" }}></div>
          </div>

          {/* Second Promo Banner */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl overflow-hidden relative">
            <div className="p-8 md:p-10 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block bg-shopsy-primary/10 text-shopsy-primary px-4 py-1 rounded-full text-sm font-medium mb-4">New Collection</span>
                <h3 className="text-2xl md:text-3xl font-bold text-shopsy-dark mb-3">Summer 2025 is Here</h3>
                <p className="text-shopsy-muted mb-6">Explore the latest trends and elevate your style with our exclusive summer collection.</p>
              </div>
              <Button 
                asChild
                className="bg-shopsy-primary hover:bg-shopsy-primary/90 text-white"
              >
                <Link to="/summer-collection">
                  Discover Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 bg-contain bg-no-repeat bg-right-bottom" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588099768523-f4e6a5300f5b?fit=crop&w=200&h=400')" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;
