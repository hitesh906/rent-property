'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Book, Home, Camera, Star } from 'lucide-react';
import AnimatedButton from '@/components/common/AnimatedButton';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';
import { useState, useEffect } from 'react';
import React from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Luxury Property Rentals",
      subtitle: "Discover exclusive properties for film, photography, and commercial productions",
      description: "Where architectural mastery meets creative vision. Perfect locations for your next project.",
      icon: Home
    },
    {
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Film & Photography Ready",
      subtitle: "Professionally curated spaces designed for creative excellence",
      description: "Every property is carefully selected and prepared for professional productions.",
      icon: Camera
    },
    {
      image: "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Premium Locations",
      subtitle: "Access to the most sought-after properties in prime locations",
      description: "From urban lofts to countryside estates, find the perfect backdrop for your vision.",
      icon: Star
    },
    {
      image: "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Seamless Booking",
      subtitle: "Easy booking process with professional support throughout",
      description: "Book your perfect location with confidence. Our team ensures everything runs smoothly.",
      icon: Book
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Black transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="mb-6"
              variants={fadeInLeft}
            >
              {heroSlides[currentSlide] && (
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                    {React.createElement(heroSlides[currentSlide].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
              variants={fadeInLeft}
            >
              <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                {heroSlides[currentSlide]?.title || "Luxury Property Rentals"}
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-100 max-w-3xl mx-auto leading-relaxed font-medium tracking-wide"
              variants={fadeInRight}
            >
              {heroSlides[currentSlide]?.subtitle || "Discover exclusive properties"}
            </motion.p>

            <motion.p
              className="text-base md:text-lg lg:text-xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed font-normal tracking-normal"
              variants={fadeInRight}
            >
              {heroSlides[currentSlide]?.description || "Perfect locations for your next project"}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 right-8 text-white/80 hover:text-white transition-all duration-300 z-20 group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to next section"
      >
        {/* <div className="relative">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full p-4 -m-4 group-hover:bg-white/20 transition-all duration-300"></div>
          <ChevronDown className="w-8 h-8 relative z-10 drop-shadow-lg" />
        </div> */}
      </motion.button>
    </section>
  );
}
