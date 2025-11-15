import dotenv from 'dotenv';

dotenv.config();

const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key];
  if (value) {
    return value;
  }

  if (fallback !== undefined) {
    return fallback;
  }

  throw new Error(`Environment variable ${key} is required.`);
};

export const env = {
  nodeEnv: getEnv('NODE_ENV', 'development'),
  port: Number.parseInt(getEnv('PORT', '4000'), 10),
};

export default env;
