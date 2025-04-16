import { Star } from "lucide-react";

// Define testimonial type
type Testimonial = {
  id: number;
  text: string;
  name: string;
  title: string;
  initials: string;
};

// Testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "AP Wall Print completely transformed our living room. The custom artwork they created captured exactly what we wanted, and the quality is exceptional.",
    name: "Sarah L.",
    title: "Residential Client",
    initials: "SL"
  },
  {
    id: 2,
    text: "Working with AP Wall Print for our office rebrand was seamless. They understood our corporate identity and created wall graphics that perfectly express our company culture.",
    name: "Michael B.",
    title: "Marketing Director",
    initials: "MB"
  },
  {
    id: 3,
    text: "The mural AP Wall Print created for our restaurant has become a talking point for all our customers. The installation was quick and professional, and the result is stunning.",
    name: "James T.",
    title: "Restaurant Owner",
    initials: "JT"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">What Our Clients Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Hear from customers who have transformed their spaces with AP Wall Print.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="text-yellow-300 mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current" size={16} />
                ))}
              </div>
              <p className="italic mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#4A90E2]/20 flex items-center justify-center mr-4">
                  <span className="font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
