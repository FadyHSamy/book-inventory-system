import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:3100";

export const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
  const apiUrl = `${BASE_URL}${url}`;
  return axios.get<T>(apiUrl);
};

export const post = async <T>(url: string, data: any): Promise<AxiosResponse<T>> => {
  const apiUrl = `${BASE_URL}${url}`;
  return axios.post<T>(apiUrl, data);
};
