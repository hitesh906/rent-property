'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { properties } from '@/lib/data';
import { fadeInUp, staggerContainer, scaleUp } from '@/lib/animations';
import Image from 'next/image';

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Collect all images from properties
  const allImages = properties.flatMap(property => 
    property.images.map(image => ({
      src: image,
      title: property.title,
      location: property.location,
    }))
  ).slice(0, 8); // Limit to 8 images for the home page

  return (
    <section className="py-20">
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
            Visual <span className="gold-text">Showcase</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Immerse yourself in the breathtaking beauty of our exclusive properties, 
            each frame capturing the essence of luxury and sophistication.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 || index === 3 ? 'md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image.src}`}
                alt={image.title}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 || index === 3 ? 'h-[400px] md:h-[500px]' : 'h-[200px]'
                }`}
                 width={500}
  height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ZoomIn className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                <p className="text-xs text-gray-300">{image.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Selected property"
                  className="w-full h-full object-contain rounded-lg"
                   width={500}
  height={300}
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
                  aria-label="Close image"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}