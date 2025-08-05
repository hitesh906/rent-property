'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Square, Star } from 'lucide-react';
import { properties } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import AnimatedButton from '@/components/common/AnimatedButton';
import { useMediaQuery } from '@/hooks/use-media-query';

export default function PropertyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProperties = properties.filter(p => p.featured);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProperties.length);
  }, [featuredProperties.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length);
  }, [featuredProperties.length]);

  const handleDragEnd = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      // Swiped right
      prevSlide();
    } else if (info.offset.x < -100) {
      // Swiped left
      nextSlide();
    }
  }, [nextSlide, prevSlide]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="gold-text">Properties</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Discover our handpicked selection of premium locations, 
            each offering unique cinematic possibilities and luxury amenities.
          </motion.p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid md:grid-cols-2 gap-8 items-center"
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden rounded-2xl luxury-shadow">
                <motion.img
                  src={featuredProperties[currentIndex]?.images[0]}
                  alt={featuredProperties[currentIndex]?.title}
                  className="w-full h-[400px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">Featured</span>
                    </div>
                    <div className="text-2xl font-bold">
                      {/* ${featuredProperties[currentIndex]?.price.toLocaleString()}/day */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-6">
                <div>
                  <motion.h3
                    className="text-3xl font-bold mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {featuredProperties[currentIndex]?.title}
                  </motion.h3>
                  
                  {/* <motion.div
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <MapPin className="w-5 h-5" />
                    <span>{featuredProperties[currentIndex]?.location}</span>
                  </motion.div> */}

                  <motion.p
                    className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {featuredProperties[currentIndex]?.description}
                  </motion.p>
                </div>

                <motion.div
                  className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <Square className="w-4 h-4" />
                    <span>{featuredProperties[currentIndex]?.area.toLocaleString()} sq ft</span>
                  </div>
                  <div className="capitalize">
                    {/* {featuredProperties[currentIndex]?.category} */}
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {featuredProperties[currentIndex]?.features.slice(0, 4).map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <AnimatedButton size="lg">
                    View Details
                  </AnimatedButton>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Hidden on mobile */}
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full glass-effect hover:bg-yellow-500/20 transition-all duration-300 z-10"
                aria-label="Previous property"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full glass-effect hover:bg-yellow-500/20 transition-all duration-300 z-10"
                aria-label="Next property"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredProperties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}