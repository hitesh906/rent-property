'use client';

import { motion } from 'framer-motion';
import { Award, Users, Star, Crown, Play, ChevronRight } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import AnimatedButton from '@/components/common/AnimatedButton';

const stats = [
  { icon: Award, label: 'Awards Won', value: '25+' },
  { icon: Users, label: 'Happy Clients', value: '500+' },
  { icon: Star, label: 'Properties', value: '50+' },
  { icon: Crown, label: 'Years Experience', value: '15' },
];

const team = [
  {
    name: 'Alexander Sterling',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    bio: 'Visionary leader with 20+ years in luxury real estate and film production.',
  },
  {
    name: 'Victoria Ashford',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    bio: 'Award-winning designer specializing in cinematic spaces and luxury interiors.',
  },
  {
    name: 'Marcus Chen',
    role: 'Location Manager',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    bio: 'Expert in property curation with an eye for cinematic potential.',
  },
];

const clientLogos = [
  'Netflix', 'Disney', 'HBO', 'Amazon Studios', 'Universal', 'Paramount'
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Crafting <span className="gold-text">Cinematic</span> Experiences
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              For over 15 years, Prestige Elite Rentals has been the premier destination 
              for filmmakers, photographers, and creative professionals seeking extraordinary 
              locations that transcend the ordinary.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <AnimatedButton size="lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
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
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <div className="text-3xl font-bold gold-text mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="gold-text">Legacy</span>
              </h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2008 by visionary Alexander Sterling, Prestige Elite Rentals 
                  began with a simple yet profound mission: to provide filmmakers and 
                  creative professionals with access to the world's most extraordinary 
                  properties.
                </p>
                <p>
                  What started as a boutique collection of luxury homes has evolved into 
                  an exclusive network of over 50 premium properties across California, 
                  each carefully curated for its unique character, architectural significance, 
                  and cinematic potential.
                </p>
                <p>
                  Today, we're proud to have facilitated over 500 productions, from 
                  intimate independent films to major studio blockbusters, earning the 
                  trust of Hollywood's most discerning creators.
                </p>
              </div>
              <div className="mt-8">
                <AnimatedButton variant="outline">
                  View Our Portfolio
                  <ChevronRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl luxury-shadow">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                  alt="Luxury property interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              className="text-4xl font-bold mb-6"
            >
              Meet Our <span className="gold-text">Team</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              The passionate professionals behind every exceptional experience, 
              bringing decades of expertise in luxury real estate and creative production.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto luxury-shadow"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-yellow-600 dark:text-yellow-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200"
            >
              Trusted by Industry Leaders
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center items-center gap-8 opacity-60"
            >
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="text-2xl font-bold text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                >
                  {logo}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-6"
            >
              Ready to Create Something Extraordinary?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Let's discuss your vision and find the perfect property to bring your creative project to life.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <AnimatedButton variant="secondary" size="lg">
                Start Your Project
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}