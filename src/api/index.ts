import axios, { AxiosInstance } from "axios";
import { store } from "@/redux/store";

export default class Api {
  client!: AxiosInstance;

  constructor(baseURL: string) {
    const options = {
      baseURL,
    }

    this.client = axios.create(options);
    this.client.interceptors.request.use(
      config => {
        const currentState = store.getState();
        const token = currentState.auth.token;

        if (config.headers && token) {
          config.headers['Authorization'] = 'Bearer ' + token;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    )
  }

  public async get(endpoint: string, params?: Record<string, any>): Promise<any> {
    const response = await this.client.get(endpoint, { params });
    return response.data;
  }

  public async post(endpoint: string, body: Record<string, any> = {}): Promise<any> {
    const response = await this.client.post(endpoint, { ...body });
    return response.data;
  }
}