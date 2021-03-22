declare const BUCKET: KVNamespace;

declare function getCache(): {
  match: (cacheKey: CacheKey) => any;
  put: (cacheKey: CacheKey, body: any) => void;
  delete: (cacheKey: CacheKey) => void;
};

type CacheKey = string | Request;

interface ErrorResponse {
  status: number;
  statusText: string;
  help?: string;
}
