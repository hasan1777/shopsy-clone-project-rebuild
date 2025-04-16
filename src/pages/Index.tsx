
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import TrendingProducts from "@/components/TrendingProducts";
import ServiceFeatures from "@/components/ServiceFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-shopsy-dark dark:text-white">
      <Navbar />
      <main>
        <HeroBanner />
        <CategorySection />
        <FeaturedProducts />
        <PromoBanner />
        <TrendingProducts />
        <ServiceFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
