import links from './links.json' assert { type: "json" };;

const container = document.getElementById('links');

function onClick(link){
    window.open(link);
}

for (const link of links) {
    const card = document.createElement('div');
    card.classList.add("card");
    if(link.url) {
        card.setAttribute("onclick", window.open('"' + link.url + '"'));   
    }
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(link.nome));
    card.appendChild(span);
    container.appendChild(card)
}
