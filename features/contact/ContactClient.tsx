'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { contactSchema, type ContactInput } from '../../schemas/contact';
import type { BusinessInfo } from '../../schemas/content';
import { submitContactForm } from '../../actions/contact-action';

interface ContactClientProps {
  businessInfo: BusinessInfo;
}

export default function ContactClient({ businessInfo }: ContactClientProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      website: '',
    },
  });

  const onSubmit = async (data: ContactInput) => {
    setSubmitError(null);
    try {
      const response = await submitContactForm(data);
      if (response.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError(response.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setSubmitError('Failed to send message. Please check your internet connection.');
    }
  };

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
                Contact Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Let&apos;s Work Together
              </h1>
              <p className="text-xl text-slate-300">
                Have a project in mind? Get in touch and let&apos;s create something amazing
                together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 text-left">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                We&apos;re here to help bring your creative vision to life. Reach out to us through
                any of the following channels or fill out the form.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h3>
                    <a
                      href={`tel:${businessInfo.phoneHref}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h3>
                    <p className="text-slate-600 dark:text-slate-400">{businessInfo.address}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Working Hours
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  Chat with us directly for quick responses and instant quotes.
                </p>
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="sr-only" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register('website')}
                      />
                    </div>
                    {submitError && (
                      <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 text-sm">
                        {submitError}
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                        } rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:border-transparent transition-all outline-none`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email')}
                          className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                            errors.email
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                          } rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:border-transparent transition-all outline-none`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                            errors.phone
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                          } rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:border-transparent transition-all outline-none`}
                          placeholder="08133678261"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        {...register('service')}
                        className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                          errors.service
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                        } rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:border-transparent transition-all outline-none`}
                      >
                        <option value="">Select a service</option>
                        <option value="video-production">Video Production</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="ai-video-editing">AI-Powered Video Editing</option>
                        <option value="motion-graphics">Motion Graphics</option>
                        <option value="colour-grading">Colour Grading</option>
                        <option value="photography">Photography</option>
                        <option value="graphics-design">Graphics Design</option>
                        <option value="cinematography">Cinematography</option>
                        <option value="cv-services">CV Creation & Revamp</option>
                        <option value="consultancy">Creative Media Consultancy</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        {...register('message')}
                        rows={5}
                        className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                        } rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:border-transparent transition-all resize-none outline-none`}
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
