import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenJockDescription } from '@/components/descriptions/MenJockDescription';
import { MenJockBottomDescription } from '@/components/descriptions/MenJockBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Jock Cams ❤️ Live Sex Chat on CAMGAY4.com',
  description: 'Watch Jock Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Athletic Men. +300 Live Jock Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://live.camgay4.com/jock/',
  },
};

export const dynamic = 'force-dynamic';

export default async function JockPage() {
  const initialModels = await fetchModels('men', 1, 36, 'muscle');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenJockDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="muscle"
              />
              <div className="mt-8">
                <MenJockBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}