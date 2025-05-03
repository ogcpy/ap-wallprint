import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logoIconPath from "@assets/logo-02.png";
import heroVideo from "@assets/heroVideo.mp4"

export default function Hero() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Placeholder for video URL until one is provided
  // Once the user provides a video, this would be updated with the actual URL
  const placeholderImageUrl = "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";

  // This function can be called to update the video URL when provided later
  useEffect(() => {
    // This would be replaced with the actual video URL when provided
    // setVideoUrl("your-video-url-here.mp4");
    setVideoUrl(heroVideo);
  }, []);

  return (
    <section id="home" className="relative pt-16 md:pt-20 min-h-screen flex items-center">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoUrl ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            {/* Fallback to image if video cannot be played */}
            <div className="w-full h-full bg-cover bg-center" 
                 style={{ backgroundImage: `url(${placeholderImageUrl})` }}></div>
          </video>
        ) : (
          <div className="w-full h-full bg-cover bg-center" 
               style={{ backgroundImage: `url(${placeholderImageUrl})` }}></div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff0090]/80 to-[#00b8ff]/60"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* Logo */}
        <div className="flex items-center mb-6 md:mb-8">
          <img 
            src={logoIconPath} 
            alt="AP Wall Print" 
            className="h-14 sm:h-16 md:h-20 mr-4 md:mr-6 animate-pulse" 
          />
        </div>
        
        {/* Hero Content */}
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
            Redefining Spaces, <br className="hidden sm:block" />One Wall at a Time
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-light/90">
            Transforming blank walls into breathtaking stories that inspire and elevate spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="#contact" 
              className="bg-[#ff0090] hover:bg-[#ff0090]/90 text-white font-heading font-medium px-6 sm:px-8 py-3 rounded-md text-center transition"
            >
              Get a Quote
            </a>
            <a 
              href="#portfolio" 
              className="bg-white/20 hover:bg-white/30 text-white font-heading font-medium px-6 sm:px-8 py-3 rounded-md text-center transition"
            >
              View Our Work
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p className="mb-2 text-sm uppercase tracking-widest">Discover More</p>
          <div className="animate-bounce">
            <ChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
