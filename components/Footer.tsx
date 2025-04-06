import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#FF5100]">
      <div className="w-[calc(100%-48px)] max-w-[1400px] mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Make Money Column */}
          <div>
            <span className="block font-bold mb-4 text-[#000000] text-lg">Make Money</span>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.camgay4.com/in/?tour=NwNd&campaign=lRUVu&track=CG4footermodels" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="font-medium text-[#000000] hover:text-gray-200 w-fit"
                >
                  Become a Cam Model
                </a>
              </li>
              <li>
                <a 
                  href="https://www.camgay4.com/in/?tour=07kX&campaign=lRUVu&track=CG4footer" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="font-medium text-[#000000] hover:text-gray-200 w-fit"
                >
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <span className="block font-bold mb-4 text-black text-lg">Legal</span>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.camgay4.com/terms/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="text-black hover:text-gray-200 w-fit font-light"
                >
                  Terms
                </a>
              </li>
              <li>
                <a 
                  href="https://www.camgay4.com/privacy/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="text-black hover:text-gray-200 w-fit font-light"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://www.camgay4.com/2257/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="text-black hover:text-gray-200 w-fit font-light"
                >
                  2257
                </a>
              </li>
              <li>
                <a 
                  href="https://www.camgay4.com/law_enforcement/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="text-black hover:text-gray-200 w-fit font-light"
                >
                  Law Enforcement
                </a>
              </li>
            </ul>
          </div>

          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-end">
            <Link href="/" className="relative w-[197px] h-[59px] mb-4">
              <Image
                src="https://logo.camgay4.com/CAMGAY4.png"
                alt="camgay4.com logotype"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>
            <p className="text-black text-sm mb-2">Copyright © CAMGAY4.com 2025</p>
            <a 
              href="/sitemap.xml"
              className="text-black hover:text-gray-200 text-sm"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
