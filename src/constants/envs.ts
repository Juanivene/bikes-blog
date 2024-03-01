import envVar from 'env-var';

export const ENVS = {
  env: envVar.get('NEXT_PUBLIC_ENV').asString(),
  baseUrl: envVar.get('NEXT_PUBLIC_API_BASE_URL').asString(),
};
