import fs from 'fs';
import path from 'path';

const distPath = path.resolve('./dist');

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

if (!fs.existsSync(distPath)) {
  fail(`Build failed: ${distPath} does not exist`);
}

const files = fs.readdirSync(distPath);
if (files.length === 0) {
  fail(`Build failed: ${distPath} is empty`);
}

console.log('postbuild check OK — dist contains:', files.join(', '));
