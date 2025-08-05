'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { properties } from '@/lib/data';
import { FilterOptions } from '@/lib/types';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import PropertyShowcase from '@/components/gallery/PropertyShowcase';
import FilterSystem from '@/components/gallery/FilterSystem';

export default function Gallery() {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    location: 'all',
    priceRange: [0, 50000],
    features: [],
  });

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Category filter
      if (filters.category !== 'all' && property.category !== filters.category) {
        return false;
      }

      // Location filter (simplified - in real app, you'd have proper location matching)
      if (filters.location !== 'all') {
        const locationMap: { [key: string]: string[] } = {
          'beverly-hills': ['Beverly Hills'],
          'malibu': ['Malibu'],
          'downtown-la': ['Downtown LA'],
          'pasadena': ['Pasadena'],
        };
        
        const allowedLocations = locationMap[filters.location] || [];
        if (!allowedLocations.some(loc => property.location.includes(loc))) {
          return false;
        }
      }

      // Price filter
      if (property.price > filters.priceRange[1]) {
        return false;
      }

      // Features filter
      if (filters.features.length > 0) {
        const hasAllFeatures = filters.features.some(feature =>
          property.features.includes(feature)
        );
        if (!hasAllFeatures) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Property <span className="gold-text">Gallery</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Explore our curated collection of luxury properties, each offering 
              unique architectural beauty and cinematic potential for your next production.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter System */}
          <FilterSystem onFilterChange={setFilters} />

          {/* Results Summary */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-2xl font-semibold">
              {filteredProperties.length} Properties Found
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Sort by:</span>
              <select className="bg-transparent border-none focus:outline-none cursor-pointer">
                <option>Featured First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </motion.div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProperties.map((property) => (
                <PropertyShowcase key={property.id} property={property} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-semibold mb-4">No Properties Found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={() => setFilters({
                  category: 'all',
                  location: 'all',
                  priceRange: [0, 50000],
                  features: [],
                })}
                className="text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}