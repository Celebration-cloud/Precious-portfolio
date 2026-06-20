import { getPortfolioProjects, getBusinessInfo } from '../../../lib/sanity';
import PortfolioClient from '../../../features/portfolio/PortfolioClient';

export const metadata = {
  title: 'Portfolio',
  description: 'View our creative works across video production, editing, AI-powered media creation, motion graphics, and graphic design.',
};

export default async function PortfolioPage() {
  const [portfolioProjects, businessInfo] = await Promise.all([
    getPortfolioProjects(),
    getBusinessInfo(),
  ]);

  return (
    <PortfolioClient
      portfolioProjects={portfolioProjects}
      businessInfo={businessInfo}
    />
  );
}
