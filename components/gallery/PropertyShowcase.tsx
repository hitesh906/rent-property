'use client';

import { motion } from 'framer-motion';
import { MapPin, Square, Users, Calendar } from 'lucide-react';
import { Property } from '@/lib/types';
import { fadeInUp } from '@/lib/animations';
import AnimatedButton from '@/components/common/AnimatedButton';

interface PropertyShowcaseProps {
  property: Property;
}

export default function PropertyShowcase({ property }: PropertyShowcaseProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden luxury-shadow hover:shadow-2xl transition-all duration-500"
      whileHover={{ y: -10 }}
    >
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-full capitalize">
            {property.category}
          </span>
        </div>

        {/* Price */}
        {/* <div className="absolute top-4 right-4">
          <span className="px-3 py-1 glass-effect text-white text-sm font-semibold rounded-full">
            ${property.price.toLocaleString()}/day
          </span>
        </div> */}

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{property.title}</h3>
        
        {/* <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{property.location}</span>
        </div> */}

        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 mb-4 leading-relaxed">
          {property.description}
        </p>

        {/* Property Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Square className="w-4 h-4 mr-2" />
            <span>{property.area.toLocaleString()} ft²</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Users className="w-4 h-4 mr-2" />
            <span>50+ Capacity</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {property.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded text-xs">
              +{property.features.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        {/* <div className="flex space-x-2">
          <AnimatedButton className="flex-1" size="sm">
            View Details
          </AnimatedButton>
          <AnimatedButton variant="outline" size="sm" className="flex-1">
            <Calendar className="w-4 h-4 mr-2" />
            Book Now
          </AnimatedButton>
        </div> */}
      </div>
    </motion.div>
  );
}