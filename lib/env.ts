import 'server-only';

import { parseServerEnv, type ServerEnv } from '../schemas/env';

let cachedEnv: ServerEnv | undefined;

export function getServerEnv(): ServerEnv {
  if (cachedEnv) return cachedEnv;

  try {
    cachedEnv = parseServerEnv(process.env);
    return cachedEnv;
  } catch (error) {
    console.error('Invalid server environment configuration', error);
    throw new Error('Invalid server environment configuration.');
  }
}
