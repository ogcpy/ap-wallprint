import { Check } from "lucide-react";

// Define service type
type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
};

// Services data
const services: Service[] = [
  {
    id: 1,
    title: "Custom Wall Art",
    description: "Personalized designs tailored to your style and space, from abstract art to photographic prints.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Museum-quality materials",
      "Color matching expertise",
      "Custom sizing options"
    ]
  },
  {
    id: 2,
    title: "Wall Murals & Wallpaper",
    description: "Transform entire walls with stunning murals and wallpapers that create immersive environments.",
    image: "https://images.unsplash.com/photo-1594056113573-f8efd1cfe9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Large-format printing",
      "Easy installation",
      "Durable, washable materials"
    ]
  },
  {
    id: 3,
    title: "Branded Environments",
    description: "Create impactful commercial spaces that reinforce your brand identity and values. We work closely with businesses to create cohesive spaces.",
    image: "https://images.unsplash.com/photo-1565800489013-c64a5955ed22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Brand integration",
      "Corporate messaging",
      "Environmental design",
      "Custom signage solutions",
      "Cohesive visual identity"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we can transform your walls with our premium printing solutions.
          </p>
        </div>
        
        {/* Services Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Two Services */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img 
                src={services[0].image} 
                alt={services[0].title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-3">{services[0].title}</h3>
              <p className="text-gray-600 mb-4">{services[0].description}</p>
              <ul className="text-gray-600 mb-4 space-y-2">
                {services[0].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-[#ff0090] mt-1 mr-2 h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img 
                src={services[1].image} 
                alt={services[1].title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-3">{services[1].title}</h3>
              <p className="text-gray-600 mb-4">{services[1].description}</p>
              <ul className="text-gray-600 mb-4 space-y-2">
                {services[1].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-[#ff0090] mt-1 mr-2 h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Third Service - Special Styling for Third Column/Full-Width Row */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="h-48 lg:h-48 overflow-hidden">
              <img 
                src={services[2].image} 
                alt={services[2].title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-3">{services[2].title}</h3>
              <p className="text-gray-600 mb-4">{services[2].description}</p>
              <ul className="text-gray-600 mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2">
                {services[2].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-[#ff0090] mt-1 mr-2 h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
