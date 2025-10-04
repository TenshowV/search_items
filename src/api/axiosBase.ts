import axios, { type AxiosInstance, AxiosError } from 'axios';

export class AxiosBase {
  client: AxiosInstance;

  constructor(config: Record<string, unknown>) {
    this.client = axios.create(config);

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.status === 401) {
          //Действия для ошибки 401
        } else if (error.status === 403) {
          //Действия для ошибки 403
        }

        return Promise.reject(error);
      },
    );
  }
}
