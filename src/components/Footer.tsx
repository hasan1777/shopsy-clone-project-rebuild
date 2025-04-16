
import { Link } from "react-router-dom";
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MapPinIcon, PhoneIcon, MailIcon, CreditCard, DollarSign, CreditCardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-shopsy-dark text-white">
      {/* Newsletter Section */}
      <div className="bg-shopsy-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Subscribe to our Newsletter</h3>
              <p className="text-white/80 mt-2">Get the latest updates on new products and special sales</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-white text-shopsy-dark focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[250px]"
              />
              <Button className="bg-white text-shopsy-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h1 className="text-3xl font-bold text-white">Shopsy</h1>
            </Link>
            <p className="text-white/70 mb-4">
              Discover the latest trends in fashion, electronics, home decor and more with Shopsy - your one-stop shop for all your needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-white/10 p-2 rounded-full hover:bg-shopsy-primary transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="bg-white/10 p-2 rounded-full hover:bg-shopsy-primary transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="bg-white/10 p-2 rounded-full hover:bg-shopsy-primary transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="bg-white/10 p-2 rounded-full hover:bg-shopsy-primary transition-colors">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-white/70 hover:text-shopsy-primary transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/categories" className="text-white/70 hover:text-shopsy-primary transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/trending" className="text-white/70 hover:text-shopsy-primary transition-colors">Trending</Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-white/70 hover:text-shopsy-primary transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link to="/deals" className="text-white/70 hover:text-shopsy-primary transition-colors">Deals</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-white/70 hover:text-shopsy-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-shopsy-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/returns" className="text-white/70 hover:text-shopsy-primary transition-colors">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white/70 hover:text-shopsy-primary transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-shopsy-primary transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 text-shopsy-primary flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  123 Street Name, City, Country
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-shopsy-primary flex-shrink-0" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 text-shopsy-primary flex-shrink-0" />
                <span className="text-white/70">support@shopsy.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">We Accept</h4>
              <div className="flex space-x-3">
                <CreditCard className="h-6 w-6 text-white/70" />
                <DollarSign className="h-6 w-6 text-white/70" />
                <CreditCardIcon className="h-6 w-6 text-white/70" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} Shopsy. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/terms" className="text-white/70 hover:text-shopsy-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-white/70 hover:text-shopsy-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-white/70 hover:text-shopsy-primary transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
