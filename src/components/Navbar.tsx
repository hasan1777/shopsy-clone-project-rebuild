
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-shopsy-dark dark:text-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-shopsy-primary">Shopsy</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary font-medium transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary font-medium transition-colors">
              Categories
            </Link>
            <Link to="/deals" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary font-medium transition-colors">
              Deals
            </Link>
            <Link to="/contact" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-shopsy-primary/50"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary dark:hover:text-shopsy-primary">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary dark:hover:text-shopsy-primary">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary dark:hover:text-shopsy-primary">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="text-shopsy-dark dark:text-white hover:text-shopsy-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-shopsy-dark dark:text-white hover:text-shopsy-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/categories" 
                className="text-shopsy-dark dark:text-white hover:text-shopsy-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/deals" 
                className="text-shopsy-dark dark:text-white hover:text-shopsy-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
              <Link 
                to="/contact" 
                className="text-shopsy-dark dark:text-white hover:text-shopsy-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-2 pb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-full w-full focus:outline-none focus:ring-2 focus:ring-shopsy-primary/50"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-2">
                <Button variant="ghost" size="icon" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary dark:hover:text-shopsy-primary">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary dark:hover:text-shopsy-primary">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-shopsy-dark dark:text-white hover:text-shopsy-primary dark:hover:text-shopsy-primary">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
