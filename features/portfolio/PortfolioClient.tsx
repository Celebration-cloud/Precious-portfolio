'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, X, Play, Image as ImageIcon } from 'lucide-react';
import type { BusinessInfo, PortfolioProject } from '../../schemas/content';

const categories = [
  'All',
  'Video Production',
  'Video Editing',
  'AI-Powered Video Editing',
  'Motion Graphics',
  'Colour Grading',
  'Photography',
  'Graphics Design',
];

interface PortfolioClientProps {
  portfolioProjects: PortfolioProject[];
  businessInfo: BusinessInfo;
}

export default function PortfolioClient({ portfolioProjects, businessInfo }: PortfolioClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

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
                Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Our Creative Work
              </h1>
              <p className="text-xl text-slate-300">
                Explore our portfolio of video productions, designs, and creative projects that
                showcase our expertise and creativity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-blue-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-white text-xl font-semibold mt-1">{project.title}</h3>
                    <p className="text-slate-300 text-sm mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Play/View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.videoUrl ? (
                      <Play className="w-5 h-5 text-white fill-white" />
                    ) : (
                      <ImageIcon className="w-5 h-5 text-white" />
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400">
                No projects found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* External Links Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href={businessInfo.youtubePlaylist}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                  <Play className="w-7 h-7 text-red-600 dark:text-red-400" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Video Portfolio
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Watch our complete video collection on YouTube. Subscribe for the latest updates!
              </p>
            </a>

            <a
              href={businessInfo.graphicsDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <ImageIcon className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-green-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Graphics Portfolio
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Browse our graphic design work on Google Drive. See our creative designs and
                branding projects.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-3xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Image */}
              <div className="relative aspect-video">
                <Image
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {selectedProject.description}
                </p>

                {/* Challenge */}
                <div className="mb-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    The Challenge
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{selectedProject.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Our Solution
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{selectedProject.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Results</h3>
                  <p className="text-slate-600 dark:text-slate-400">{selectedProject.results}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.videoUrl && (
                    <a
                      href={selectedProject.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
                    >
                      <Play className="mr-2 w-5 h-5" />
                      Watch Video
                    </a>
                  )}
                  {selectedProject.imageUrl && (
                    <a
                      href={selectedProject.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                    >
                      <ImageIcon className="mr-2 w-5 h-5" />
                      View Designs
                    </a>
                  )}
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    Start Similar Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
