"use client";

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function MenSouthAmericanDescription() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const description = `Experience the passion and energy of our South American male models on CamGay4. From Brazil to Colombia, our Latin performers bring their natural charisma and vibrant personalities to every show. Join their rooms to enjoy authentic South American charm and unforgettable performances.`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">South American Men</h1>

      {isMobile ? (
        <details className="group">
          <summary
            className="flex items-center justify-end cursor-pointer -mt-8 mb-1"
          >
            <div className="transform transition-transform duration-200 group-open:rotate-180">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </summary>

          <div className="mt-1">
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </details>
      ) : (
        <p
          className="text-gray-600 mt-1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
}