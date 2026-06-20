import { getServices } from '../../../lib/sanity';
import ServicesClient from '../../../features/services/ServicesClient';

export const metadata = {
  title: 'Services',
  description: 'Explore our professional creative media solutions including Video Production, Editing, Motion Graphics, Photography, Graphics Design, and CV Creation.',
};

export default async function ServicesPage() {
  const services = await getServices();

  return <ServicesClient services={services} />;
}
