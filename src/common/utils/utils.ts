import { join } from 'path';

export const publicPath = () => {
  return join(process.cwd(), 'public');
};
