import { baseClient } from '@/api/clients/baseClient';

export async function getSearchItems(params: Record<string, unknown> = {}) {
  return baseClient
    .get('/mockSearchParams.json', { params: params })
    .then((response) => {
      return { status: response.status, data: response.data, state: 'success' };
    })
    .catch((error) => {
      return { status: error.status, data: null, state: 'failed' };
    });
}
