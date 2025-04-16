import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Check, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define form schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export default function QuoteForm() {
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    }
  });
  
  const onSubmit = (data: FormValues) => {
    // Format WhatsApp message
    const whatsappMessage = `*New Quote Request from AP Wall Print Website*%0A%0A*Name:* ${data.firstName} ${data.lastName}%0A*Email:* ${data.email}%0A*Phone:* ${data.phone}%0A*Project Type:* ${data.projectType}%0A%0A*Project Details:*%0A${data.message}`;
    
    // Phone number should be obtained from environment variable in production
    const phoneNumber = "1234567890";
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    
    // Show success toast
    toast({
      title: "Quote Request Sent!",
      description: "We'll be in touch with you shortly.",
    });
    
    // Reset form
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Ready to Transform Your Space?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Fill out the form to request a quote or discuss your project ideas. We'll respond within 24 hours to help bring your vision to life.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Why Choose AP Wall Print?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-[#4A90E2] text-xl mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Tailored Designs</p>
                    <p className="text-gray-600">Custom creations that match your vision and space</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4A90E2] text-xl mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Premium Quality</p>
                    <p className="text-gray-600">Durable materials with vibrant, long-lasting colors</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4A90E2] text-xl mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Expert Installation</p>
                    <p className="text-gray-600">Professional application for a flawless finish</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4A90E2] text-xl mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">End-to-End Support</p>
                    <p className="text-gray-600">Guidance from concept through to completion</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <Phone className="text-[#4A90E2] mr-3" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#4A90E2] mr-3" />
                <span>info@apwallprint.com</span>
              </div>
            </div>
          </div>
          
          {/* Quote Form */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-2xl mb-6">Get a Quote</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium">First Name*</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium">Last Name*</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Email*</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Phone Number*</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Project Type*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]">
                              <SelectValue placeholder="Select a project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential Wall Art</SelectItem>
                            <SelectItem value="commercial">Commercial Space</SelectItem>
                            <SelectItem value="mural">Wall Mural</SelectItem>
                            <SelectItem value="branding">Branded Environment</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Project Details*</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]" 
                            placeholder="Tell us about your space, ideas, and requirements..." 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white font-heading font-medium px-6 py-6 rounded-md transition flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 mr-2 fill-current">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                      </svg>
                      Request Quote via WhatsApp
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
