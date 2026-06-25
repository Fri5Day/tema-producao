import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

export class CHttpClient {
  private readonly client: AxiosInstance

  constructor(baseURL = import.meta.env.VITE_API_BASE_URL) {
    this.client = axios.create({
      baseURL,
      headers: {
        Accept: 'application/json',
      },
    })
  }

  async get<TResponse>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await this.client.get<TResponse>(url, config)

    return response.data
  }
}

export const httpClient = new CHttpClient()
