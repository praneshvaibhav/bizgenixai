import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**', '.output/**', '.site-stage/**', '.vercel/**', '.vinext/**', '.wrangler/**',
    'build/**', 'dist/**', 'out/**', 'outputs/**', 'work/**', 'next-env.d.ts',
  ]),
]);

export default eslintConfig;
