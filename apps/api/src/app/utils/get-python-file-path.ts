import { join } from 'path/posix';

export function getPythonFilePath(relativePath: string) {
  return join('dist/apps/api/', relativePath);
}
