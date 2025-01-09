'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Logo = () => {
  const { resolvedTheme } = useTheme(); // Resolved theme after hydration
  const [mounted, setMounted] = useState(false);

  // Ensures the component only renders on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder during SSR
    return <div style={{ height: '40px', width: '120px' }} />;
  }

  return (
    <div className="flex items-center gap-1">
      {resolvedTheme === 'dark' ? (
        <Image src="/logo-dark.png" alt="Turbostrix Dark Logo" width={24} height={24} />
      ) : (
        <Image src="/logo-light.png" alt="Turbostrix Light Logo" width={24} height={24} />
      )}
      <h2 className='text-sm font-semibold font-poppins'>Turbostrix</h2>
    </div>
  );
};

export default Logo;

