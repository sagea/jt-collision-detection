import esbuild from 'esbuild'
import glob from 'fast-glob'

const banner = `
// ==========================================================
// jt collision detection
// Written by: Jeffrey Thompson
// Original Blog Post: https://www.jeffreythompson.org/collision-detection/
// Coverted to Javascript By: Alexander Sage
// ==========================================================
`
const bundleFileName = 'jt-collision-detection';
const globalName = 'jtcd';
const entryfile = './src/index.ts';
const allFiles = await glob('./src/**/*.ts')

const globalEsbuildOptions = {
  banner: {
    js: banner
  }
}

console.log('ESM')
await esbuild.build({
  ...globalEsbuildOptions,
  entryPoints: allFiles,
  outExtension: { '.js': '.mjs' },
  bundle: true,
  format: 'esm',
  platform: 'neutral',
  sourcemap: true,
  outdir: 'build/esm',
  plugins: [
    {
      name: 'add-mjs',
      setup(build) {
        build.onResolve({ filter: /.*/ }, args => {
          if (args.importer) {
            return {
              path: args.path.replace(/\.ts$/, '.mjs'),
              external: true
            }
          }
        })
      },
    }
  ]
})

console.log('ESM BUNDLE')
const esmBundle = {
  ...globalEsbuildOptions,
  entryPoints: [entryfile],
  bundle: true,
  format: 'esm',
  platform: 'neutral',
  sourcemap: true,
  outfile: `build/esm-bundle/${bundleFileName}.js`
};
await esbuild.build({
  ...esmBundle,
  minify: false,
  outfile: `build/esm-bundle/${bundleFileName}.js`
})
await esbuild.build({
  ...esmBundle,
  minify: true,
  outfile: `build/esm-bundle/${bundleFileName}.min.js`
})


console.log('NODE')
await esbuild.build({
  ...globalEsbuildOptions,
  entryPoints: allFiles,
  format: 'cjs',
  platform: 'node',
  sourcemap: true,
  outdir: 'build/cjs'
})


console.log('IIFE BUNDLE')
const iifeBunddle = {
  ...globalEsbuildOptions,
  entryPoints: [entryfile],
  bundle: true,
  format: 'iife',
  platform: 'neutral',
  sourcemap: true,
}

await esbuild.build({
  ...iifeBunddle,
  minify: false,
  outfile: `build/iife/${bundleFileName}.js`,
  globalName,
});

await esbuild.build({
  ...iifeBunddle,
  minify: true,
  outfile: `build/iife/${bundleFileName}.min.js`,
  globalName,
});
