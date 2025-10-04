import { AxiosBase } from '@/api/axiosBase';

export const baseClient = new AxiosBase({
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
  withCredentials: true,
}).client;
