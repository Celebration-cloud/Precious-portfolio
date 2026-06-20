'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Scissors, 
  Cpu, 
  Sparkles, 
  Palette, 
  Camera, 
  PenTool, 
  Film, 
  FileText, 
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{className?: string}>> = {
  Video,
  Scissors,
  Cpu,
  Sparkles,
  Palette,
  Camera,
  PenTool,
  Film,
  FileText,
  Lightbulb
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

interface ServicesClientProps {
  services: any[];
}

export default function ServicesClient({ services }: ServicesClientProps) {
  useEffect(() => {
    // Handle hash links for service anchors on mount
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

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
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Creative Solutions for Every Need
              </h1>
              <p className="text-xl text-slate-300">
                From video production to graphic design, we offer comprehensive media services 
                tailored to help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 text-left"
          >
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Video;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  variants={itemVariants}
                  className="group bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {service.fullDescription}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                              <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Tools */}
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool: string) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              Our Process
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We follow a structured approach to ensure every project meets our high standards of quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your goals, target audience, and project requirements."
              },
              {
                step: "02",
                title: "Planning",
                description: "We develop a comprehensive strategy and timeline for your project."
              },
              {
                step: "03",
                title: "Creation",
                description: "Our team brings your vision to life with expert craftsmanship and attention to detail."
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deliver the final product and ensure you're completely satisfied with the results."
              }
            ].map((process, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="text-6xl font-bold text-blue-100 dark:text-blue-900/30 mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {process.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {process.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-100 dark:bg-blue-900/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today to discuss your requirements and get a customized quote for your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
          >
            Get a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
