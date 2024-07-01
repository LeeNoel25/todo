export interface ApiError {
  message: string;
  stack?: string;
}

export interface DiagnosticInfo {
  field: string;
  message: string;
}

export interface BasicApiResponse {
  requestId: string;
  status?: 'success' | 'error'; //added ?
  timestamp: string;
  method: string;
  url: string;
  message?: string;
  error?: ApiError;
  info?: DiagnosticInfo[];
  data?: any; 
}
