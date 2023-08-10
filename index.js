import links from './links.json' assert { type: "json" };;

const container = document.getElementById('links');

for (const link of links) {
    container.appendChild(`<div class="card"><span>${link.nome}</span></div>`)
}
