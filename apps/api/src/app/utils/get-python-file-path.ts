import { join } from 'path';

export function getPythonFilePath(relativePath: string) {
  return join(relativePath);
}
