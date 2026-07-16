import Image from 'next/image';
import { businessInfo } from '../../src/data/content';

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({
  className = 'h-12 w-[4.125rem]',
  priority = false,
}: BrandLogoProps) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      <Image
        src={businessInfo.logo}
        alt={`${businessInfo.name} logo`}
        width={1080}
        height={1350}
        priority={priority}
        sizes="96px"
        className="absolute left-1/2 top-1/2 h-auto w-[218%] max-w-none -translate-x-1/2 -translate-y-[50.9%]"
      />
    </span>
  );
}
