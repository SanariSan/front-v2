import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { DEFAULT_HEADERS } from './request-base.service.const';
import type { IRequest } from './request-base.service.type';
import { handleErrorResponse, handleSuccessResponse } from '../../helpers/services/response.helper';

const url = <string>process.env.REACT_APP_URL;
const host = <string>process.env.REACT_APP_LOCAL_HOST;
const port = Number.parseInt(<string>process.env.REACT_APP_LOCAL_PORT);
const apiVersion = <string>process.env.REACT_APP_API_VERSION;

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`REACT_APP_NODE_ENV: ${process.env.REACT_APP_NODE_ENV}`);

const axiosApiBase: AxiosInstance = axios.create({
  baseURL:
    <string>process.env.REACT_APP_NODE_ENV === 'production'
      ? `https://${url}/${apiVersion}`
      : `http://${host}:${port}/${apiVersion}`,
  headers: DEFAULT_HEADERS,
  timeout: 10_000,
});

const handleRequest =
  (req) =>
  ({ path, headers, data, extra }: IRequest): Promise<any> =>
    req(path, data || { ...extra, headers }, { ...extra, headers })
      .then(handleSuccessResponse)
      .catch(handleErrorResponse);
export { handleRequest, axiosApiBase };
