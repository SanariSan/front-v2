type TPath =
  | '/access/register'
  | '/access/login'
  | '/access/refresh'
  | '/access/change-password'
  | '/access/logout';

type TMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface IRequest {
  path?: TPath | string;
  headers?: {};
  data?: {};
  extra?: {};
}

export type { TPath, TMethods, IRequest };
