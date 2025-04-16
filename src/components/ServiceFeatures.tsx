
import { Truck, Shield, RotateCcw, Clock, CreditCard } from "lucide-react";

interface ServiceFeature {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const features: ServiceFeature[] = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $75"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "100% protected payments"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30 day return policy"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "We're here to help"
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Pay with multiple cards"
  }
];

export function ServiceFeatures() {
  return (
    <section className="border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-shopsy-light p-3 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-shopsy-primary" />
              </div>
              <h3 className="font-semibold text-shopsy-dark mb-1">{feature.title}</h3>
              <p className="text-sm text-shopsy-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceFeatures;
