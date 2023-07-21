import { readFileSync } from 'node:fs';
import * as yaml from 'js-yaml';
import { join } from 'node:path';
import { cwd } from 'node:process';
const ROUTE_TO_CONFIG_FILE = [
  cwd(),
  'dist',
  'apps',
  'resume',
  'assets',
  'config.yaml',
];
export const LoadConfigs = (): Record<string, unknown> => {
  return yaml.load(
    readFileSync(join(...ROUTE_TO_CONFIG_FILE), 'utf8')
  ) as Record<string, unknown>;
};
