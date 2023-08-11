window.onload = async function () {
    const response = await fetch("./links.jsonn");
    const data = await response.json();
    
    const container = document.getElementById('links');

    for (const link of links) {
        const card = document.createElement('a');
        card.classList.add("card");
        card.appendChild(document.createTextNode(link.nome));
        if(link.url) {
            if(link.url.includes("gmail")){
                card.setAttribute("href", "mailto:" + link.url);
            } else {
                card.setAttribute("href", link.url);   
            }
        }
        card.setAttribute("target", "_blank");
        container.appendChild(card)
    }
}
