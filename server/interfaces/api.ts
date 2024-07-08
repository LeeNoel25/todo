export interface BasicApiResponse {
  timestamp: string;
  requestId: string;
  statusCode: number;
  method: string;
  latency: number;
  url: string;
}
