// export interface ApiError {
//   message: string;
//   stack?: string;
// }

// export interface DiagnosticInfo {
//   field: string;
//   message: string;
// }

// export interface BasicApiResponse {
//   requestId: string;
//   status?: 'success' | 'error'; //added ?
//   timestamp: string;
//   method: string;
//   url: string;
//   message?: string;
//   error?: ApiError;
//   info?: DiagnosticInfo[];
//   data?: any;
// }

export interface BasicApiResponse {
  statusCode: number; // HTTP status code
  method: string; // HTTP method (GET, POST, etc.)
  route: string; // Route path (e.g., /api/v1/tasks)
  latency: number; // Latency in milliseconds
  timestamp: string; // Timestamp of the response
}
