import { getBusinessInfo, getServices, getTestimonials, getWhyChooseUs } from '../../lib/sanity';
import HomeClient from '../../features/home/HomeClient';

export const metadata = {
  title: 'Creative Media & Digital Solutions Agency',
  description:
    'Professional video production, editing, photography, cinematography, graphic design, and creative media services.',
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  const [businessInfo, services, testimonials, whyChooseUs] = await Promise.all([
    getBusinessInfo(),
    getServices(),
    getTestimonials(),
    getWhyChooseUs(),
  ]);

  return (
    <HomeClient
      businessInfo={businessInfo}
      services={services}
      testimonials={testimonials}
      whyChooseUs={whyChooseUs}
    />
  );
}
