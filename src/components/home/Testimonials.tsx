import React, { useState, useEffect } from 'react';
import { testimonials } from '../../utils/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this to your animation duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto advance testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We've helped businesses of all sizes achieve their goals with custom digital solutions.
            Here's what they have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <svg className="w-10 h-10 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.7 8c-1.87 0-3.4 1.53-3.4 3.4 0 1.87 1.53 3.4 3.4 3.4.33 0 .65-.05.96-.14-.36 2.42-1.93 4.1-1.95 4.12L8 20.6l1.42 1.42c.1.08 1.83 1.75 4.27 2.48.86.25 1.73.38 2.6.38 2.38 0 4.47-.9 5.84-2.5 1.37-1.6 2.04-3.86 1.87-6.3-.17-2.33-1.33-4.8-2.7-6.28-1.38-1.48-3.22-2.8-5.6-2.8H10.7zm0 2h5c1.74 0 3.16.98 4.33 2.25 1.17 1.27 2.13 3.18 2.27 5.03.14 1.96-.35 3.62-1.32 4.78-.97 1.15-2.43 1.82-4.28 1.82-.68 0-1.34-.08-1.97-.28-1.3-.39-2.27-1.03-2.86-1.54.6-.9 1.6-2.82 1.75-5.04l.04-.72-.62-.36c-.17-.1-.33-.22-.48-.33-.15-.1-.3-.18-.45-.28-.15-.09-.3-.17-.45-.23-.15-.07-.3-.12-.45-.15-.12-.02-.25-.03-.37-.05-.13-.02-.25-.05-.37-.05H10.7c-.76 0-1.4-.63-1.4-1.4 0-.77.64-1.4 1.4-1.4zm10.6 0c-1.87 0-3.4 1.53-3.4 3.4 0 1.87 1.53 3.4 3.4 3.4.33 0 .65-.05.96-.14-.36 2.42-1.93 4.1-1.95 4.12L19 20.6l1.42 1.42c.1.08 1.83 1.75 4.27 2.48.86.25 1.73.38 2.6.38 2.38 0 4.47-.9 5.84-2.5 1.37-1.6 2.04-3.86 1.87-6.3-.17-2.33-1.33-4.8-2.7-6.28-1.38-1.48-3.22-2.8-5.6-2.8h-5zm0 2h5c1.73 0 3.15.98 4.32 2.25 1.17 1.27 2.14 3.18 2.28 5.03.14 1.96-.35 3.62-1.32 4.78-.97 1.15-2.43 1.82-4.28 1.82-.68 0-1.34-.08-1.97-.28-1.3-.39-2.27-1.03-2.86-1.54.6-.9 1.6-2.82 1.75-5.04l.04-.72-.62-.36c-.17-.1-.33-.22-.48-.33-.15-.1-.3-.18-.45-.28-.15-.09-.3-.17-.45-.23-.15-.07-.3-.12-.45-.15-.12-.02-.25-.03-.37-.05-.13-.02-.25-.05-.37-.05h-.17c-.76 0-1.4-.63-1.4-1.4 0-.77.64-1.4 1.4-1.4z"/>
                        </svg>
                        <p className="text-blue-50 text-lg italic mb-6">
                          "{testimonial.testimonial}"
                        </p>
                        <div>
                          <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                          <p className="text-blue-200">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;