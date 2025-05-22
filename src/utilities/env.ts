
export const getEnvVariable = (key: string): string => {
  const value = import.meta.env[`VITE_${key}`];
  
  if (!value) {
    console.warn(`Environment variable ${key} is not set`);
    return '';
  }
  
  return value as string;
};

export const NAVER_MAPS_CLIENT_ID = getEnvVariable('NAVER_MAPS_CLIENT_ID');
