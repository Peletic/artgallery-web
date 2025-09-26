import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ['build/index.js'],
    bundle: true,
    outfile: 'dist/out.js',
    platform: "node"
})