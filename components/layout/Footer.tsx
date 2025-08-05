'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Crown, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const quickLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
  { name: 'Careers', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="w-8 h-8 text-yellow-500" />
              <div>
                <h3 className="text-2xl font-bold gold-text">Vivasvan</h3>
                <p className="text-sm text-gray-400 -mt-1">Elite Rentals</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing exclusive, luxury properties for film, photography, and commercial productions. 
              Where cinematic dreams meet architectural excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full glass-effect hover:bg-yellow-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-yellow-500" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 gold-text">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">hello@prestigerentals.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Luxury Lane<br />
                  Beverly Hills, CA 90210
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 gold-text">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          {/* <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 gold-text">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to receive updates on new properties and exclusive offers.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500"
              />
              <motion.button
                className="w-full px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Blue ticks innovation All rights reserved.
          </p>
          {/* <p className="text-gray-400 text-sm">
            Crafted with excellence for cinematic perfection.
          </p> */}
        </motion.div>
      </div>
    </footer>
  );
}