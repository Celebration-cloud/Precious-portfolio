'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, Target, Zap, CheckCircle, Play } from 'lucide-react';
import type { BusinessInfo, WhyChooseUsItem } from '../../schemas/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface AboutClientProps {
  businessInfo: BusinessInfo;
  targetAudience: string[];
  brandPersonality: string[];
  whyChooseUs: WhyChooseUsItem[];
}

export default function AboutClient({
  businessInfo,
  targetAudience,
  brandPersonality,
  whyChooseUs,
}: AboutClientProps) {
  return (
    <div className="dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Crafting Visual Stories That Inspire
              </h1>
              <p className="text-xl text-slate-300">{businessInfo.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
                  alt="PEC Media Production"
                  width={800}
                  height={533}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-2xl shadow-xl">
                  <div className="text-white text-left">
                    <div className="text-4xl font-bold">5+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Our Mission & Vision
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      Our Mission
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      To deliver exceptional creative media solutions that help individuals and
                      businesses effectively communicate their message, strengthen their brand
                      identity, and engage their target audience across multiple platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      Our Vision
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      To become the leading creative media agency in Africa, recognized for
                      innovation, quality, and client satisfaction, while continuously pushing the
                      boundaries of visual storytelling and digital content creation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Personality */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              Our Brand Personality
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              These core values define who we are and how we approach every project.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {brandPersonality.map((trait) => (
              <motion.div
                key={trait}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{trait}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Our Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              Why Choose PEC Media
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Award className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 group-hover:text-blue-100 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Who We Serve
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
                Our Target Audience
              </h2>
              <p className="text-slate-300 mb-8">
                We work with a diverse range of clients, from startups to established corporations,
                providing tailored media solutions that meet their unique needs and objectives.
              </p>

              <ul className="space-y-4 text-left">
                {targetAudience.map((audience, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300">{audience}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-slate-800 p-6 rounded-2xl text-center">
                  <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-slate-400 text-sm">Happy Clients</div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl text-center">
                  <Play className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-slate-400 text-sm">Projects Completed</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-slate-800 p-6 rounded-2xl text-center">
                  <Award className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-slate-400 text-sm">Services Offered</div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl text-center">
                  <Zap className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team/Founder Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              Meet the Founder
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-4xl font-bold">
                    {businessInfo.clientName
                      .split(' ')
                      .map((n: string) => n[0])
                      .join('')}
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {businessInfo.clientName}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    Founder & Creative Director
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    With a passion for visual storytelling and years of experience in media
                    production,
                    {businessInfo.clientName.split(' ')[0]} founded PEC Media Production with a
                    vision to help businesses and individuals communicate their stories effectively.
                    Under his leadership, the company has grown to become a trusted partner for
                    creative media solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
