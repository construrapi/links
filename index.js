import links from './links.json' assert { type: "json" };;

const container = document.getElementById('links');

function onClick(link){
    window.open(link);
}

for (const link of links) {
    const card = document.createElement('div');
    card.classList.add("card");
    const a = document.createElement('a');
    a.appendChild(document.createTextNode(link.nome));
    if(link.url) {
        a.setAttribute("href", link.url);   
    }
    card.appendChild(span);
    container.appendChild(card)
}
