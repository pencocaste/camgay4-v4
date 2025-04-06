import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenCumDescription } from '@/components/descriptions/MenCumDescription';
import { MenCumBottomDescription } from '@/components/descriptions/MenCumBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Cum Gay Cams ❤️ Males Cumming on Webcam on CAMGAY4.com',
  description: 'Watch Cum Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Male Models. +300 Live Cum Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://live.camgay4.com/cum/',
  },
};

export const dynamic = 'force-dynamic';

export default async function CumPage() {
  const initialModels = await fetchModels('men', 1, 36, 'cum');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenCumDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="cum"
              />
              <div className="mt-8">
                <MenCumBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}