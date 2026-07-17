import { getTestimonials } from '../../../lib/sanity';
import TestimonialsClient from '../../../features/testimonials/TestimonialsClient';

export const metadata = {
  title: 'Testimonials',
  description:
    'Read what our clients say about working with PEC Media Production for video creation, editing, branding, and other digital solutions.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return <TestimonialsClient testimonials={testimonials} />;
}
