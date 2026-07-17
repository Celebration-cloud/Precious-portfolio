import { ThemeProvider } from '../../components/layout/ThemeProvider';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { getBusinessInfo, getServices } from '../../lib/sanity';

export default async function WebsiteLayout({ children }: { children: React.ReactNode }) {
  const [businessInfo, services] = await Promise.all([getBusinessInfo(), getServices()]);
  const logoUrl = businessInfo.logo.startsWith('http')
    ? businessInfo.logo
    : `https://pecmediaproduction.com${businessInfo.logo}`;
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: businessInfo.name,
    description: businessInfo.description,
    url: 'https://pecmediaproduction.com',
    logo: logoUrl,
    email: businessInfo.email,
    telephone: businessInfo.phoneHref,
    address: businessInfo.address,
    sameAs: Object.values(businessInfo.socialMedia),
  }).replaceAll('<', '\\u003c');

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        <Header businessInfo={businessInfo} />
        <main className="flex-grow pt-20">{children}</main>
        <Footer businessInfo={businessInfo} services={services} />
      </div>
    </ThemeProvider>
  );
}
