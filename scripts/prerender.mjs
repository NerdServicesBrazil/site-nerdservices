/*
 * Pré-renderização: injeta o HTML do React em dist/index.html.
 * Assim o texto do site já vem no HTML (Google, verificação da Meta, Lighthouse)
 * e o navegador só "hidrata" a página. Roda no fim do `npm run build`.
 */
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(raiz, 'dist')
const ssr = path.join(raiz, 'node_modules', '.cache', 'site-ssr')

const { render } = await import(pathToFileURL(path.join(ssr, 'entry-server.js')).href)
const html = await readFile(path.join(dist, 'index.html'), 'utf8')
const marca = '<div id="root"></div>'
if (!html.includes(marca)) throw new Error('prerender: <div id="root"></div> não encontrado em dist/index.html')
const app = render()
if (!app || app.length < 1000) throw new Error('prerender: HTML gerado vazio ou pequeno demais')
await writeFile(path.join(dist, 'index.html'), html.replace(marca, `<div id="root">${app}</div>`))
await rm(ssr, { recursive: true, force: true })
console.log(`prerender: index.html com ${(app.length / 1024).toFixed(1)} KB de conteúdo`)
