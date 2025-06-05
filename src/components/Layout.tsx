import { useEffect, useState } from 'react';

import desktopBg from '../assets/pattern-background-desktop.svg';
import mobileBg from '../assets/pattern-background-mobile.svg';

export function LayoutDefault({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-neutral-blue-100 relative min-h-screen w-full px-4">
      <div className="bg-primary-pale absolute top-0 left-0 h-full w-full">
        <img
          src={isMobile ? mobileBg : desktopBg}
          alt="Background decorativo"
          className="w-full object-cover"
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto w-full max-w-[480px]">{children}</div>
      </div>
    </div>
  );
}
