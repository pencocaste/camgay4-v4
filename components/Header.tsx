"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative">
      {/* Contenedor fijo que ocupa el espacio del header cuando está fixed */}
      <div style={{ height: scrollPosition > 0 ? headerHeight : 'auto' }} />

      {/* Header principal */}
      <div 
        ref={headerRef}
        className="w-full bg-[#FF5100]"
        style={{
          position: scrollPosition > 0 ? 'fixed' : 'relative',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transform: `translateY(${Math.max(0, -scrollPosition)}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="w-full px-4 md:w-[calc(100%-25px)] md:max-w-[2400px] mx-auto">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://logo.camgay4.com/CAMGAY4.png"
                alt="CAMGAY4 LOGO"
                width={197}
                height={59}
                priority
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link 
                href={isMobile 
                  ? "https://www.camgay4.com/accounts/register/?tour=NwNd&campaign=lRUVu&track=CG4footermodels"
                  : "https://www.camgay4.com/accounts/register/?tour=07kX&campaign=lRUVu&track=CG4footer"
                }
                rel="nofollow noreferrer noopener"
              >
                <Button className="bg-white hover:bg-gray-200 text-black text-lg px-8 py-6 rounded-full">
                  {isMobile ? "Join Free" : "Create Free Account"}
                </Button>
              </Link>
              {!isMobile && (
                <Link 
                  href="https://www.camgay4.com/auth/login/"
                  rel="nofollow noreferrer noopener"
                >
                  <Button 
                    variant="outline" 
                    className="bg-white text-black border-black hover:bg-gray-100 rounded-full"
                  >
                    Log In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
