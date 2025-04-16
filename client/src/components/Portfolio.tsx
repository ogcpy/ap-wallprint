import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Define portfolio items type
type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
};

// Portfolio items data
const allPortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Living Room Transformation",
    description: "Custom abstract art for a contemporary home",
    category: "residential",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Serene Bedroom Sanctuary",
    description: "Nature-inspired mural creating a peaceful atmosphere",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Creative Office Space",
    description: "Motivational graphics for a tech startup",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Boutique Retail Experience",
    description: "Custom wall treatment enhancing brand identity",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1555529771-7888783a18d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Abstract Composition",
    description: "Commission for a modern home gallery",
    category: "custom",
    image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Corporate Headquarters",
    description: "Brand-aligned environmental graphics",
    category: "branded",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Luxury Retail Store",
    description: "Elegant wall designs for high-end fashion retail",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Minimalist Apartment",
    description: "Clean, modern wall art for urban living",
    category: "residential",
    image: "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Restaurant Interior Design",
    description: "Thematic wall murals for dining experience",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Tech Startup Headquarters",
    description: "Innovative wall graphics for a collaborative workspace",
    category: "branded",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Children's Play Area",
    description: "Colorful educational wall murals for kids",
    category: "custom",
    image: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "Corporate Conference Room",
    description: "Professional wall treatments for meeting spaces",
    category: "branded",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [visibleItems, setVisibleItems] = useState(6);
  const [portfolioItems, setPortfolioItems] = useState(allPortfolioItems.slice(0, visibleItems));
  const [showAllFilters, setShowAllFilters] = useState(false);
  
  // Handle escape key press to close fullscreen view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedItem) {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  // Prevent scrolling when fullscreen view is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);
  
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setVisibleItems(6); // Reset visible items when changing filter
    setPortfolioItems(allPortfolioItems.slice(0, 6));
  };
  
  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleLoadMore = () => {
    const nextVisibleItems = visibleItems + 6;
    setVisibleItems(nextVisibleItems);
    setPortfolioItems(allPortfolioItems.slice(0, nextVisibleItems));
  };

  const totalFilteredCount = activeFilter === "all" 
    ? allPortfolioItems.length 
    : allPortfolioItems.filter(item => item.category === activeFilter).length;

  const hasMoreItems = filteredItems.length < totalFilteredCount;

  // Primary filters always visible
  // Define category colors from logo palette
  const categoryColors = {
    all: "#ff0090", // Primary pink from logo
    residential: "#e91e63", // Lighter pink
    commercial: "#9c27b0", // Purple
    custom: "#d81b60", // Darker pink
    branded: "#6a0080" // Deep purple
  };
  
  const primaryFilters = ["all", "residential", "commercial"];
  // Secondary filters toggle on smaller screens
  const secondaryFilters = ["custom", "branded"];

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of custom wall prints, murals, and transformative designs for various spaces.
          </p>
        </div>
        
        {/* Portfolio Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
          {/* Primary filters - always visible */}
          {primaryFilters.map(filter => (
            <button 
              key={filter}
              className={`px-4 sm:px-5 py-2 rounded-full font-heading text-sm sm:text-base transition-colors ${
                activeFilter === filter ? "text-white" : "bg-gray-200"
              }`}
              style={{
                backgroundColor: activeFilter === filter 
                  ? categoryColors[filter as keyof typeof categoryColors] 
                  : undefined,
              }}
              onClick={() => handleFilterClick(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
          
          {/* Secondary filters - visible based on screen size or toggle */}
          <div className={`hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3`}>
            {secondaryFilters.map(filter => (
              <button 
                key={filter}
                className={`px-4 sm:px-5 py-2 rounded-full font-heading text-sm sm:text-base transition-colors ${
                  activeFilter === filter ? "text-white" : "bg-gray-200"
                }`}
                style={{
                  backgroundColor: activeFilter === filter 
                    ? categoryColors[filter as keyof typeof categoryColors] 
                    : undefined,
                  ...(activeFilter !== filter && {
                    ':hover': {
                      backgroundColor: `${categoryColors[filter as keyof typeof categoryColors]}20`
                    }
                  })
                }}
                onClick={() => handleFilterClick(filter)}
              >
                {filter === "custom" ? "Custom Art" : "Branded Environments"}
              </button>
            ))}
          </div>
          
          {/* More filters toggle on small screens */}
          <div className="sm:hidden flex flex-wrap justify-center">
            <button
              className="px-4 py-2 rounded-full font-heading text-sm bg-gray-200 hover:bg-gray-300 transition-colors"
              onClick={() => setShowAllFilters(!showAllFilters)}
            >
              {showAllFilters ? "Less Filters" : "More Filters"}
            </button>
            
            {showAllFilters && (
              <div className="w-full flex flex-wrap justify-center gap-2 mt-2">
                {secondaryFilters.map(filter => (
                  <button 
                    key={filter}
                    className={`px-4 py-2 rounded-full font-heading text-sm transition-colors ${
                      activeFilter === filter ? "text-white" : "bg-gray-200"
                    }`}
                    style={{
                      backgroundColor: activeFilter === filter 
                        ? categoryColors[filter as keyof typeof categoryColors] 
                        : undefined
                    }}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {filter === "custom" ? "Custom Art" : "Branded Environments"}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden h-56 sm:h-64">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay with text */}
                {/* Category tag */}
                <div 
                  className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium text-white z-10"
                  style={{ backgroundColor: categoryColors[item.category as keyof typeof categoryColors] || categoryColors.all }}
                >
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-white">{item.title}</h3>
                  <p className="text-white/90 text-xs sm:text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No projects found for this category. Try another filter.</p>
          </div>
        )}
        
        {/* Load More Button */}
        {hasMoreItems && (
          <div className="text-center mt-8 md:mt-10">
            <button 
              onClick={handleLoadMore}
              className="text-white font-heading font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:opacity-90 transition-opacity duration-300 text-sm sm:text-base"
              style={{ 
                backgroundColor: categoryColors[activeFilter as keyof typeof categoryColors] || categoryColors.all 
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Image Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Close fullscreen view"
          >
            <X className="text-white" size={24} />
          </button>
          <div className="w-full max-w-5xl max-h-[90vh] relative">
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-8">
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-white mb-1 sm:mb-2">{selectedItem.title}</h3>
              <p className="text-white/90 text-sm sm:text-base">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
