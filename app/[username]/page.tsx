import { Metadata } from 'next';
import { fetchModels } from '@/lib/api';
import { ChaturbateModel } from '@/types/api';
import ModelPageClient from './ModelPageClient';

// Hacer la página dinámica para que se renderice en el servidor en cada request
export const dynamic = 'force-dynamic';

// Generar metadatos dinámicos basados en el modelo
export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  return {
    title: `${params.username} Live Gay Sex Cam on CAMGAY4.com ❤️`,
    description: `Watch ${params.username}'s Live Gay Sex Cam Show on Live.CamGay4.com. ⭐ Join Now for Free and Chat with ${params.username}!`,
    alternates: {
      canonical: `https://live.camgay4.com/${params.username}/`,
    },
  };
}

async function findModel(username: string): Promise<ChaturbateModel | null> {
  const data = await fetchModels('men', 1, 500);
  const model = data.results.find(m => m.username.toLowerCase() === username.toLowerCase());
  return model || null;
}

export default async function ModelPage({ params }: { params: { username: string } }) {
  // Buscar el modelo en el servidor
  const model = await findModel(params.username);
  
  // Si no se encuentra el modelo, aún renderizamos el componente cliente
  // que mostrará un estado de error apropiado
  return <ModelPageClient username={params.username} initialModel={model} />;
}