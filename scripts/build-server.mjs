import { build } from 'esbuild';
import path from 'path';

async function bundle() {
  try {
    const entry = path.resolve('./server/index.ts');
    await build({
      entryPoints: [entry],
      bundle: true,
      platform: 'node',
      format: 'esm',
      outdir: 'dist',
      sourcemap: false,
      external: [],
      logLevel: 'info',
    });
    console.log('server bundled to dist/');
  } catch (err) {
    console.error('esbuild failed:', err);
    process.exit(1);
  }
}

bundle();
