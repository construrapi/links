import links from './links.json' assert { type: "json" };;

const container = document.getElementById('links');

for (const link of links) {
    const card = document.createElement('div');
    card.classList.add("card")
    const span = document.createElement('span');
    span.textContent(link.nome);
    card.appendChild(span);
    container.appendChild(card)
}
