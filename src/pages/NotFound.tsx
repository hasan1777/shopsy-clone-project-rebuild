
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-shopsy-bg-light py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <Search className="w-16 h-16 mx-auto text-shopsy-primary mb-6" />
            <h1 className="text-5xl font-bold text-shopsy-dark mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-shopsy-dark mb-4">Page Not Found</h2>
            <p className="text-shopsy-muted mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-shopsy-primary hover:bg-shopsy-primary/90">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
