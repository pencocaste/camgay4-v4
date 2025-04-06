import { ChaturbateModel, ChaturbateResponse } from '@/types/api';

const API_BASE_URL = 'https://www.chaturbate.lat/api/public/affiliates/onlinerooms/';
const CAMPAIGN_SLUG = 'lRUVu';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const fetchModels = async (
  category: string,
  page: number = 1,
  limit: number = 36,
  tag?: string,
  region?: string
): Promise<ChaturbateResponse> => {
  try {
    const params = new URLSearchParams({
      wm: CAMPAIGN_SLUG,
      client_ip: 'request_ip',
      format: 'json',
      limit: limit.toString(),
      offset: ((page - 1) * limit).toString(),
      online_only: 'true',
      gender: 'm' // Always fetch male models only
    });

    // Si se proporciona un tag, lo añadimos a los parámetros
    if (tag) {
      params.append('tag', tag);
    }

    // Si se proporciona una región, la añadimos a los parámetros
    if (region) {
      params.append('region', region);
    }

    const response = await fetch(`${API_BASE_URL}?${params.toString()}`, {
      method: 'GET',
      headers,
      next: { revalidate: 0 }, // Disable caching
    });

    if (!response.ok) {
      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        url: response.url
      });
      return { count: 0, results: [] };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching models:', error);
    return {
      count: 0,
      results: []
    };
  }
};