import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div>
      {/* Left */}

      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
            fill
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" fill className="object-contain" />
        </div>
        <h1>Right Side</h1>
      </div>

      {/* Middle */}
      {/* Right */}
    </div>
  );
}
