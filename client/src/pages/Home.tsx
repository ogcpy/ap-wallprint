import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Smooth scrolling for navigation links
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    };

    document.body.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.body.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="font-body text-dark bg-light">
      <Header />
      <Hero />
      <Portfolio />
      <BeforeAfterSlider />
      <Services />
      <Testimonials />
      <QuoteForm />
      <Footer />
    </div>
  );
}
