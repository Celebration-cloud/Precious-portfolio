import {
  getBusinessInfo,
  getTargetAudience,
  getBrandPersonality,
  getWhyChooseUs,
} from '../../../lib/sanity';
import AboutClient from '../../../features/about/AboutClient';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about our creative media agency mission, vision, brand values, and meet our founder.',
};

export default async function AboutPage() {
  const [businessInfo, targetAudience, brandPersonality, whyChooseUs] = await Promise.all([
    getBusinessInfo(),
    getTargetAudience(),
    getBrandPersonality(),
    getWhyChooseUs(),
  ]);

  return (
    <AboutClient
      businessInfo={businessInfo}
      targetAudience={targetAudience}
      brandPersonality={brandPersonality}
      whyChooseUs={whyChooseUs}
    />
  );
}
