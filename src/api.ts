import axios, { AxiosResponse } from "axios";
import { IApplication, IConstructor } from "./models";

const BASE_URL = "https://booger1.myjino.ru";

export const api = {
  getConstructors: (): Promise<AxiosResponse<IConstructor[]>> =>
    axios.get(`${BASE_URL}/constructors`),
  getApplications: (): Promise<AxiosResponse<IApplication[]>> =>
    axios.get(`${BASE_URL}/applications`),
  createApplication: (
    data: IApplication
  ): Promise<AxiosResponse<IApplication>> =>
    axios.post(`${BASE_URL}/applications`, data),
  createConstructor: (
    data: IConstructor
  ): Promise<AxiosResponse<IConstructor>> =>
    axios.post(`${BASE_URL}/constructors`, data),
};
