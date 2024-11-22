import axios, { AxiosResponse } from "axios";
import { IApplication, IConstructor } from "./models";

const BASE_URL = "http://localhost:3001";

export const api = {
  getConstructors: (): Promise<AxiosResponse<IConstructor[]>> =>
    axios.get(`${BASE_URL}/constructors`),
  getApplications: (): Promise<AxiosResponse<IApplication[]>> =>
    axios.get(`${BASE_URL}/applications`),
  createNewApplication: (
    data: IApplication
  ): Promise<AxiosResponse<IApplication>> =>
    axios.post(`${BASE_URL}/applications`, data),
};
