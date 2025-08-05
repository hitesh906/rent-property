'use client';

import { motion } from 'framer-motion';
import { Play, ChevronDown, Book } from 'lucide-react';
import AnimatedButton from '@/components/common/AnimatedButton';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
        >
          <source src="/Made-with-Clipchamp.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              variants={fadeInLeft}
            >
              
              <span className="block gold-text gold-shimmer">Vivasvan</span>
            </motion.h1>
            
            {/* <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInRight}
            >
              Discover exclusive luxury properties crafted for film, photography, 
              and commercial productions. Where architectural mastery meets creative vision.
            </motion.p> */}

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              {/* <AnimatedButton size="lg" className="min-w-[200px]">
                Explore Properties
              </AnimatedButton> */}
              
              {/* <AnimatedButton variant="outline" size="lg" className="min-w-[200px] text-white border-white hover:bg-white hover:text-black">
                <Play className="w-5 h-5 mr-2" />
                Watch Showcase
              </AnimatedButton> */}
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gold-text">500+</div>
                <div className="text-sm text-gray-300 mt-1">Productions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gold-text">50+</div>
                <div className="text-sm text-gray-300 mt-1">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gold-text">15</div>
                <div className="text-sm text-gray-300 mt-1">Years</div>
              </div>
            </motion.div> */}
            <motion.div variants={fadeInUp}>
                          <a
  href="https://wa.me/919876543210?text=Hello%2C%20would%20like%20to%20book%20the%20property."
  target="_blank"
  rel="noopener noreferrer"
>
  <AnimatedButton size="lg">
    <div className='flex items-center'>
    <Book className="w-5 h-5 mr-2" />
    Book Now
    </div>
  </AnimatedButton>
</a>

                        </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}