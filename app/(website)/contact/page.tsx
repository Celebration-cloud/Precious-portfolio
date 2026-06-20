import { getBusinessInfo } from '../../../lib/sanity';
import ContactClient from '../../../features/contact/ContactClient';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with PEC Media Production. Submit a form to request quotes for video editing, graphics design, cinematography, or photography.',
};

export default async function ContactPage() {
  const businessInfo = await getBusinessInfo();

  return <ContactClient businessInfo={businessInfo} />;
}
