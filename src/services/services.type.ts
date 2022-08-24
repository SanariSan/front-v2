type TRequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface IRequestOptions {
  url: RequestInfo | URL;
  method?: TRequestMethod;
  headers?: HeadersInit;
  body?: BodyInit | null | undefined;
  fetchOtions?: RequestInit & { method: TRequestMethod };
  timeoutSec?: number;
  maxAttempts?: number;
}

export type { TRequestMethod, IRequestOptions };
