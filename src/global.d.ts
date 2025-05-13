interface FbqFunction {
  (...args: any[]): void;
  callMethod?: (...args: any[]) => void;
  queue?: any[];
  loaded?: boolean;
  version?: string;
  push?: (...args: any[]) => void;
}

interface Window {
  fbq?: FbqFunction;
}