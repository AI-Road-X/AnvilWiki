import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'vitest/config';

const root = fileURLToPath(new URL('.', import.meta.url));
const optionalFeatureTestFiles = [
  ['tests/community-digest.test.ts', 'src/components/landing/community-digest.json'],
  ['tests/landing-paths.test.ts', 'src/config/landing.ts'],
  ['tests/redirects.test.ts', 'public/_redirects'],
] as const;
const excludedOptionalTests = optionalFeatureTestFiles
  .filter(([, featureFile]) => !existsSync(join(root, featureFile)))
  .map(([testFile]) => testFile);

export default defineConfig({
  resolve: {
    alias: {
      // fileURLToPath 还原 percent-encoding；`.pathname` 在含中文的目录下会得到 %E7... 导致模块解析失败
      '~': fileURLToPath(new URL('./src/', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', ...excludedOptionalTests],
  },
});
