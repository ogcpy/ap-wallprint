import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";

// Define transformation slide type
type TransformationSlide = {
  id: number;
  beforeImage: string;
  afterImage: string;
  title: string;
};

// Transformation slides data
const transformationSlides: TransformationSlide[] = [
  {
    id: 1,
    beforeImage: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    afterImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Living Room Transformation"
  },
  {
    id: 2,
    beforeImage: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    afterImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Bedroom Makeover"
  },
  {
    id: 3,
    beforeImage: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    afterImage: "https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Office Space Redesign"
  }
];

export default function BeforeAfterSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? transformationSlides.length - 1 : prev - 1));
  };
  
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === transformationSlides.length - 1 ? 0 : prev + 1));
  };
  
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  
  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    const newPosition = ((clientX - containerRect.left) / containerRect.width) * 100;
    
    // Constrain between 0 and 100
    const constrainedPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(constrainedPosition);
  };
  
  useEffect(() => {
    // Reset slider position when changing slides
    setSliderPosition(50);
    
    // Add event listeners for mouse and touch events
    const handleMouseMove = (e: MouseEvent) => handleDrag(e);
    const handleTouchMove = (e: TouchEvent) => handleDrag(e);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleDragEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, currentSlide]);
  
  const currentTransformation = transformationSlides[currentSlide];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Transformations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the incredible difference our wall prints can make to any space.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-center">{currentTransformation.title}</h3>
          
          <div 
            ref={containerRef}
            className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl cursor-ew-resize"
          >
            {/* Before Image (Full width) */}
            <img 
              src={currentTransformation.beforeImage} 
              alt={`${currentTransformation.title} - Before`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* After Image (Clipped with mask) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={currentTransformation.afterImage} 
                alt={`${currentTransformation.title} - After`}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  width: `${100 / (sliderPosition / 100)}%`, // This makes it same size as original
                  maxWidth: 'none'
                }}
              />
            </div>
            
            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">Before</div>
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">After</div>
            
            {/* Slider Line */}
            <div 
              ref={sliderRef}
              className="absolute top-0 bottom-0 w-[2px] bg-white z-10"
              style={{ left: `${sliderPosition}%` }}
            ></div>
            
            {/* Slider Handle */}
            <div 
              className="absolute top-1/2 w-10 h-10 -mt-5 -ml-5 bg-[#ff0090] rounded-full flex items-center justify-center z-20 shadow-lg transform -translate-x-0 cursor-grab"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <MoveHorizontal className="text-white" size={20} />
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-6">
            <button 
              onClick={handlePrevSlide}
              className="bg-[#ff0090] text-white shadow-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#d10075] transition-colors duration-300"
              aria-label="Previous transformation"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextSlide}
              className="bg-[#ff0090] text-white shadow-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#d10075] transition-colors duration-300"
              aria-label="Next transformation"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
