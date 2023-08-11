import links from './links.json' assert { type: "json" };;

const container = document.getElementById('links');

for (const link of links) {
    const card = document.createElement('a');
    card.classList.add("card");
    card.appendChild(document.createTextNode(link.nome));
    if(link.url) {
        card.setAttribute("href", link.url);   
    }
    card.setAttribute("target", "_blank");
    container.appendChild(card)
}
