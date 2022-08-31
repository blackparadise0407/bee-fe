import axios, { AxiosRequestConfig, Method } from 'axios'
import qs from 'query-string'

const client = axios.create({
    paramsSerializer: (params) => qs.stringify(params),
})

client.interceptors.request.use((response) => {
    return response?.data ?? response
})

const httpClient = <T>(
    method: Method,
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
) => {
    const conf: AxiosRequestConfig = {
        method,
        url,
        ...config,
    }
    if (method === 'GET' || method === 'get') {
        conf.params = data
    } else {
        conf.data = data
    }
    return client.request(conf) as unknown as T
}

export default httpClient
