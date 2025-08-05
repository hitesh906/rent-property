'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, X } from 'lucide-react';
import { FilterOptions } from '@/lib/types';
import { fadeInUp } from '@/lib/animations';

interface FilterSystemProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const categories = [
  { value: 'all', label: 'All Properties' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'historical', label: 'Historical' },
  { value: 'modern', label: 'Modern' },
];

const locations = [
  { value: 'all', label: 'All Locations' },
  { value: 'beverly-hills', label: 'Beverly Hills' },
  { value: 'malibu', label: 'Malibu' },
  { value: 'downtown-la', label: 'Downtown LA' },
  { value: 'pasadena', label: 'Pasadena' },
];

const features = [
  'Ballroom', 'Pool', 'Gardens', 'Rooftop', 'Library', 'Wine Cellar',
  'Smart Home', 'High Ceilings', 'Natural Light', 'Parking'
];

export default function FilterSystem({ onFilterChange }: FilterSystemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter(f => f !== feature)
      : [...selectedFeatures, feature];
    
    setSelectedFeatures(newFeatures);
    updateFilters(selectedCategory, selectedLocation, priceRange, newFeatures);
  };

  const updateFilters = (category: string, location: string, price: [number, number], features: string[]) => {
    onFilterChange({
      category,
      location,
      priceRange: price,
      features,
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateFilters(category, selectedLocation, priceRange, selectedFeatures);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    updateFilters(selectedCategory, location, priceRange, selectedFeatures);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedLocation('all');
    setSelectedFeatures([]);
    setPriceRange([0, 50000]);
    setSearchTerm('');
    updateFilters('all', 'all', [0, 50000], []);
  };

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <motion.div
        variants={fadeInUp}
        className="relative mb-6"
      >
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-300"
        />
      </motion.div>

      {/* Filter Toggle */}
      <motion.div
        variants={fadeInUp}
        className="flex items-center justify-between mb-6"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-effect hover:bg-yellow-500/10 transition-all duration-300"
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>

        {(selectedCategory !== 'all' || selectedLocation !== 'all' || selectedFeatures.length > 0) && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <X className="w-4 h-4" />
            <span>Clear Filters</span>
          </button>
        )}
      </motion.div>

      {/* Filter Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 luxury-shadow mb-6 space-y-6"
        >
          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-3">Category</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-3">Location</h4>
            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <button
                  key={location.value}
                  onClick={() => handleLocationChange(location.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedLocation === location.value
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {location.label}
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <button
                  key={feature}
                  onClick={() => handleFeatureToggle(feature)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFeatures.includes(feature)
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-semibold mb-3">Price Range (per day)</h4>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => {
                  const newRange: [number, number] = [0, parseInt(e.target.value)];
                  setPriceRange(newRange);
                  updateFilters(selectedCategory, selectedLocation, newRange, selectedFeatures);
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>$0</span>
                <span className="font-semibold">${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}