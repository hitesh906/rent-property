'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import ContactForm from '@/components/contact/ContactForm';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(555) 123-4567',
    description: 'Available 24/7 for urgent inquiries',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@prestigerentals.com',
    description: 'We respond within 2 hours',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '123 Luxury Lane, Beverly Hills, CA 90210',
    description: 'By appointment only',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM',
    description: 'Emergency support available',
  },
];

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 2-4 weeks in advance for the best selection. However, we often accommodate last-minute requests based on availability.',
  },
  {
    question: 'What\'s included in the rental?',
    answer: 'Each property includes basic amenities, parking, and utilities. Additional services like catering, security, and equipment rentals can be arranged.',
  },
  {
    question: 'Do you provide insurance coverage?',
    answer: 'We require production insurance for all shoots. We can recommend trusted insurance partners if needed.',
  },
  {
    question: 'Can I visit properties before booking?',
    answer: 'Yes! We offer scheduled property viewings and virtual tours to help you make the perfect choice for your project.',
  },
];

export default function Contact() {
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
              Let's Create <span className="gold-text">Together</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Ready to bring your vision to life? Our team of experts is here to help 
              you find the perfect property and ensure your production exceeds expectations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-black mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
                <p className="font-medium text-gray-900 dark:text-white mb-1">{info.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 luxury-shadow">
                <h3 className="text-2xl font-bold mb-4">Find Us</h3>
                <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400">Interactive Map</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Beverly Hills, CA</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Located in the heart of Beverly Hills, our showroom features select 
                  property displays and consultation spaces for our discerning clientele.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 luxury-shadow space-y-4">
                <h3 className="text-2xl font-bold mb-4">Quick Actions</h3>
                
                <motion.button
                  className="w-full flex items-center justify-between p-4 rounded-lg glass-effect hover:bg-yellow-500/10 transition-all duration-300 text-left"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-yellow-500" />
                    <span>Schedule Property Tour</span>
                  </div>
                  <span className="text-yellow-500">→</span>
                </motion.button>

                <motion.button
                  className="w-full flex items-center justify-between p-4 rounded-lg glass-effect hover:bg-yellow-500/10 transition-all duration-300 text-left"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-yellow-500" />
                    <span>Live Chat Support</span>
                  </div>
                  <span className="text-yellow-500">→</span>
                </motion.button>

                <motion.button
                  className="w-full flex items-center justify-between p-4 rounded-lg glass-effect hover:bg-yellow-500/10 transition-all duration-300 text-left"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-500" />
                    <span>Emergency Contact</span>
                  </div>
                  <span className="text-yellow-500">→</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">
                Frequently Asked <span className="gold-text">Questions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Find answers to common questions about our services and booking process.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="space-y-6"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 luxury-shadow"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}