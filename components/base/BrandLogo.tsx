import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandLogo() {
  return (
    <Link href="/">
      {/* Large device */}
      <div className="hidden md:block">
        <Image src="/images/logo.png" width={120} height={120} alt='airbnb-logo' />
      </div>

      {/* Small device */}
      <div className="hidden max-md:block">
        <Image src="/images/logo-sm.png" width={90} height={90} alt='airbnb-logo' />
      </div>
    </Link>
  );
}
