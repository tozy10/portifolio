// Injects the server-rendered app into dist/index.html so crawlers get real content.
import { readFile, rm, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const ssrDir = new URL('../dist-ssr/', import.meta.url)

const { render } = await import(new URL('entry-server.js', ssrDir).href)
const indexFile = new URL('index.html', dist)
const template = await readFile(indexFile, 'utf8')

const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) {
  throw new Error('prerender: <div id="root"></div> not found in dist/index.html')
}

await writeFile(indexFile, template.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerender: wrote dist/index.html')
