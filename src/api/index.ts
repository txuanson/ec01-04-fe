import axios, { AxiosInstance } from "axios";
import { ILoginDto, IRegisterDto } from "../dto/auth.dto";

let store

export const injectStore = _store => {
  store = _store
}

export default class Api {
  client!: AxiosInstance;

  constructor(baseURL: string = 'https://ec01-04-be.herokuapp.com') {
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

  public async login(payload: ILoginDto): Promise<string> {
    const response: { accessToken: string } = await this.post('/auth/login', payload);
    return response.accessToken;
  }

  public async register(payload: IRegisterDto): Promise<void> {
    const response = await this.post('/auth/register', payload);
  }
}