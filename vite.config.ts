import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import nodePolyfills from "vite-plugin-node-stdlib-browser";
import {Buffer} from "buffer"
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: {global: 'window','process.env.ANCHOR_BROWSER': true}, 
  // optimizeDeps: {
  //   esbuildOptions: {
  //       // Node.js global to browser globalThis
  //       define: {
  //           global: 'globalThis'
  //       },
  //       // Enable esbuild polyfill plugins
  //       plugins: [
  //           NodeGlobalsPolyfillPlugin({
  //               buffer: true
  //           })
  //       ]
    // }
// }
})


