import { getBusinessInfo, getServices, getTestimonials, getWhyChooseUs } from '../../lib/sanity';
import HomeClient from '../../features/home/HomeClient';

export const revalidate = 60; // Revalidate every minute

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
