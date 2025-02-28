//todo componente é uma função javascript que irá retornar mais javascript, html e css
//super invoca o construtor do metodo que esta herdando

class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<h1>Hello Word</h1>";
    }
}

customElements.define("card-news", CardNews);